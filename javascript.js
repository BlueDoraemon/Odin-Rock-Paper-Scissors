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
    console.log(comp);
    if (a === "rock") {
        if (comp === "Rock"){
            return "Draw! Player Rock draws to computer Rock"
        }
        else if (comp === "Paper"){
            opponentScore++;
            return "You lose! Player Rock loses to computer Paper"
        }
        else if (comp === "Scissors"){
            yourScore++;
            return "You win! Player Rock beats the computer's Scissors"
        }
    } 
    else if (a === "scissors") {
        if (comp === "Rock"){
            opponentScore++;
            return "You lose! Player Scissors draws to computer Rock"
        }
        else if (comp === "Paper"){
            yourScore++;
            return "You Win! Player Scissors beats computer's Paper"
        }
        else if (comp === "Scissors"){
            return "Draw! Player Scissors draws to the computer's Scissors"
        }
    
    }

    else if (a === "paper") {
        if (comp === "Rock"){
            yourScore++;
            return "You win! Player Paper beats computer's Rock"
        }
        else if (comp === "Paper"){
            return "Draw! Player Paper draws to computer Paper"
        }
        else if (comp === "Scissors"){
            opponentScore++;
            return "You lose! Player's Paper loses to the computer's Scissors"
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
    console.log(rockPaperScissors(yourMove));
    showResult();
    updateScore();
 checkScore(); //
  });
});


// on key clickdown run rockPaperScissors then run showResult then run showResult then run updateScore then checkScore 


function showResult(str){

} // display result div class hidden

function updateScore(){
    const divYour = document.querySelector('.yourScore');
    console.log(yourScore);
    divYour.textContent = `${yourScore}`;

    const divOpponent = document.querySelector('.opponentScore');
    divOpponent.textContent = `54545 ${opponentScore}`;

}

// If score of you is 5 you win if score of opponent is 5 you lose.
function checkScore(){
    if (yourScore === 5)
        //you win
    
    resetGame();
    else if (opponentScore === 5) {

        //you lose

    resetGame();
    }
    else return;
}

function resetGame(){
    yourScore = 0;
    opponentScore = 0;

} // resets everything back to beggining

function showHidden(message){ // Input text from rock paper scissors
    const hidden = document.querySelector('.hidden')
    if (hidden.style.display === `none`) {
         hidden.style.display = `flex`;
         hidden.textContent = message;
    }
    else hidden.style.display = `none`;
}


