function updateReviewCounter() {
    let reviewCount = Number(localStorage.getItem('reviewCount')) || 0;

    reviewCount += 0;

    localStorage.setItem('reviewCount', reviewCount);

    const displayElement = document.createElement('h2');
    
    displayElement.textContent = `Thank you for your review! You have now submitted ${reviewCount} reviews.`;

    displayElement.id = 'reviewCounterDisplay';

    const main = document.querySelector('main');
    if (main) {
        main.appendChild(displayElement);
    } else {
        document.body.appendChild(displayElement);
    }

    console.log(`Review counter updated. Total reviews: ${reviewCount}`);
}

document.addEventListener('DOMContentLoaded', updateReviewCounter);