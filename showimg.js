let uploadedImage = null;

document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            // Store the image data in session storage
            sessionStorage.setItem('uploadedImage', e.target.result);
            // Redirect to the display page
            window.location.href = 'uploaded.html';
        };
        
        reader.readAsDataURL(file);

        // Preview the image
        reader.onload = function(e) {
            uploadedImage = {
                src: e.target.result,
                name: file.name,
                size: (file.size / 1024).toFixed(2) + ' KB',
                type: file.type,
                description: document.getElementById('description').value,
                location: document.getElementById('location').value,
                team: document.getElementById('team').value
            };
        };

        reader.readAsDataURL(file);
    }
});

document.getElementById('showImageButton').addEventListener('click', function() {
    if (uploadedImage) {
        document.getElementById('imagePreview').innerHTML = `<img src="${uploadedImage.src}" alt="Image Preview">`;
        document.getElementById('imageInfo').innerHTML = `
            <h2>Image Info:</h2>
            <p><strong>Name:</strong> ${uploadedImage.name}</p>
            <p><strong>Size:</strong> ${uploadedImage.size}</p>
            <p><strong>Type:</strong> ${uploadedImage.type}</p>
            <p><strong>Description:</strong> ${uploadedImage.description || 'N/A'}</p>
            <p><strong>Location:</strong> ${uploadedImage.location || 'N/A'}</p>
            <p><strong>Team Requirement:</strong> ${uploadedImage.team || 'N/A'}</p>
        `;

        // Show the preview and info
        document.getElementById('imagePreview').style.display = 'block';
        document.getElementById('imageInfo').style.display = 'block';
    } else {
        alert('Please upload an image first.');
    }
});
document.getElementById('uploadButton').addEventListener('click', function() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            // Store the image data in session storage
            sessionStorage.setItem('uploadedImage', e.target.result);
            // Redirect to the display page
            window.location.href = 'displayImage.html';
        };
        
        reader.readAsDataURL(file);
    } else {
        alert('Please select an image to upload.');
    }
});
