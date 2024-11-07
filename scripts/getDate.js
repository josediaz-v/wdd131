let currentYear = new Date();
let lastModification = document.lastModified;

document.querySelector('#lastModified').textContent = `Last Modification: ${lastModification}`;
document.querySelector('#year').textContent = currentYear.getFullYear();