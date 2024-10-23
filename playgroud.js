// function whosPaying(names) {
    
// /******Don't change the code above*******/
    
//     //Write your code here.
//     var random = Math.round((Math.random()) * (names.length - 1));

//     console.log(random);
    
//     return names[random];
    
    
    


// /******Don't change the code below*******/    
// }

// var names = ["marve", "drey", "mjay", "izzy", "deborah", "tony"];

// console.log(whosPaying(names));



// var random1 = Math.round((Math.random() * 5) + 1);
// var random2 = Math.round((Math.random() * 5) + 1);

// document.querySelector(".dice .img1").setAttribute("src", "./images/dice" + random1 + ".png");
// document.querySelector(".dice .img2").setAttribute("src", "./images/dice" + random2 + ".png");

// if (random1 > random2)
//     document.querySelector("h1").innerText = "Player 1 Wins! 🚩";
// else if (random1 < random2)
//     document.querySelector("h1").innerText = "Player 2 Wins! 🚩";
// else
//     document.querySelector("h1").innerText = "Draw!";

// var buttons = document.querySelectorAll("button");


// for (var i = 0; i < buttons.length; i++)
// {
// 	buttons[i].addEventListener("click", function ()
// 	{
// 		// var audio = new Audio("./sounds/tom-1.mp3");
// 		// audio.play();

//     	this.style.color = "White";
	
// 	});
// }

// function HouseKeeper(yearsOfExperience, name, cleaningRepertoire) {
// 	this.yearsOfExperience = yearsOfExperience;
// 	this.name = name;
// 	this.cleaningRepertoire = cleaningRepertoire;
// 	this.clean = function () {
// 		alert("Cleaning right away");
// 	}
// }

// var houseKeeper = new HouseKeeper(20, "Marvellous", ["bathroom", "Lobby", "Garden"]);