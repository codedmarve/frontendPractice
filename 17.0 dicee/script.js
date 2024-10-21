
var random1 = Math.round((Math.random() * 5) + 1);
var random2 = Math.round((Math.random() * 5) + 1);

document.querySelector(".dice .img1").setAttribute("src", "./images/dice" + random1 + ".png");
document.querySelector(".dice .img2").setAttribute("src", "./images/dice" + random2 + ".png");

if (random1 > random2)
    document.querySelector("h1").innerText = "Player 1 Wins! 🚩";
else if (random1 < random2)
    document.querySelector("h1").innerText = "Player 2 Wins! 🚩";
else
    document.querySelector("h1").innerText = "Draw!";