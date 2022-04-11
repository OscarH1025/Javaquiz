var quizStatus = true; // Know the status of the quiz. Quiz is not running = false , running = true
var questionNumber = 0; // This tracks the question answered.
var answerNumber = 0; // This tracks next answers to show
var score = 0;
var highScore = 50; 
var finalAnswerCheck = 0 // If last answer was wrong it will be validated outside of the time interval and then display as enabled = 1 
var checkTimes = 1 
var viewHighScoresBtnEl = document.getElementById('view-high-scores');
var startQuizBtnEl = document.getElementById('start-quiz'); // Start Quiz button Btn El
var answer1BtnEl = document.getElementById('answer1'); 
var answer2BtnEl = document.getElementById('answer2');
var answer3BtnEl = document.getElementById('answer3'); 
var answer4BtnEl = document.getElementById('answer4'); 
var submitScoreEl = document.getElementById('submitScore'); 
var questionsEl = document.getElementById('questions'); // Questions for the main Div
var mainDivEl = document.getElementById('mainDiv'); // Main div container for all elements except for header elements
var htmlTimeLeft = document.getElementById('timeLeft'); // Display counter at the html level.
var answerCorrectWrong = document.getElementById('answerCorrectWrong'); // Display counter at the html level.
var questionDisplayEl = document.createElement("questionDisplay"); // Display Question
var finalScoreDisplayEl = document.createElement("finalScoreDisplay"); // Display Question
var enterInitialsEl = document.createElement("enterInitials"); // Enter initials
var enterInitialsTextAreaEl = document.createElement("enterInitialsTextArea"); // TextArea
var button1234 = document.createElement("button"); // Test answer 1
var timeLeft = 60;

// Do not display anything that is not ready to be displayed
answer1BtnEl.style.display = 'none';
answer2BtnEl.style.display = 'none';
answer3BtnEl.style.display = 'none';
answer4BtnEl.style.display = 'none';
submitScoreEl.style.display = 'none';
answerCorrectWrong.style.display='none';
enterInitialsTextArea.style.display='none';