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
