
let calendarEl = document.querySelector('.calendar');
let calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth'
});
calendar.render();