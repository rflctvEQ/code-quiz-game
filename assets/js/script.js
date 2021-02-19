// variable declaration 
let quizDiv = document.getElementById("quiz");
let startBtn = document.getElementById("start");
let timer = document.getElementById("timer");
let timeLeft = 60;
timer.textContent = timeLeft + "s";

// object declaration -- i.e., where the questions/answers will be stored 
// individual questions and answers
let questionOne = {
    question: "how big is your suh?",
    answers: {
        a: "a. not that big",
        b: "b. average size",
        c: "c. absolutely massive"
    },
    correctAnswer: "c" 
};

let questionTwo = {
    question: "Donald Trump:",
    answers: {
        a: "rules my heart",
        b: "sucks big time fuckin nuts",
        c: "will save the working class"
    },
    correctAnswer: "b"
};

let questionThree = {
    question: "What's the most important language to know as a web developer?", 
    answers: {
        a: "nerd",
        b: "javascript",
        c: "css"
    },
    correctAnswer: "a"
};

// array containing the questions and answers 
let allQuestions = [questionOne, questionTwo, questionThree];

// function for when user loses -- i.e., "you lost" alert (modal if i have time) plus reset quiz
function youLost() {
    window.alert("you're trash, bro!");
};

// on click event that connects start button to timer and quiz
startBtn.addEventListener("click", startGame);

function startGame() {
    // this ensures that the player starts with 60s 
    timeLeft = 60;

    // this is the timer machinery
    let timerInterval = setInterval(function(){
        timeLeft--;
        timer.textContent = timeLeft + "s";

        if (timeLeft < 0) {
            // stops timer
            clearInterval(timerInterval);
            // this is where i should call the "you lost" function
            youLost()
            // resets timer visually for user 
            timeLeft = 60;
            timer.textContent = timeLeft + "s";
        };
    }, 1000);

    // function that drives first question behavior
    function questionOneFunction() {
        // this creates a div and calls the stored question 
        let newQuestionDiv = document.createElement("div");
        let questionContent = document.createTextNode(questionOne.question);
        newQuestionDiv.setAttribute("class", "questionDiv");
        newQuestionDiv.appendChild(questionContent);
        quizDiv.append(newQuestionDiv);

        // this creates divs and calls the stored possible answers
        for (let key in questionOne.answers) {
            let newAnswerDiv = document.createElement("div");
            let answerContent = document.createTextNode(questionOne.answers[key]);
            newAnswerDiv.appendChild(answerContent);
            newQuestionDiv.appendChild(newAnswerDiv);
        };

        // sets classes for styling and event handling
        let correctAnswer = newQuestionDiv.lastChild;
        correctAnswer.setAttribute("class", "answerDiv correct");

        let incorrectAnswerOne = newQuestionDiv.childNodes[1];
        incorrectAnswerOne.setAttribute("class", "answerDiv incorrectOne");

        let incorrectAnswerTwo = newQuestionDiv.childNodes[2];
        incorrectAnswerTwo.setAttribute("class", "answerDiv incorrectTwo");


        let correctChoice = document.querySelector(".correct");
        let incorrectChoiceOne = document.querySelector(".incorrectOne");
        let incorrectChoiceTwo = document.querySelector(".incorrectTwo");

        // event listener for when correctChoice is clicked 
        correctChoice.addEventListener("click", function () {
            // this queues up the next question for the user
            questionTwoFunction();
        });

        // event listener for when incorrectChoiceOne is clicked
        incorrectChoiceOne.addEventListener("click", function () {
            timeLeft = timeLeft - 3;
        });

        // event listener for when incorrectChoiceTwo is clicked
        incorrectChoiceTwo.addEventListener("click", function () {
            timeLeft = timeLeft - 3;
        });
    };
    questionOneFunction();

    // function that drives second question behavior
    function questionTwoFunction() {
        // this removes the content from the last question so that new content can be created for this question
        let destroy = document.querySelector(".questionDiv");
        destroy.remove();

        // this creates a div and calls the stored question
        let newQuestionDiv = document.createElement("div");
        let questionContent = document.createTextNode(questionTwo.question);
        newQuestionDiv.setAttribute("class", "questionDiv");
        newQuestionDiv.appendChild(questionContent);
        quizDiv.append(newQuestionDiv);

        // this creates divs and calls the stored possible answers
        for (let key in questionTwo.answers) {
            let newAnswerDiv = document.createElement("div");
            let answerContent = document.createTextNode(questionTwo.answers[key]);
            newAnswerDiv.appendChild(answerContent);
            newQuestionDiv.appendChild(newAnswerDiv);
        };

        // sets classes for styling and event handling
        let incorrectAnswerOne = newQuestionDiv.lastChild;
        incorrectAnswerOne.setAttribute("class", "answerDiv incorrectOne");

        let incorrectAnswerTwo = newQuestionDiv.childNodes[1];
        incorrectAnswerTwo.setAttribute("class", "answerDiv incorrectTwo");

        let correctAnswer = newQuestionDiv.childNodes[2];
        correctAnswer.setAttribute("class", "answerDiv correct");


        let correctChoice = document.querySelector(".correct");
        let incorrectChoiceOne = document.querySelector(".incorrectOne");
        let incorrectChoiceTwo = document.querySelector(".incorrectTwo");

        // event listener for when correctChoice is clicked
        correctChoice.addEventListener("click", function () {
            // this moves the user to the second question
            questionThreeFunction();
        });

        // event listener for when incorrectChoiceOne is clicked 
        incorrectChoiceOne.addEventListener("click", function () {
            timeLeft = timeLeft - 3;
        });

        // event listener for when incorrectChoiceTwo is clicked
        incorrectChoiceTwo.addEventListener("click", function () {
            timeLeft = timeLeft - 3;
        });
    };

    // function that drives third question behavior
    function questionThreeFunction() {
        // this removes the content from the last question so that new content can be created for this question
        let destroy = document.querySelector(".questionDiv");
        destroy.remove();

        // this creates a div and calls the stored question
        let newQuestionDiv = document.createElement("div");
        let questionContent = document.createTextNode(questionThree.question);
        newQuestionDiv.setAttribute("class", "questionDiv");
        newQuestionDiv.appendChild(questionContent);
        quizDiv.append(newQuestionDiv);

        // this creates divs and calls the stored possible answers
        for (let key in questionThree.answers) {
            let newAnswerDiv = document.createElement("div");
            let answerContent = document.createTextNode(questionThree.answers[key]);
            newAnswerDiv.appendChild(answerContent);
            newQuestionDiv.appendChild(newAnswerDiv);
        };

        // sets classes for styling and event handling
        let incorrectAnswerOne = newQuestionDiv.lastChild;
        incorrectAnswerOne.setAttribute("class", "answerDiv incorrectOne");

        let correctAnswer = newQuestionDiv.childNodes[1];
        correctAnswer.setAttribute("class", "answerDiv correct");

        let incorrectAnswerTwo = newQuestionDiv.childNodes[2];
        incorrectAnswerTwo.setAttribute("class", "answerDiv incorrectTwo");


        let correctChoice = document.querySelector(".correct");
        let incorrectChoiceOne = document.querySelector(".incorrectOne");
        let incorrectChoiceTwo = document.querySelector(".incorrectTwo");

        // event listener for when correctChoice is clicked
        correctChoice.addEventListener("click", function () {
            // this stops the timer
            clearInterval(timerInterval);

            
            localStorage.setItem("timeKey", timeLeft);

            // this moves the user to the second question
            inputName();
        });

        // event listener for when incorrectChoiceOne is clicked 
        incorrectChoiceOne.addEventListener("click", function () {
            timeLeft = timeLeft - 3;
        });

        // event listener for when incorrectChoiceTwo is clicked
        incorrectChoiceTwo.addEventListener("click", function () {
            timeLeft = timeLeft - 3;
        });
    };
};

// function that creates user's experience whenever quiz ends
function inputName() {
    // this removes the content from the last question so that new content can be created for this question
    let destroy = document.querySelector(".questionDiv");
    destroy.remove();

    // this creates the div where the user will be able to input their name/initials
    let inputDiv = document.createElement("div");
    let inputContent = document.createTextNode("Input your name or initials here and press ENTER to store your score!");
    inputDiv.setAttribute("id", "inputDiv");
    inputDiv.appendChild(inputContent);

    // this creates the form and input field where the user can enter their name/initials
    let inputForm = document.createElement("form");
    inputForm.setAttribute("id", "inputForm");
    inputDiv.appendChild(inputForm);
    let inputField = document.createElement("input");
    inputField.setAttribute("id", "inputField");
    inputForm.appendChild(inputField);
    quizDiv.append(inputDiv);

    // on click event for storing name information
    inputForm.addEventListener("submit", function() {
        let inputValue = document.getElementById("inputField");
        localStorage.setItem("nameKey", inputValue.value);
    })
};



// on click event for "view highschores" to show user highscores

