const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// You can use flashcards.length to get the length of the array

// These two variables will come in handy
let currentIndex = 0;
let showingTerm = true;

function displayCard() {
    const cardContent = document.getElementById('card-content');
    const currentCard = flashcards[currentIndex];
    if (showingTerm) {
        cardContent.innerText = currentCard.term;
    } else {
        cardContent.innerText = currentCard.definition;
    }
}

document.getElementById('flashcard').addEventListener('click', function() {
    showingTerm = !showingTerm;
    displayCard();
});

document.getElementById('next-btn').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % flashcards.length;
    showingTerm = true; // Reset to showing term
    displayCard();
});

document.getElementById('prev-btn').addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
    showingTerm = true; // Reset to showing term
    displayCard();
});

document.getElementById('add-card-btn').addEventListener('click', function() {
    const newTerm = document.getElementById('new-term').value;
    const newDefinition = document.getElementById('new-definition').value;

    if (newTerm && newDefinition) {
        flashcards.push({ term: newTerm, definition: newDefinition });
        document.getElementById('new-term').value = '';
        document.getElementById('new-definition').value = '';
    }
});

// The rest of the code you will write is apart of event listeners

// This line will display the card when the page is refreshed
window.onload = displayCard;