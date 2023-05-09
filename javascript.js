// Javasctipt begin

function getComputerChoice() {
    let a = Math.floor(Math.random() * 3);
return a;
}

let rock = 0;
let scissors = 1;
let paper = 2;

let yourScore = 0;
let opponentScore = 0;
updateScore();

function computerSelection() {
    const choice = getComputerChoice();
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
    const comp = computerSelection();
    if (a === "rock") {
        if (comp === "Rock"){
            return "Draw! Your Rock draws to Gon's Rock"
        }
        else if (comp === "Paper"){
            opponentScore++;
            return "You lose! Your Rock loses to Gon's Paper"
        }
        else if (comp === "Scissors"){
            yourScore++;
            return "You win! Your Rock beats Gon's Scissors"
        }
    } 
    else if (a === "scissors") {
        if (comp === "Rock"){
            opponentScore++;
            return "You lose! Your Scissors draws to Gon's Rock"
        }
        else if (comp === "Paper"){
            yourScore++;
            return "You Win! Your Scissors beats Gon's Paper"
        }
        else if (comp === "Scissors"){
            return "Draw! Your Scissors draws to Gon's Scissors"
        }
    
    }

    else if (a === "paper") {
        if (comp === "Rock"){
            yourScore++;
            return "You win! Your Paper beats Gon's Rock"
        }
        else if (comp === "Paper"){
            return "Draw! Your Paper draws to Gon's Paper"
        }
        else if (comp === "Scissors"){
            opponentScore++;
            return "You lose! Your Paper loses to Gon's Scissors"
        }
    }

    else {
        return "Error";
    }
    
}

const buttons = document.querySelectorAll('button[data-move]');

buttons.forEach(function(button) {
  const yourMove = button.dataset.move;
  button.addEventListener('click', function() {
    let dialog = rockPaperScissors(yourMove); //JS run one round output dialog
    showResult(dialog);
    updateScore(); //
    checkScore(); // Did someone win or lose
  });
});


// on key clickdown run rockPaperScissors then run showResult then run showResult then run updateScore then checkScore 


function showResult(dialog){ // Input text from rock paper scissors
    const hidden = document.querySelector('.hidden');
  
    if (hidden.style.display === `none`) {
         hidden.style.display = `flex`;
         hidden.textContent = dialog;
         console.log(dialog);
         setTimeout((e) => {
        hidden.style.display = `none`;
        },2000 ) //2000 ms timeout
    }
    else hidden.style.display = `none`;
} // display result div class hidden

function updateScore(){
    const divYour = document.querySelector('.yourScore');
    // console.log(yourScore);
    divYour.textContent = yourScore;

    const divOpponent = document.querySelector('.opponentScore');
    divOpponent.textContent = opponentScore;

}

// If score of you is 5 you win if score of opponent is 5 you lose.
function checkScore(){
    if (yourScore === 5){
        
        //you win
        const opponent = document.querySelector('.opponent');
        opponent.src = "./images/gon-lose.png";
    resetGame();
    }
    else if (opponentScore === 5) {

        //you lose
        const win = document.querySelector(`.opponentScore`);
        win.style.transform = 'scale(1.1)'
        const opponent = document.querySelector('.opponent');
        opponent.src = "./images/gon-win.png";

    resetGame();
    }
    else return;
}

function resetGame(){
    yourScore = 0;
    opponentScore = 0;
    const opponent = document.querySelector('.opponent');
    setTimeout((e) => {
    opponent.src = "./images/gon.png";
    updateScore();
    }, 5000);
    

} // resets everything back to beggining



