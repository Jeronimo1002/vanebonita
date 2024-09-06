const targetDate = new Date('2024-09-06'); // Fecha del cumpleaños
        const today = new Date(); // Fecha actual
        const modal = document.getElementById('birthdayModal');

        // Obtener el año y mes actuales para mostrar en el calendario (opcional)
        const year = today.getFullYear();
        const month = today.getMonth();
        const monthElement = document.getElementById('month');
        const calendar = document.getElementById('calendar');

        // Nombres de los meses
        const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        monthElement.innerText = monthNames[month] + " " + year;

        // Obtener el número de días del mes actual y el primer día del mes
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDayOfMonth = new Date(year, month, 1).getDay();

        // Añadir celdas vacías antes del primer día del mes
        for (let i = 0; i < firstDayOfMonth; i++) {
            calendar.innerHTML += '<div></div>';
        }

        // Añadir los días del mes al calendario
        for (let day = 1; day <= daysInMonth; day++) {
            const currentDay = new Date(year, month, day);
            const className = currentDay < today ? 'past' : (currentDay.toDateString() === today.toDateString() ? 'today' : 'future');
            calendar.innerHTML += `<div class="${className}">${day}</div>`;
        }

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