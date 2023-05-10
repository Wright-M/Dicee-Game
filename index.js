function newRoll(){
  let dicePlayer1 = Math.floor(Math.random()* 6 + 1);
  let dicePlayer2 = Math.floor(Math.random()* 6 + 1);
  let refresh = "Let 'Em Roll!";

document.querySelector(".img1").setAttribute("src", "images/dice" + dicePlayer1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + dicePlayer2 + ".png");

if (dicePlayer1 > dicePlayer2){
  refresh = "🚩 You Win!";
}
else if (dicePlayer1 < dicePlayer2){
  refresh = "Player 2 Wins! 🚩";
}
else if (dicePlayer1 === dicePlayer2) {
  refresh = "Draw!";
}
else {
  refresh = "Let 'Em Roll!";
}

document.querySelector(".top-title").textContent = refresh;

}




