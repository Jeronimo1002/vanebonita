const updateTimeElapsed = () => {
    const startDate = new Date('July 3, 2024 15:00:00');
    const now = new Date();
    const elapsedTime = now - startDate;

    const seconds = Math.floor((elapsedTime / 1000) % 60);
    const minutes = Math.floor((elapsedTime / 1000 / 60) % 60);
    const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);
    const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));

    document.getElementById('days').innerText = String(days).padStart(3, '0');
    document.getElementById('hours').innerText = String(hours).padStart(2, '0');
    document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
    document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
};

// Llamar a la función inmediatamente para que la página muestre los datos correctos al cargar
updateTimeElapsed();

// Configurar el intervalo para que la función se ejecute cada segundo
setInterval(updateTimeElapsed, 1000); // Actualiza cada segundo

document.getElementById('audioPlayer').addEventListener('ended', function() {
    document.getElementById('dialogOverlay').style.display = 'flex';
});

function closeDialog() {
    document.getElementById('dialogOverlay').style.display = 'none';
}
