// for score
let userScore = document.querySelector(".user-score");
let compScore = document.querySelector(".comp-score");
let msg = document.querySelector(".msg");
let choices = document.querySelectorAll(".choice");


// userScore=0;
// compScore=0;


//for youWon text

// for image select

//changing score
let userScoreValue = 0; // Tracks user's score
let compScoreValue = 0; // Tracks computer's scorelet userChoice= 0;

//geting user choice
choices.forEach( (choice)=> {
choice.addEventListener("click", ()=>{
    let userChoice= choice.getAttribute("id");
    
    playGame(userChoice);
    compChoice();
});  
});

// game logic
const playGame=(userChoice, userScore, compScore)=>{
let computerChoice=compChoice();
console.log("user choice= ", userChoice);
if(userChoice===computerChoice){
    console.log("match Draw");
    msg.innerText=("Match Draw");
    

} else if(
    (userChoice==="rock" && computerChoice==="scissor") ||
    (userChoice==="paper" && computerChoice==="rock") ||
    (userChoice==="scissor" && computerChoice==="paper") 
 ){
    console.log("you win"); 
    msg.innerText=("You Win");
    userScoreValue++;
    userScoreValue.innerText= userScore;
    console.log("User score element:", userScore);
    msg.style.backgroundColor="#03fc03";
    
    // userScore.innerText = userScoreValue;
} else {
    console.log("you loose");
    msg.innerText=("Yow Loose")
    compScoreValue++; // Increment computer's score
    msg.style.backgroundColor="#fc0324";
    console.log("Computer score element:", compScore);
    
    compScoreValue.innerText= compScore;
    console.log("User score element:", userScore);
   // compScore.innerText = compScoreValue; // Update computer's score display
}
};

//geting computer choice
let compChoice=()=>{
let arr=["rock", "paper", "scissor"];
let randomIndex=Math.floor(Math.random() *arr.length);
console.log("comp choice = ", arr[randomIndex]);

return arr[randomIndex];


};  