const newAppointment = document.querySelector('.new-appointment');
const scheduleBtn = document.querySelector('.schedule-btn');
const modalOverlay = document.querySelector('.modal-overlay');

newAppointment.addEventListener('click', () => {
    modalOverlay.style.visibility = 'visible';
    modalOverlay.style.opacity = '1';
});

scheduleBtn.addEventListener('click', () => {
    modalOverlay.style.visibility = 'hidden';
    modalOverlay.style.opacity = '0';
});
