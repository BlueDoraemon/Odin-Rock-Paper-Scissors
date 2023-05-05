// Javasctipt begin

function getComputerChoice() {
    let a = Math.floor(Math.random() * 3);
return a;
}

let rock = 0;
let scissors = 1;
let paper = 2;

function computerSelection() {
    let choice = getComputerChoice();
    if  (choice === 0) {
        return "Rock";
    }
    else if (choice === 1){
        return "Scissors";
    }
    else {

        return "Paper";
    }
}

function rockPaperScissors(a){
    a = a.toLowerCase();
    if (a === "rock") {
        if (computerSelection() === "Rock"){
            return "Draw! Player Rock draws to computer Rock"
        }
        else if (computerSelection() === "Paper"){
            return "You lose! Player Rock loses to compuer Paper"
        }
        else if (computerSelection() === "Scissors"){
            return "You win! Player Rock beats the computer's Scissors"
        }
    } 
    else if (a === "scissors") {
        if (computerSelection() === "Rock"){
            return "You lose! Player Scissors draws to computer Rock"
        }
        else if (computerSelection() === "Paper"){
            return "You Win! Player Scissors beats computer's Paper"
        }
        else if (computerSelection() === "Scissors"){
            return "Draw! Player Scissors draws to the computer's Scissors"
        }
    
    }

    else if (a === "paper") {
        if (computerSelection() === "Rock"){
            return "You win! Player Paper beats computer's Rock"
        }
        else if (computerSelection() === "Paper"){
            return "Draw! Player Paper draws to compuer Paper"
        }
        else if (computerSelection() === "Scissors"){
            return "You lose! Player's Paper loses to the computer's Scissors"
        }
    }

    else {
        return "Error"
    }
    
}

function game(){
    //iteration 10
    for (let i = 1; i <= 5; i++ ) {
    playerSelection = prompt();
    console.log(rockPaperScissors(playerSelection));
    } 
}
game();

