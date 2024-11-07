let currentYear = new Date();
let lastModification = document.lastModified;

document.querySelector('#lastmodified').textContent = `Last Modification: ${lastModification}`;
document.querySelector('#year').textContent = currentYear.getFullYear();