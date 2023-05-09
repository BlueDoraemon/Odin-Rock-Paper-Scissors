<h2>Battle of the Nen: Scissors, Paper, Rock Edition</h2>
<p>This is a simple Scissors, Paper, Rock game built with HTML, CSS, and JavaScript. The game pits you against Gon, the protagonist of the anime/manga series Hunter x Hunter, in a battle to see who can reach 5 points first.</p>
<h3>How to Play</h3>
<p>To play, simply click one of the three buttons to make your move. The computer will randomly choose its move, and the winner of each round will be determined according to the classic Scissors, Paper, Rock rules:</p>
<ul>
<li>Rock beats Scissors</li>
<li>Scissors beat Paper</li>
<li>Paper beats Rock</li>
</ul>
<p>The first player to reach 5 points wins the game. Your score and Gon's score are displayed on the screen, along with an image of Gon.</p>
<h3>Code Overview</h3>
<p>The HTML file contains the basic structure of the game, including the main container, header, score display, buttons, and footer. The JavaScript file provides the logic for the game, including functions for generating the computer's move, determining the winner of each round, and updating the score. The CSS file styles the game, including the background, font, and positioning of the elements.</p>
<p>The game starts with an initial score of 0 for both the player and Gon. Each time the player makes a move, the <code>rockPaperScissors()</code> function is called to determine the winner of the round. The result of the round is then displayed using the <code>showResult()</code> function, which updates the hidden <code>div</code> with the appropriate text and displays it on the screen.</p>
<p>After each round, the <code>updateScore()</code> function updates the score display to reflect the current scores of the player and Gon. If either player reaches a score of 5, the <code>checkScore()</code> function is called to determine the winner of the game. If the player wins, Gon's image changes to a defeated version of himself. If the player loses, Gon's image changes to a victorious version of himself.</p>
<h3>Credits</h3>
<p>This game was created by Lx. Li in 2023 as part of The Odin Project curriculum. The images of Gon were sourced from <a href="https://www.stickpng.com/">https://www.stickpng.com/</a>.</p>
