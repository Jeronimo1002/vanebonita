// Event listener para el botón que muestra el poema
document.getElementById('showPoemButton').addEventListener('click', function() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'flex';  // Muestra el overlay
});

// Event listener para el botón de cierre que oculta el poema
document.getElementById('closeButton').addEventListener('click', function() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';  // Oculta el overlay
});



document.getElementById('save-note').addEventListener('click', function() {
    const noteContent = document.getElementById('note-text').value;
    // Aquí puedes agregar el código para guardar la nota, por ejemplo, enviando el contenido a un servidor
    // También podrías actualizar el contenido de alguna forma en la interfaz de usuario
    alert('Nota guardada: ' + noteContent);
});
