const targetDate = new Date('2024-09-06');
        const today = new Date();
        const calendar = document.getElementById('calendar');
        const monthElement = document.getElementById('month');
        const modal = document.getElementById('birthdayModal');

        const daysInMonth = new Date(year, today.getMonth() + 1, 0).getDate();
        const firstDayOfMonth = new Date(year, today.getMonth(), 1).getDay();
        
        for (let i = 0; i < firstDayOfMonth; i++) {
            calendar.innerHTML += '<div></div>'; // Celdas vacías para los días antes del inicio del mes
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const currentDay = new Date(year, today.getMonth(), day);
            const className = currentDay < today ? 'past' : (currentDay.toDateString() === today.toDateString() ? 'today' : 'future');
            calendar.innerHTML += `<div class="${className}">${day}</div>`;
        }

        function showModal() {
            modal.style.display = 'flex';
        }

        function closeModal() {
            modal.style.display = 'none';
        }

        // Mostrar el modal si hoy es el día del cumpleaños
        if (today.toDateString() === targetDate.toDateString()) {
            showModal();
        }
