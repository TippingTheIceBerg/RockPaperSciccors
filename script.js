let playerChoiceOptions = document.getElementsByClassName("playerChoice")
let winnerText = document.querySelector(".winner__text");
let playerChoice = ""
let playerScore = document.querySelector(".player__score")
let computerChoice = ""
let computerScore = document.querySelector(".computer__score")
let computerNumberStyle = document.getElementsByClassName("computerChoice")
let winningScreen = document.querySelector(".winning__screen")
let playerWinningScreen = document.querySelector('.winning__screen--player')
let computerWinningScreen = document.querySelector('.winning__screen--computer')
let replayTheGame = document.querySelector(".winning__playAgain")

let select = document.querySelector(".selectTheme");
let html = document.querySelector("html")

function setTheme(bgColor, textColor){
    html.style.backgroundColor = bgColor;
    html.style.color = textColor
}

select.addEventListener("change",()=>{
    select.value == "Dark Mode"?  setTheme("black","white"): setTheme("white","black")
})





function getComputerChoice(){
    computerChoice = Math.floor(Math.random()*3);
    return computerChoice;
    
}


for(let i = 0; i < playerChoiceOptions.length;i++){
    playerChoiceOptions[i].addEventListener('click',()=>{
        playerChoice = playerChoiceOptions[i].innerText;
        playRound();
    })
   
}
function getPlayerChoice(){
    // Rock = 0; Paper = 1; Scissors = 2
    playerChoice === "Rock" ? playerChoice = 0: playerChoice === "Paper" ? playerChoice = 1: playerChoice = 2;
    
    return playerChoice}


function playRound (playerNumber, computerNumber, styleComputer){
    winnerText.style.display = "block"
    playerNumber = getPlayerChoice();
    computerNumber = getComputerChoice();
    styleComputer = setComputerStyle();
    // Logic that decides what beats what
    // Rock = 0; Paper = 1; Scissors = 2
    playerNumber == 0 && computerNumber == 2? winnerText.innerText = "player Wins": playerNumber == 1 && computerNumber == 0? winnerText.innerText = "player wins": playerNumber == 2 && computerNumber == 1? winnerText.innerText ="player wins": playerNumber == computerNumber? winnerText.innerText = "it's a tie": winnerText.innerText = "computer wins"

    // adds score, if the score of 5 is reached by either side, the winning screen will slide in and decide who won.
    addScore();
    slideWinningScreen();;
    decideWhoWon();
}

// functions that decide how far the game goes and ends the game
function addScore (){
    winnerText.innerText === "computer wins"? computerScore.innerText++: winnerText.innerHTML === "player wins"? playerScore.innerText++:""
}

function slideWinningScreen (){
    if(computerScore.innerText == 5 || playerScore.innerText == 5){
           winningScreen.style.left= '0'
    }
}
function decideWhoWon(){
    if(computerScore.innerText == 5){
        computerWinningScreen.style.left = "50%"
    }
    else if(playerScore.innerText == 5){
        playerWinningScreen.style.left = "50%"
    }
}



function setComputerStyle(){

    for(let i = 0; i < computerNumberStyle.length; i++ ){
        computerNumberStyle[i].style.backgroundColor = "rgb(0 0 0/.0)"
    }   
    computerNumberStyle[computerChoice].style.backgroundColor = "gray"
}

function setBackgroundColorOfChoice () {
    for(let i = 0; i < playerChoiceOptions.length;i++){
    playerChoiceOptions[i].style.backgroundColor = "red"
    }}




replayTheGame.addEventListener("click",()=>{
    winningScreen.style.left= '-10000px'
    playerWinningScreen.style.left = "-1000px"
    computerWinningScreen.style.left = "-1000px"
    playerScore.innerText = "0"
    computerScore.innerText = "0"

})