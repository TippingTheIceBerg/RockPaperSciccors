let playerChoiceOptions = document.getElementsByClassName("playerChoice")
let playerChoice = ""


function getComputerChoice(){
    let randomComputerChoice = Math.floor(Math.random()*3)
    return randomComputerChoice;
}


function getPlayerChoice(){
    playerChoice === "Rock" ? playerChoice = 0: playerChoice === "Paper" ? playerChoice = 1: playerChoice = 2;
    return playerChoice}


function whoWins (playerChoice, computerChoice){
    playerChoice = getPlayerChoice();
    computerChoice = getComputerChoice();
    computerChoice == 0 && playerChoice == 1? console.log("player wins"): computerChoice == 1 && playerChoice == 2? console.log("player wins"): computerChoice == 2 && playerChoice == 0? console.log("player wins"): computerChoice == 1 && playerChoice == 0? console.log("computer wins"): computerChoice == 2 && playerChoice == 1? console.log("computer wins"): computerChoice == 0 && playerChoice == 2?console.log("computer wins"): console.log("it's a tie")  ;
  
}


for(let i = 0; i < playerChoiceOptions.length;i++){
    playerChoiceOptions[i].addEventListener('click',()=>{
        playerChoice = playerChoiceOptions[i].innerText;
        whoWins();
    })
   
}