// Questions Array
const questions = [
    "Are you ready for this beautiful journey? 🌟",
    "What makes your heart flutter with joy? 💓",
    "Can you feel the magic in the air? ✨",
    "Do you believe we were meant to meet? ❤️",
    "Would you hold my hand and never let go? 🫶",
    "If I said forever, would you say yes? 💍",
    "Would you share your heart with me, always? 💖",
    "Now, the most important question... 💕"
];

let currentQuestion = 0;

// Function to handle the progression of questions
function nextQuestion() {
    const questionText = document.getElementById('question');
    questionText.innerHTML = questions[currentQuestion];
    questionText.classList.remove('fadeInText');
    questionText.offsetHeight; // Trigger reflow to reset animation
    questionText.classList.add('fadeInText');

    // If we reach the final question, change the button text
    if (currentQuestion === questions.length - 1) {
        const button = document.querySelector('.next-btn');
        button.innerHTML = "Yes, Forever! 💖";
        button.style.backgroundColor = "#66ff66";
        button.onclick = revealLoveMessage;
    }

    // Move to the next question
    currentQuestion++;
}

// Show the final romantic message
function revealLoveMessage() {
    const questionContainer = document.querySelector('.question-container');
    const message = document.createElement('div');
    message.classList.add('hidden-message');
    message.innerHTML = "<p>💖 Will you be mine forever? 💖</p>";
    questionContainer.appendChild(message);
}
