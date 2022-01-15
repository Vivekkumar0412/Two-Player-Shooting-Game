// initilizing the values
//   score of player 1
//   let player1Score = parseInt(
//     document.getElementById("player1Score").innerText
//   );
//   score of player 2
// let player2Score = parseInt(
//     document.getElementById("player2Score").innerText
//   );
//   inilitazing the value to make fire power between 0 - 5;
let firePower = 0;
// getting the fire buttons
let fire1 = document.getElementById("fire1");
let fire2 = document.getElementById("fire2");
//   adding eventlistenr on fire 1
fire1.addEventListener("click", function () {
  if (
    parseInt(document.getElementById("player1TournamentScore").innerText) >= 2
  ) {
    alert("PLAYER 1 WON THE TOURNAMENT !");
    newTournament();
  }
  if (player2Score.innerText <= 0) {
    alert("Player 1 won the match");
    document.getElementById("player1TournamentScore").innerText =
      parseInt(document.getElementById("player1TournamentScore").innerText) + 1;
    newGame();
  } else {
    firePower = Math.floor(Math.random() * 5) + 1;
    player2Score.innerText = parseInt(player2Score.innerText - firePower);
  }
});
//   adding eventlistener on fire 2
fire2.addEventListener("click", function () {
  if (
    parseInt(document.getElementById("player2TournamentScore").innerText) >= 2
  ) {
    alert("PLAYER 2 WON THE TOURNAMENT !");
    newTournament();
  }
  if (player1Score.innerText <= 0) {
    alert("Player 2 won the match");
    document.getElementById("player2TournamentScore").innerText =
      parseInt(document.getElementById("player2TournamentScore").innerText) + 1;
    newGame();
  } else {
    firePower = Math.floor(Math.random() * 5) + 1;
    player1Score.innerText = parseInt(player1Score.innerText - firePower);
  }
});
//   new game function
function newGame() {
  player2Score.innerText = 100;
  player1Score.innerText = 100;
}
function newTournament() {
  document.getElementById("player1TournamentScore").innerText = 0;
  document.getElementById("player2TournamentScore").innerText = 0;
  newGame();
}
