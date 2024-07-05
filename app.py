import base64
from PIL import Image
from io import BytesIO
from flask import Flask, render_template, request, redirect, url_for, flash, jsonify
from werkzeug.utils import secure_filename
import io
import os
import numpy as np
from threading import Lock
import tensorflow as tf

class TFModel:
    def __init__(self, dir_path) -> None:

        self.model_dir = dir_path

        self.inputs = {"Image": {"dtype": "float32", "shape": [None, 224, 224, 3], "name": "Image:0"}}
        self.outputs = {"Confidences": {"dtype": "float32", "shape": [None, 6], "name": "sequential/dense_2/Softmax:0"}}
        self.lock = Lock()
        self.model = tf.saved_model.load(tags=["serve"], export_dir=self.model_dir)
        self.predict_fn = self.model.signatures["serving_default"]

    def predict(self, image: Image.Image) -> dict:
        image = self.process_image(image, self.inputs.get("Image").get("shape"))
        with self.lock:
            feed_dict = {}
            feed_dict[list(self.inputs.keys())[0]] = tf.convert_to_tensor(image)
            outputs = self.predict_fn(**feed_dict)
            return self.process_output(outputs)

    def process_image(self, image, input_shape) -> np.ndarray:
        width, height = image.size
        if image.mode != "RGB":
            image = image.convert("RGB")
        # Centering and cropping image
        if width != height:
            square_size = min(width, height)
            left = (width - square_size) / 2
            top = (height - square_size) / 2
            right = (width + square_size) / 2
            bottom = (height + square_size) / 2

            image = image.crop((left, top, right, bottom))
        input_width, input_height = input_shape[1:3]
        if image.width != input_width or image.height != input_height:
            image = image.resize((input_width, input_height))
        image = np.asarray(image) / 255.0

        return np.expand_dims(image, axis=0).astype(np.float32)

    def process_output(self, outputs) -> dict:
        out_keys = ["label", "confidence"]
        results = {}
        for key, tf_val in outputs.items():
            val = tf_val.numpy().tolist()[0]
            if isinstance(val, bytes):
                val = val.decode()
            results[key] = val
        confs = results["Confidences"]
        labels = ['Alternaria',"Mosaic","Powdery Mildew","Scab"]
        output = [dict(zip(out_keys, group)) for group in zip(labels, confs)]
        sorted_output = {"predictions": sorted(output, key=lambda k: k["confidence"], reverse=True)}
        return sorted_output

def GetImageDetails(img_content):

    image = Image.open(io.BytesIO(img_content))
    dir_path = os.path.dirname(os.path.abspath(__file__))
    model = TFModel(dir_path=dir_path)
    outputs = model.predict(image)
    max_confidence_prediction = outputs['predictions'][0]
    label_with_max_confidence = max_confidence_prediction['label']
    confidence_of_max_confidence = max_confidence_prediction['confidence']
    if confidence_of_max_confidence >= 0.70:
        return [label_with_max_confidence, round(confidence_of_max_confidence * 100, 2)]
    else:
        return [-1,-1]

app = Flask(__name__)
app.secret_key = 'roh10'

def allowed_file(filename):
    ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/classify', methods=['POST'])
def upload_image():

    data = request.get_json()
    image_data = base64.b64decode(data['image'])
    image = Image.open(BytesIO(image_data))
    dir_path = os.path.dirname(os.path.abspath(__file__))
    model = TFModel(dir_path=dir_path)
    outputs = model.predict(image)
    max_confidence_prediction = outputs['predictions'][0]
    label_with_max_confidence = max_confidence_prediction['label']
    confidence_of_max_confidence = max_confidence_prediction['confidence']
    if confidence_of_max_confidence >= 0.40:
        return jsonify({'result': label_with_max_confidence}), 200
    else:
        return jsonify({'result': "Unable to Identify"}), 200
    
    
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
