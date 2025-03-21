// Define questions for each category
const questions = {
    html: [
        { q: "What does HTML stand for?", options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyper Text Makeup Language"], answer: 0 },
        { q: "Which tag is used for creating hyperlinks?", options: ["<link>", "<a>", "<button>", "<href>"], answer: 1 },
        { q: "What tag is used for paragraphs?", options: ["<p>", "<paragraph>", "<text>", "<div>"], answer: 0 },
        { q: "Which tag is used to insert an image?", options: ["<image>", "<img>", "<src>", "<picture>"], answer: 1 },
        { q: "What does the 'div' tag represent?", options: ["A division or section", "A link", "An image", "A paragraph"], answer: 0 },
        { q: "What does 'id' attribute in HTML do?", options: ["It is used to specify an identifier", "It adds a style", "It is used for links", "It provides accessibility"], answer: 0 },
        { q: "What is the purpose of the 'alt' attribute?", options: ["To describe images", "To style images", "To link images", "To load images faster"], answer: 0 },
        { q: "What is the correct HTML tag for embedding JavaScript?", options: ["<js>", "<script>", "<java>", "<code>"], answer: 1 },
        { q: "Which tag is used for creating lists?", options: ["<list>", "<ul>", "<ol>", "<li>"], answer: 1 },
        { q: "Which attribute is used to define the font of a document?", options: ["font", "font-family", "text-style", "font-weight"], answer: 1 }
    ],
    css: [
        { q: "What does CSS stand for?", options: ["Cascading Style Sheets", "Creative Style System", "Computer Style Sheets", "Colorful Style Sheets"], answer: 0 },
        { q: "Which property is used to change the background color?", options: ["bgcolor", "background-color", "color", "background"], answer: 1 },
        { q: "How do you make a list horizontal in CSS?", options: ["display: inline", "display: block", "list-style: inline", "list-style-type: none"], answer: 0 },
        { q: "How do you center a div horizontally?", options: ["margin: 0 auto;", "align: center;", "display: flex;", "text-align: center;"], answer: 0 },
        { q: "Which property is used to set the text color?", options: ["text-color", "color", "font-color", "text-style"], answer: 1 },
        { q: "Which CSS property is used to add shadows to text?", options: ["box-shadow", "text-shadow", "shadow", "text-effect"], answer: 1 },
        { q: "Which CSS property is used for font size?", options: ["font-size", "font-weight", "text-size", "font-style"], answer: 0 },
        { q: "How do you add a border around an element?", options: ["border: 1px solid black;", "border-width: 1px;", "border: none;", "border-radius: 5px;"], answer: 0 },
        { q: "Which property is used to change the font of an element?", options: ["font-family", "text-font", "font-style", "text-decoration"], answer: 0 },
        { q: "What property is used to control the spacing between words?", options: ["word-spacing", "letter-spacing", "text-spacing", "text-indent"], answer: 0 }
    ],
    js: [
        { q: "Which symbol is used for comments in JavaScript?", options: ["//", "#", "<!--", "/*"], answer: 0 },
        { q: "Which keyword is used to declare a variable?", options: ["var", "let", "const", "All of the above"], answer: 3 },
        { q: "How do you create a function in JavaScript?", options: ["function myFunction()", "myFunction()", "def myFunction()", "create function myFunction()"], answer: 0 },
        { q: "Which method is used to add an element to an array?", options: ["add()", "push()", "append()", "insert()"], answer: 1 },
        { q: "What does 'NaN' stand for?", options: ["Not a Number", "New and Not", "Number as Null", "None of these"], answer: 0 },
        { q: "Which operator is used to assign a value to a variable?", options: ["=", "==", "===", "=>"], answer: 0 },
        { q: "Which method can be used to convert a string to a number?", options: ["parseInt()", "parseFloat()", "Number()", "All of the above"], answer: 3 },
        { q: "Which of the following is not a valid data type in JavaScript?", options: ["String", "Number", "Boolean", "Character"], answer: 3 },
        { q: "How do you create a loop in JavaScript?", options: ["for", "while", "do-while", "All of the above"], answer: 3 },
        { q: "Which operator is used to compare values?", options: ["=", "==", "===", "!="], answer: 1 }
    ]
};

let currentCategory = [];
let currentIndex = 0;
let score = 0;
let playerName = "";

// Start the quiz after entering the name
function startQuiz() {
    playerName = document.getElementById("playerName").value.trim();
    if (!playerName) {
        alert("Please enter your name!");
        return;
    }
    document.getElementById("namePage").style.display = "none";
    document.getElementById("categoryPage").style.display = "block";
}

// Start quiz for a selected category
function startCategory(category) {
    currentCategory = questions[category];
    currentIndex = 0;
    score = 0;

    document.getElementById("categoryPage").style.display = "none";
    document.getElementById("quizPage").style.display = "block";
    showQuestion();
}

// Display the current question
function showQuestion() {
    if (currentIndex >= currentCategory.length) {
        submitQuiz();
        return;
    }

    const questionObj = currentCategory[currentIndex];
    document.getElementById("question").innerText = questionObj.q;
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    questionObj.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.className = "option-btn";
        button.onclick = () => checkAnswer(index, questionObj.answer);
        optionsDiv.appendChild(button);
    });

    document.querySelector(".next-btn").style.display = "inline-block";
    document.querySelector(".submit-btn").style.display = "none";
}

// Check the answer and score
function checkAnswer(selected, correct) {
    const options = document.querySelectorAll(".option-btn");
    options.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === correct) btn.classList.add("correct");
        else btn.classList.add("wrong");
    });

    if (selected === correct) score++;
}

function nextQuestion() {
    currentIndex++;
    showQuestion();
}
// Submit quiz and show the score
function submitQuiz() {
    document.getElementById("quizPage").style.display = "none";
    document.getElementById("scorePage").style.display = "block";
    document.getElementById("finalScore").innerText = `${playerName}, your score is ${score} out of ${currentCategory.length}.`;
}

// Restart the quiz
function restartQuiz() {
    document.getElementById("scorePage").style.display = "none";
    document.getElementById("namePage").style.display = "block";
}
