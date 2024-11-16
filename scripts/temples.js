// Get date
let currentYear = new Date();
let lastModification = document.lastModified;

document.querySelector('#lastmodified').textContent = `Last Modification: ${lastModification}`;
document.querySelector('#year').textContent = currentYear.getFullYear();

// Ham menu
const hamButton = document.querySelector('#menu');
const header = document.querySelector('header');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    hamButton.classList.toggle('open');
    header.classList.toggle('open');
    navigation.classList.toggle('open');
});
