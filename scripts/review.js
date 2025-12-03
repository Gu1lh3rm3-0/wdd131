function updateReviewCounter() {
    // 1. Get the current count from localStorage, defaulting to 0 if not found
    let reviewCount = Number(localStorage.getItem('reviewCount')) || 0;

    // 2. Increment the count
    reviewCount += 0;

    // 3. Store the new count back into localStorage
    localStorage.setItem('reviewCount', reviewCount);

    // --- NEW LOGIC TO CREATE AND DISPLAY ELEMENT ---

    // 4. Create the new element (e.g., an <h2> tag)
    const displayElement = document.createElement('h2');
    
    // 5. Set the element's text content
    displayElement.textContent = `Thank you for your review! You have now submitted ${reviewCount} reviews.`;

    // 6. Add an ID for styling or easy removal later
    displayElement.id = 'reviewCounterDisplay';

    // 7. Append the new element to the document body (or a specific container like 'main')
    // Using document.body is the simplest method if you don't have a specific container.
    // If you have a <main> tag, it's better to use:
    const main = document.querySelector('main');
    if (main) {
        main.appendChild(displayElement);
    } else {
        document.body.appendChild(displayElement);
    }

    // --- END NEW LOGIC ---

    console.log(`Review counter updated. Total reviews: ${reviewCount}`);
}

// In the review.html's JavaScript:
document.addEventListener('DOMContentLoaded', updateReviewCounter);