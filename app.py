import os
import numpy as np
from flask import Flask, request, render_template, jsonify
from werkzeug.utils import secure_filename
import tensorflow as tf
from tensorflow.keras.preprocessing import image

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'uploads/'

# Load the saved model
model = tf.saved_model.load(os.path.join(os.path.dirname(os.path.abspath(__file__)),'conversion'))

def classify_image(img_path):
    img = image.load_img(img_path, target_size=(224, 224))
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    img_array = tf.keras.applications.mobilenet_v2.preprocess_input(img_array)
    
    # Assuming your model signature key is 'serving_default'
    infer = model.signatures['serving_default']
    predictions = infer(tf.convert_to_tensor(img_array))
    
    # Print the available keys in the predictions dictionary
    print(predictions)
    
    # Use the correct key from the predictions dictionary
    # Replace 'output_layer_name' with the actual output layer name from your model
    predicted_class = np.argmax(predictions['Confidences'], axis=-1)
    
    # Assuming classes are [0: Disease Class 1, 1: Disease Class 2, ...]
    classes = ['Alternaria',"Mosaic","Powdery Mildew","Scab"]
    return classes[predicted_class[0]]


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/classify', methods=['POST'])
def upload_image():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'})
    
    file = request.files['file']
    
    if file.filename == '':
        return jsonify({'error': 'No selected file'})
    
    if file:
        filename = secure_filename(file.filename)
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(file_path)
        
        classification_result = classify_image(file_path)
        os.remove(file_path)  # Remove the uploaded file after classification
        
        return jsonify({'result': classification_result})
    
    return jsonify({'error': 'File upload failed'})

if __name__ == '__main__':
    os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)
    app.run(debug=True)