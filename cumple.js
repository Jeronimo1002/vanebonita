const targetDate = new Date('2024-09-06'); // Fecha del cumpleaños
        const today = new Date(); // Fecha actual
        const modal = document.getElementById('birthdayModal');

        // Función para mostrar el modal
        function showModal() {
            modal.style.display = 'flex'; // Muestra el modal
        }

        // Función para cerrar el modal
        function closeModal() {
            modal.style.display = 'none'; // Cierra el modal
        }

        // Mostrar el modal si hoy es el cumpleaños
        if (today.toDateString() === targetDate.toDateString()) {
            showModal(); // Muestra el modal si es el día del cumpleaños
        }