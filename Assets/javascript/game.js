var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];

//Runs when computer lets up on a key and picks a value fromthe alphabet array.
//The compairs the user guess against the computer pick.
document.onkeyup = function(event) {

	// Determines which key was pressed.
	var userInput = event.key;
	userInput = userInput.toLowerCase();
	//pushes the userInput into the guessedSoFar array
	guessesSoFar.push(userInput);
	//Displays the user guesses to this point and score
	function refreshScreen() {
		document.querySelector("#guessesSoFar").innerHTML = guessesSoFar;
		document.querySelector("#wins").innerHTML = wins;
		document.querySelector("#losses").innerHTML = losses;
		document.querySelector("#guessesLeft").innerHTML = guessesLeft;
	}

	function reset() {
		document.querySelector("#guessesSoFar").innerHTML = "";
		document.querySelector("#wins").innerHTML = 0;
		document.querySelector("#losses").innerHTML = 0;
		document.querySelector("#guessesLeft").innerHTML = 9;
		wins = 0;
		losses = 0;
		guessesLeft = 9;
		guessesSoFar = [];
	}

	var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
	
	//Decraments the guessesLeft by 1
	guessesLeft--;

	if (computerGuess === userInput) {
		//Increments the wins by 1
		wins++;
		refreshScreen();
	}
	else {
		//Increments the losses by 1
		losses++;
		refreshScreen();
	}
	
	//if player or computer win this gives an alert and resets the values on the screen
	if (guessesLeft <= 0) {
		reset();
		alert("You Lose!");
	}
	else if (wins >= 5) {
		reset();
		alert("You Win!!!")
	}



	//Console logging so I can see what is going on
	console.log(userInput);
	console.log(guessesSoFar);
	console.log(wins);
	console.log(losses);
	console.log(guessesLeft);

 }

 	
