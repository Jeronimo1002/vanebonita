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
    var username = document.getElementById('username').value;
    var commentText = document.getElementById('commentText').value;
    var imageUrl = document.getElementById('imagePreview').src;

    if (username.trim() === "" || commentText.trim() === "") {
        alert("El nombre y el comentario no pueden estar vacíos.");
        return;
    }

    if (imageUrl === '') {
        saveAndDisplayComment(username, commentText, null);
    } else {
        saveAndDisplayComment(username, commentText, imageUrl);
    }
}

function saveAndDisplayComment(username, text, imageUrl) {
    var now = new Date();
    var timestamp = now.toLocaleString();

    var comment = {
        username: username,
        text: text,
        imageUrl: imageUrl,
        timestamp: timestamp
    };

    var comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push(comment);
    localStorage.setItem('comments', JSON.stringify(comments));

    displayComment(comment);

    document.getElementById('username').value = '';
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

    var authorElement = document.createElement('p');
    authorElement.className = 'author';
    authorElement.textContent = "Publicado por: " + comment.username;

    var commentContent = document.createElement('p');
    commentContent.textContent = comment.text;

    commentElement.appendChild(timeElement);
    commentElement.appendChild(authorElement);
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
