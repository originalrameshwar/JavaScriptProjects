const questions = [

    {
        question: "What does CPU stand for?",
        answers: [
            { text: "Central Processing Unit", correct: true },
            { text: "Computer Personal Unit", correct: false },
            { text: "Central Processor Unit", correct: false },
            { text: "Central Personal Unit", correct: false }
        ]
    },

    {
        question: "Which programming language is known as the 'mother of all languages'?",
        answers: [
            { text: "C", correct: true },
            { text: "Java", correct: false },
            { text: "Python", correct: false },
            { text: "Assembly", correct: false }
        ]
    },

    {
        question: "What is the main purpose of an operating system?",
        answers: [
            { text: "Managing hardware", correct: false },
            { text: "Running applications", correct: false },
            { text: "Providing a user interface", correct: false },
            { text: "Managing resources and processes", correct: true }
        ]
    },

    {
        question: "What is the binary equivalent of the decimal number 25?",
        answers: [
            { text: "11001", correct: true },
            { text: "10011", correct: false },
            { text: "10100", correct: false },
            { text: "11100", correct: false }
        ]
    },

    {
        question: "Which data structure follows the Last In, First Out (LIFO) principle?",
        answers: [
            { text: "Queue", correct: false },
            { text: "Linked List", correct: false },
            { text: "Stack", correct: true },
            { text: "Tree", correct: false }
        ]
    },

    {
        question: "What is the purpose of SQL?",
        answers: [
            { text: "Styling websites", correct: false },
            { text: "Querying databases", correct: true },
            { text: "Creating animations", correct: false },
            { text: "Building web servers", correct: false }
        ]
    },

    {
        question: "Which programming paradigm treats computation as the evaluation of mathematical functions?",
        answers: [
            { text: "Object-oriented programming", correct: false },
            { text: "Procedural programming", correct: false },
            { text: "Functional programming", correct: true },
            { text: "Event-driven programming", correct: false }
        ]
    },

    {
        question: "What does HTML stand for?",
        answers: [
            { text: "HyperText Markup Language", correct: true },
            { text: "HyperText Modeling Language", correct: false },
            { text: "High-level Text Language", correct: false },
            { text: "HyperText Management Language", correct: false }
        ]
    },

    {
        question: "Which data type is not supported in JavaScript?",
        answers: [
            { text: "Number", correct: false },
            { text: "String", correct: false },
            { text: "Boolean", correct: false },
            { text: "Character", correct: true }
        ]
    },

    {
        question: "In computer networking, what does DNS stand for?",
        answers: [
            { text: "Domain Name System", correct: true },
            { text: "Digital Network Service", correct: false },
            { text: "Data Network Security", correct: false },
            { text: "Dynamic Naming Service", correct: false }
        ]
    },

    {
        question: "What is the purpose of the CSS box model?",
        answers: [
            { text: "Managing databases", correct: false },
            { text: "Styling HTML elements", correct: true },
            { text: "Creating animations", correct: false },
            { text: "Executing JavaScript code", correct: false }
        ]
    },

    {
        question: "Which programming language is known for its use in machine learning and artificial intelligence?",
        answers: [
            { text: "Java", correct: false },
            { text: "C++", correct: false },
            { text: "Python", correct: true },
            { text: "Ruby", correct: false }
        ]
    },

    {
        question: "What is a firewall in the context of computer networks?",
        answers: [
            { text: "A security camera", correct: false },
            { text: "A protective barrier in a building", correct: false },
            { text: "A device that monitors network traffic", correct: true },
            { text: "A hardware component of a computer", correct: false }
        ]
    },

    {
        question: "What does HTTP stand for?",
        answers: [
            { text: "Hypertext Transfer Protocol", correct: true },
            { text: "High-level Text Processing", correct: false },
            { text: "Hyperlink and Text Protocol", correct: false },
            { text: "Home Transfer Protocol", correct: false }
        ]
    },

    {
        question: "In programming, what is the purpose of the 'if' statement?",
        answers: [
            { text: "Looping through code", correct: false },
            { text: "Defining a function", correct: false },
            { text: "Conditionally executing code", correct: true },
            { text: "Printing text to the console", correct: false }
        ]
    },

    {
        question: "Which algorithm is commonly used for sorting elements in a list?",
        answers: [
            { text: "Binary search", correct: false },
            { text: "Quick sort", correct: true },
            { text: "Breadth-first search", correct: false },
            { text: "Depth-first search", correct: false }
        ]
    },

    {
        question: "What is the primary purpose of version control systems like Git?",
        answers: [
            { text: "Monitoring network traffic", correct: false },
            { text: "Managing software licenses", correct: false },
            { text: "Tracking changes in code and collaborating on projects", correct: true },
            { text: "Encrypting data", correct: false }
        ]
    },

    {
        question: "Which data structure is used for implementing a LIFO (Last In, First Out) stack?",
        answers: [
            { text: "Linked List", correct: false },
            { text: "Queue", correct: false },
            { text: "Array", correct: false },
            { text: "Stack", correct: true }
        ]
    },

    {
        question: "What is the purpose of a CDN (Content Delivery Network) in web development?",
        answers: [
            { text: "Managing user authentication", correct: false },
            { text: "Optimizing website performance by delivering content from servers geographically closer to the user", correct: true },
            { text: "Creating dynamic web pages", correct: false },
            { text: "Ensuring data privacy", correct: false }
        ]
    },

    {
        question: "What is the primary function of the 'document.getElementById()' method in JavaScript?",
        answers: [
            { text: "Styling HTML elements", correct: false },
            { text: "Querying the DOM to retrieve an element with a specific ID", correct: true },
            { text: "Creating animations", correct: false },
            { text: "Executing asynchronous code", correct: false }
        ]
    },

];




const questionElement = document.getElementById("question");
const ansButtons = document.getElementById("answer-btn");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;

    currentQuestion.answers.forEach(answers => {
        const button = document.createElement("button");
        button.innerHTML = answers.text;
        button.classList.add("btn");
        ansButtons.appendChild(button);

        if (answers.correct) {
            button.dataset.correct = answers.correct;
        }
        button.addEventListener('click', selectAnswer);
    })
}

function resetState() {
    nextButton.style.display = "none";
    while (ansButtons.firstChild) {
        ansButtons.removeChild(ansButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if (isCorrect) {
        selectBtn.classList.add("correct");
        score++;
    } else {
        selectBtn.classList.add("incorrect");

    }

    Array.from(ansButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = " block";

}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";

}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", ()=> {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})

showQuestion();