const quizData = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Tech Modern Language",
            "Home Tool Markup Language",
            "Hyperlinks and Text Markup Language"
        ],
        correct: 0
    },
    {
        question: "Which CSS property is used to change the text color?",
        options: [
            "text-color",
            "font-color",
            "color",
            "text-style"
        ],
        correct: 2
    },
    {
        question: "What is the correct syntax for referring to an external script called 'app.js'?",
        options: [
            "<script href='app.js'>",
            "<script name='app.js'>",
            "<script src='app.js'>",
            "<script file='app.js'>"
        ],
        correct: 2
    },
    {
        question: "Which JavaScript method is used to select an element by its ID?",
        options: [
            "getElementByClass()",
            "getElementById()",
            "querySelector()",
            "selectElement()"
        ],
        correct: 1
    },
    {
        question: "What does CSS stand for?",
        options: [
            "Creative Style Sheets",
            "Cascading Style Sheets",
            "Computer Style Sheets",
            "Colorful Style Sheets"
        ],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

function loadQuestion() {
    const questionData = quizData[currentQuestion];
    document.getElementById('question').textContent = questionData.question;
    document.getElementById('questionCounter').textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;
    
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    
    questionData.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = option;
        optionDiv.onclick = () => selectAnswer(index);
        optionsContainer.appendChild(optionDiv);
    });
    
    updateProgress();
    selectedAnswer = null;
    document.getElementById('nextBtn').disabled = true;
}

function selectAnswer(answerIndex) {
    if (selectedAnswer !== null) return; // Already answered
    
    selectedAnswer = answerIndex;
    const options = document.querySelectorAll('.option');
    const questionData = quizData[currentQuestion];
    
    options.forEach((option, index) => {
        option.classList.add('disabled');
        if (index === questionData.correct) {
            option.classList.add('correct');
        } else if (index === answerIndex) {
            option.classList.add('incorrect');
        }
    });
    
    if (answerIndex === questionData.correct) {
        score++;
    }
    
    document.getElementById('nextBtn').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function updateProgress() {
    const progress = ((currentQuestion) / quizData.length) * 100;
    document.getElementById('progress').style.width = progress + '%';
}

function showResults() {
    document.getElementById('quizContainer').classList.add('hidden');
    document.getElementById('footer').classList.add('hidden');
    document.getElementById('resultContainer').classList.remove('hidden');
    
    document.getElementById('score').textContent = score;
    
    const percentage = (score / quizData.length) * 100;
    let message = '';
    
    if (percentage === 100) {
        message = '🎯 Perfect score! You\'re a programming genius!';
    } else if (percentage >= 80) {
        message = '🌟 Excellent work! You really know your stuff!';
    } else if (percentage >= 60) {
        message = '👍 Good job! Keep learning and improving!';
    } else if (percentage >= 40) {
        message = '📚 Not bad! Some more practice will help!';
    } else {
        message = '💪 Keep practicing! You\'ll get better with time!';
    }
    
    document.getElementById('resultMessage').textContent = message;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;
    
    document.getElementById('quizContainer').classList.remove('hidden');
    document.getElementById('footer').classList.remove('hidden');
    document.getElementById('resultContainer').classList.add('hidden');
    
    loadQuestion();
}

// Load first question when page loads
document.addEventListener('DOMContentLoaded', () => {
    loadQuestion();
});
