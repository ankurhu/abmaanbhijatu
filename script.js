// Particle JS settings for background
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ff6699"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            }
        },
        "opacity": {
            "value": 0.5,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.1
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 3,
                "size_min": 0.1
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ff6699",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 600
            }
        }
    },
    "interactivity": {
        "detect_on": "window",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        }
    },
    "retina_detect": true
});

// Questions Array
const questions = [
    "Are you ready for this beautiful journey? 🌟",
    "What makes your heart skip a beat? 💓",
    "Can you feel the magic of destiny at work? ✨",
    "Do you believe in serendipity? 🍀",
    "Do you feel like we were meant to meet? ❤️",
    "If I say I want forever with you, would you say yes? 💍",
    "Would you hold my hand and never let go? 🫶",
    "And now, the most important question... 💖"
];

let currentQuestion = 0;

// Function to handle the progression of questions
function nextQuestion() {
    // Display the next question
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


