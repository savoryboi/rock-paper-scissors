var welcomePopup = alert('want to play a game?');
var rulePopup = alert('type "r" for rock, "p" for paper, and "s" for scissors');
var moves = ['r','p','s'];
var playerScore = 0;
var compScore = 0;

var resetBtn = document.querySelector('button#reset')

function letsPlay(){
    var myMove = prompt('rock, paper, scissors... make your move (r, p, or s?)');
    var compMove = moves[Math.floor(Math.random() * moves.length)];
    var thisRoundCompScore = 0;
    var thisRoundPlayerScore = 0;

    if(myMove === 'r' && compMove === 'p'){ 
        compScore++;
        thisRoundCompScore++
    } else if(myMove === 'p' && compMove === 's') {
        compScore++;
        thisRoundCompScore++
    } else if(myMove === 's' && compMove === 'r'){
        compScore++;
        thisRoundCompScore++
    } else if(compMove === 'r' && myMove === 'p'){
        playerScore++
        thisRoundPlayerScore++;
    } else if(compMove === 'p' && myMove ==='s'){
        playerScore++
        thisRoundPlayerScore++
    } else if(compMove === 's' && myMove === 'r'){
        playerScore++
        thisRoundPlayerScore++
    } else if (compMove === myMove){
        playerScore += 0;
        compScore += 0;
    } else{
        return;
    }
    console.log(myMove, compMove);
    console.log(playerScore, compScore);



    if(thisRoundPlayerScore > thisRoundCompScore){
        alert(`holy shit you won! the score is ${playerScore} to ${compScore}`);
    } else if(thisRoundPlayerScore < thisRoundCompScore){
        alert(`you fucking lost... the score is ${playerScore} to ${compScore}`);
    } else if (thisRoundCompScore === thisRoundPlayerScore) {
        alert(`you tied! the score is ${playerScore} to ${compScore}`);
    }
    return letsPlay();
}

letsPlay();

document.getElementById("reset").addEventListener("click", letsPlay);