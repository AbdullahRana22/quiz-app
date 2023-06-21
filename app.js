let questions = [
    {
        question: "Which is the largest country in the world?" ,
        answers : [
            { text:  "Germany" , correct : false},
            { text:  "Russia" , correct : true},
            { text:  "Japan" , correct : false},
            { text: "India", correct : false},

        ]
        
    },
    {
        question: "Which is the largest city in the Pakistan?" ,
        answers : [
            { text:  "Islamabad" , correct : false},
            { text:  "Lahore" , correct : false},
            { text:  "Karachi" , correct : true},
            { text: "Multan", correct : false},

        ]   
    },
    {
        question: "Which is the answer of this 2+2 ?" ,
        answers : [
            { text:  "4" , correct : true},
            { text:  "7" , correct : false},
            { text:  "22" , correct : false},
            { text: "2", correct : false},

        ]   
    }
];

let questionElement = document.getElementById("question");
let answerbtn = document.getElementById("answer-buttons");
let nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
 

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.
    question;

   currentQuestion.answers.forEach(answer =>{
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerbtn.appendChild(button);
    if(answer.correct){
        button.dataset.correct = answer.correct;
    }
    button.addEventListener("click" , selectAnswer);
   });

}

function resetState (){
    nextButton.style.display = "none";
    while(answerbtn.firstChild){
        answerbtn.removeChild(answerbtn.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerbtn.children).forEach(button => {
        if (button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
 //   nextButton.innerHTML = "Play Again";
   // nextButton.style.display = "block";
     
}




function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{

    }
})

startQuiz();



























