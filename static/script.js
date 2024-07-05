document.getElementById('classify-btn').addEventListener('click', function() {
    const fileInput = document.getElementById('file-upload');
    const classificationResult = document.getElementById('classification');

    if (fileInput.files.length === 0) {
        classificationResult.innerText = "Please upload an image.";
        return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();
    
    reader.onloadend = function() {
        const base64Image = reader.result.split(',')[1];

        fetch('/classify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ image: base64Image })
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                classificationResult.innerText = data.error;
            } else {
                classificationResult.innerText = `The image is classified as: ${data.result}`;
            }
        })
        .catch(error => {
            console.error('Error:', error);
            classificationResult.innerText = 'An error occurred during classification.';
        });
    };

    reader.readAsDataURL(file);
});
