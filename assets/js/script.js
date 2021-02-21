// variable declaration 
let quizDiv = document.getElementById("quiz");
let startBtn = document.getElementById("start");
let viewScores = document.getElementById("scores")
let timer = document.getElementById("timer");
let timeLeft = 60;
timer.textContent = timeLeft + "s";
// this will be used for retrieving locally stored scores
let timeStored = JSON.parse(localStorage.getItem("timeKey"));
// this will be used for retrieving locally stored user names 
let nameStored = JSON.parse(localStorage.getItem("nameKey"));

// object declaration -- i.e., where the questions/answers will be stored 
// individual questions and answers
let questionOne = {
    question: "Which of the following would you use to set a variable whose value never changes?",
    answers: {
        a: "var [variable] = [value];",
        b: "let [variable] = [value];",
        c: "const [variable] = [value];"
    }
};

let questionTwo = {
    question: "Which of the following is the best way to pick out an element by its class?",
    answers: {
        a: "document.getElementsByClassName(\".[class name]\");",
        b: "document.getElementsByClassName(\"[class name]\");",
        c: "document.getElementByClassName(\"[class name]\");"
    }
};

let questionThree = {
    question: "Using vanilla JavaScript, how would you add a click event listener to a button query selected by \"btn\"? ", 
    answers: {
        a: "btn.addEventListener(\"click\", [function]);",
        b: "btn.click([function]);",
        c: "btn.addEventListener([function], \"click\");"
    }
};

// array containing the questions and answers 
let allQuestions = [questionOne, questionTwo, questionThree];

// function for when user loses -- i.e., "you lost" alert (modal if i have time) plus reset quiz
function youLost() {
    window.alert("You ran out of time! \n\nClick \"Start Code Quiz!\" to play again.");
};

// on click event that connects start button to timer and quiz
startBtn.addEventListener("click", startGame);

function startGame() {
    // destroys infoDiv -- i.e., quiz description and start game button
    let destroy = document.getElementById("infoDiv");
    destroy.remove();

    if (document.querySelector("#scoresDiv") == null) {
        null;
    } else {
        let evicerate = document.getElementById("scoresDiv");
        evicerate.remove();
    };

    // this ensures that the player starts with 60s 
    timeLeft = 60;


    // this is the timer machinery
    let timerInterval = setInterval(function(){
        timeLeft--;
        timer.textContent = timeLeft + "s";

        if (timeLeft < 0) {
            // stops timer
            clearInterval(timerInterval);
            // this calls the "you lost" function
            youLost()
            
            // reloads the page
            location.reload();
            
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
        newQuestionDiv.setAttribute("class", "questionDiv justify-content-center");
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

            // this updates timeStored array
            if (timeStored == null) {
                timeStored = [timeLeft];
            } else {
                timeStored.unshift(timeLeft);
            };
            
            // this stores the time at which the user completed the quiz
            localStorage.setItem("timeKey", JSON.stringify(timeStored));

            // this moves the user to the input-name prompt
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
    // this removes the content from the last question so that new content can be created for the inputDiv
    let destroy = document.querySelector(".questionDiv");
    destroy.remove();

    // this creates the div where the user will be able to input their name/initials
    let inputDiv = document.createElement("div");
    let inputContent = document.createTextNode("You finished with " + timeLeft + "s remaining.\nInput your name or initials here and press ENTER to store your score!");
    inputDiv.setAttribute("id", "inputDiv");
    inputDiv.setAttribute("class", "inputDiv justify-content-center");
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
    inputForm.addEventListener("submit", function (event) {
        event.preventDefault();
        let inputValue = document.getElementById("inputField");

        // this updates nameStored array
        if (nameStored == null) {
            nameStored = [inputValue.value];
        } else {
            nameStored.unshift(inputValue.value);
        };

        // this stores the new name entry
        localStorage.setItem("nameKey", JSON.stringify(nameStored));

        // moves user to previous scores screen
        prevScores();
    })
};

// function that creates previous scores list 
function prevScores() {
    // this removes inputDiv so that new content can be created for the scoresDiv
    if (document.querySelector("#inputDiv") !== null) {
        let destroy = document.querySelector("#inputDiv");
        destroy.remove();
    };

    // sets scoresDiv with id 
    let scoresDiv = document.createElement("div");
    scoresDiv.setAttribute("id", "scoresDiv");

    // sets scoresHeading with id and content 
    let scoresHeading = document.createElement("h1");
    scoresHeading.setAttribute("id", "scoresHeading");
    scoresHeading.innerHTML = "Previous Scores";

    // sets nameHeading with id and content 
    let nameHeading = document.createElement("h2")
    nameHeading.setAttribute("id", "nameHeading");
    nameHeading.innerHTML = "Name";

    // sets scoreHeading with id and content 
    let prevScoreHeading = document.createElement("h2");
    prevScoreHeading.setAttribute("id", "scoreHeading");
    prevScoreHeading.innerHTML = "Score";

    // sets namesList with id
    let namesList = document.createElement("ol");
    namesList.setAttribute("id", "namesList");

    // sets scoresList with id
    let scoresList = document.createElement("ul");
    scoresList.setAttribute("id", "scoresList");

    // sets newGameBtn with id
    let newGameBtn = document.createElement("button");
    newGameBtn.setAttribute("id", "newGameBtn");
    newGameBtn.innerHTML = "New Game";

    // creates list of (previous) user names
    if (nameStored == null) {
        nameItem = document.createElement("li");
        nameItem.setAttribute("id", "listItem");
        nameItem.innerHTML = "You have to have played";
        namesList.appendChild(nameItem);
    } else {
        nameStored.forEach(element => {
            // sets nameItem with id
            let nameItem = document.createElement("li");
            nameItem.setAttribute("id", "listItem");
            nameItem.innerHTML = element;
            namesList.appendChild(nameItem);
        });
    }

    // creates list of (previous) user scores
    if (timeStored == null) {
        scoreItem = document.createElement("li");
        scoreItem.setAttribute("id", "listItem");
        scoreItem.innerHTML = "to have previous scores!"
        scoresList.appendChild(scoreItem);
    } else {
        timeStored.forEach(element => {
            // sets scoreItem with id
            let scoreItem = document.createElement("li");
            scoreItem.setAttribute("id", "listItem");
            scoreItem.innerHTML = element;
            scoresList.appendChild(scoreItem);
        });
    };

    // this appends previously set elements as children to scoresDiv
    scoresDiv.appendChild(scoresHeading);
    scoresDiv.appendChild(nameHeading);
    scoresDiv.appendChild(prevScoreHeading);
    scoresDiv.appendChild(namesList);
    scoresDiv.appendChild(scoresList);
    scoresDiv.appendChild(newGameBtn);

    // this appends the scoresDiv as a child to quizDiv
    quizDiv.appendChild(scoresDiv);

    // on click event that refreshes page when "New Game" is clicked
    let refreshBtn = document.getElementById("newGameBtn");
    function refresh(){
        location.reload();
    };
    refreshBtn.addEventListener("click", refresh);
};
// on click event for "view previous scores" to show user previous scores
viewScores.addEventListener("click", function() {
    // this allows user to view/hide previous scores at any point
    if (document.querySelector("#scoresDiv") !== null) {
        let destroy = document.querySelector("#scoresDiv");
        destroy.remove();
    } else{
        prevScores();
    };
}); 