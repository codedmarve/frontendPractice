var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var gamestarted = 0;
var level = 0;
var i = 0;

$(".btn").click(function(event) {

	var userChosenColour = this.id;
	userClickedPattern.push(userChosenColour);
	
	playSound("./sounds/" + userChosenColour + ".mp3");	
	animatePress(this);

	if (i <= gamePattern.length && (userClickedPattern[i] === gamePattern[i])) {

		i++;
		if (i === gamePattern.length) {

			i = 0;
			userClickedPattern = [];
			setTimeout(function() {
				nextSequence();
			}, 1000);
		}
	} else {
		userClickedPattern = [];
		gamePattern = [];
		gamestarted = 0;
		level = 0;
		i = 0;
		$("body").addClass("game-over");
		$("h1").text("Game Over, Press any Key to restart");
		playSound("sounds/wrong.mp3");

		setTimeout(function() {
			$("body").removeClass("game-over");
		}, 200);
	}
});


$(document).keydown(function(event) {
	if (gamestarted === 0) {
		$("h1").text("Level" + level);
		nextSequence();
	}
	gamestarted++;
});


function nextSequence() {
	var randomNumber = Math.floor(Math.random() * 4);
	var randomChosenColor = buttonColors[randomNumber];
	gamePattern.push(randomChosenColor);
	$("#" + randomChosenColor).fadeOut(50).fadeIn(50);

	playSound("./sounds/" + randomChosenColor + ".mp3");
	level++;
	$("h1").text("Level " + level);
}

function playSound(name) {
	var sound = new Audio(name);
	sound.play();
}

function animatePress(currentcolor) {
	$(currentcolor).addClass("pressed")
	setTimeout(function() {
		$(currentcolor).removeClass("pressed");
	}, 100);
}
