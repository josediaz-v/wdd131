
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    let contactInfo = { name, email, message };
    console.log(contactInfo);

    showConfirmationMessage(`Thank you, ${name}! Your message has been successfully sent. We'll get back to you at ${email} as soon as possible.`);
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