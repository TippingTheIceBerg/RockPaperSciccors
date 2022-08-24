let playerChoiceOptions = document.getElementsByClassName("playerChoice")
let winnerText = document.querySelector(".winner__text");
let playerChoice = ""
let computerChoice = ""
let computerNumberStyle = document.getElementsByClassName("computerChoice")



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
;
  
}
function setComputerStyle(){

    for(let i = 0; i < computerNumberStyle.length; i++ ){
        computerNumberStyle[i].style.backgroundColor = "rgb(0 0 0/.0)"
    }   
    console.log(computerChoice)
    computerNumberStyle[computerChoice].style.backgroundColor = "red"
}

function setBackgroundColorOfChoice () {
    for(let i = 0; i < playerChoiceOptions.length;i++){
    playerChoiceOptions[i].style.backgroundColor = "red"
    }}




