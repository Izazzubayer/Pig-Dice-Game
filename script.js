// Global vars
var score, roundScore, activePlayer, gamePlaying;

// Inirtializing
init();

// This function works when the "btn-roll" button is clicked
document.querySelector(".btn--roll").addEventListener("click", function() {

    // If the game is active
    if (gamePlaying) {
        // 1.Generate random number
        // Initit var because local scope
        var dice = Math.floor(Math.random() * 6) + 1;

        // 2.Display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = "block";
        // Every dice is named 'dice-' and after that whatever number shows up from random function is implemented and the picture changes itself.
        diceDOM.src = 'dice-' + dice + '.svg'



        // 3.Update the number if rolled score is NOT a 1
        if (dice !== 1) {
            // add score
            roundScore += dice;
            document.querySelector("#current--" + activePlayer).textContent = roundScore;
        } else {
            // Call next player usin DRY principle
            nextPlayer();
        }
    }


})

document.querySelector(".btn--hold").addEventListener('click', function() {

    if (gamePlaying) {
        //    Add CURRENT SCORE to global score 
        score[activePlayer] += roundScore;

        // Updating the UI
        document.querySelector("#score--" + activePlayer).textContent = score[activePlayer];

        // If player won the game
        if (score[activePlayer] >= 100) {
            document.querySelector("#name--" + activePlayer).textContent = "Winner!"
            document.querySelector(".dice").style.display = "none";
            gamePlaying = false;
            // For fancy styling for the winner
            // document.querySelector(".current-" + activePlayer + "-0").classList.add("winner");
            // document.querySelector(".current-" + activePlayer + "-1").classList.remove("winner");


        } else {
            // Calling Next Player
            nextPlayer();
        }
    }

})


function nextPlayer() {
    // Next player
    // Using turnery operator
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current--0').textContent = "0";
    document.getElementById('current--1').textContent = "0";

    // Active selctor
    document.querySelector('.player--1').classList.toggle("active");
    document.querySelector('.player--0').classList.toggle("active");

    document.querySelector('.dice').style.display = 'none';
}



// For the NEW GAME button

document.querySelector(".btn--new").addEventListener('click', init);

function init() {

    gamePlaying = true;

    score = [0, 0];
    roundScore = 0;
    activePlayer = 0;

    // Initially setting the dice to none (img type)
    document.querySelector(".dice").style.display = 'none';


    // Initial scores of Player 1 and Player 2 is set to 0
    document.getElementById("score--0").textContent = '0';
    document.getElementById("score--1").textContent = "0";
    document.getElementById("current--0").textContent = "0";
    document.getElementById("current--1").textContent = "0";

    // Changing the winner to default player back again
    document.querySelector("#name--0").textContent = "Player 1"
    document.querySelector("#name--1").textContent = "Player 2"


}