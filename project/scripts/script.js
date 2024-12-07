// Booking Form Handling
document.getElementById('bookingForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting traditionally

    // Get the values from the form inputs
    let service = document.getElementById('service').value;
    let date = document.getElementById('date').value;
    let time = document.getElementById('time').value;

    // Get any existing bookings from localStorage (if any)
    let existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];

    // Check if the selected time is already booked for the chosen date
    let isBookingConflict = existingBookings.some(booking => booking.date === date && booking.time === time);

    if (isBookingConflict) {
        // If there's a conflict, show a message
        alert('Sorry, this time slot is already booked. Please choose a different time.');
    } else {
        // If no conflict, save the new booking to localStorage
        existingBookings.push({ service, date, time });
        localStorage.setItem('bookings', JSON.stringify(existingBookings));

        // Notify the user that the booking has been saved
        showConfirmationMessage(`Your booking for ${service} on ${date} at ${time} has been successfully placed!`);
    }
});

// Contact Form Handling
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting traditionally

    // Get the values from the form inputs
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    // Store the contact form data (in this example, we are just logging it for now)
    let contactInfo = { name, email, message };
    console.log(contactInfo); // Replace with an actual send operation if needed

    // Notify the user that the message has been successfully sent
    showConfirmationMessage(`Thank you, ${name}! Your message has been successfully sent. We'll get back to you at ${email} as soon as possible.`);
});

// Function to show the confirmation message
function showConfirmationMessage(message) {
    let messageDiv = document.createElement('div');
    messageDiv.classList.add('confirmation-message');
    messageDiv.textContent = message;

    document.body.appendChild(messageDiv);

    // Add fade-out effect after a few seconds
    setTimeout(() => {
        messageDiv.classList.add('fade-out');
    }, 5000); // Apply fade-out after 5 seconds
}
