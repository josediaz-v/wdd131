document.getElementById('bookingForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let service = document.getElementById('service').value;
    let date = document.getElementById('date').value;
    let time = document.getElementById('time').value;

    let existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];

    let isBookingConflict = existingBookings.some(booking => booking.date === date && booking.time === time);

    if (isBookingConflict) {
        alert('Sorry, this time slot is already booked. Please choose a different time.');
    } else {
        existingBookings.push({ service, date, time });
        localStorage.setItem('bookings', JSON.stringify(existingBookings));

        showConfirmationMessage(`Your booking for ${service} on ${date} at ${time} has been successfully placed!`);
    }
});

function showConfirmationMessage(message) {
    let messageDiv = document.createElement('div');
    messageDiv.classList.add('confirmation-message');
    messageDiv.textContent = message;

    document.body.appendChild(messageDiv);

    setTimeout(() => {
        messageDiv.remove();
    }, 10000);
}
