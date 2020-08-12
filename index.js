var randomNumber1 = Math.floor(Math.random() * 6) +1;
var randomNumberDice = "images/dice"+ randomNumber1 +".png";

var randomNumber2 = Math.floor(Math.random() * 6) +1;
var randomNumberDice2 = "images/dice"+ randomNumber2 +".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomNumberDice);

document.querySelectorAll("img")[1].setAttribute("src",randomNumberDice2);


title = document.querySelector("h1");

if (randomNumber1>randomNumber2){
  title.innerHTML = "🚩 Player 1 win";
} else if (randomNumber1<randomNumber2) {
  title.innerHTML = "🚩 Player 2 win";
} else {
  title.innerHTML = "☠️ Draw !";
}
