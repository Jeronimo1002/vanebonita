function previewImage(event) {
    const file = event.target.files[0];
    const imagePreview = document.getElementById('imagePreview');
    const removeImageButton = document.getElementById('removeImage');

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imagePreview.src = e.target.result;
            imagePreview.style.display = 'block';
            removeImageButton.style.display = 'block';
        };
        reader.readAsDataURL(file);
    } else {
        imagePreview.style.display = 'none';
        removeImageButton.style.display = 'none';
    }
}

function removeImage() {
    document.getElementById('imagePreview').style.display = 'none';
    document.getElementById('removeImage').style.display = 'none';
    document.getElementById('imageUpload').value = '';
}

function addComment() {
    event.preventDefault();
    
    var commentText = document.getElementById('commentText').value;
    var imageUrl = document.getElementById('imagePreview').src;

    if (username.trim() === "" || commentText.trim() === "") {
        alert("El comentario no puede estar vacío.");
        return;
    }

    if (imageUrl === '') {
        saveAndDisplayComment(commentText, null);
    } else {
        saveAndDisplayComment(commentText, imageUrl);
    }
}

function saveAndDisplayComment(text, imageUrl) {
    var now = new Date();
    var timestamp = now.toLocaleString();

    var comment = {
        text: text,
        imageUrl: imageUrl,
        timestamp: timestamp
    };

    var comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push(comment);
    localStorage.setItem('comments', JSON.stringify(comments));

    displayComment(comment);

    document.getElementById('commentText').value = '';
    document.getElementById('imageUpload').value = '';
    document.getElementById('imagePreview').style.display = 'none';
    document.getElementById('removeImage').style.display = 'none';
}

function displayComment(comment) {
    var commentElement = document.createElement('li');
    commentElement.className = 'comment';

    var timeElement = document.createElement('time');
    timeElement.textContent = "Publicado el: " + comment.timestamp;

    var commentContent = document.createElement('p');
    commentContent.textContent = comment.text;

    commentElement.appendChild(timeElement);
    commentElement.appendChild(commentContent);

    if (comment.imageUrl) {
        var imageElement = document.createElement('img');
        imageElement.src = comment.imageUrl;
        commentElement.appendChild(imageElement);
    }

    var commentsList = document.querySelector('.comments');
    commentsList.appendChild(commentElement);
}

function loadComments() {
    var comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.forEach(function(comment) {
        displayComment(comment);
    });
}

loadComments();
