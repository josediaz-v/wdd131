let reviewCount = localStorage.getItem('reviewCount') ? parseInt(localStorage.getItem('reviewCount')) : 0;

document.getElementById('reviewCounter').textContent = `Number of Reviews: ${reviewCount}`;

function incrementReviewCount() {
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);
}

window.addEventListener('load', incrementReviewCount);