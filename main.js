

// Create dependency for 'inquirer' npm package
var inquirer = require('inquirer');

// Required files to run this game
var game = require('./game.js');  			
var Word = require('./word.js');  			

// Global variables
var wordToGuess = game.randomWord;  						
var letterGuess = "";										
var numGuessed = 0;											
var guessesLeft = 10;  										
var displayArray = new Word(wordToGuess, letterGuess);		
var wordLength = displayArray.numLetters;  					
var wonOrLost = "";											


console.log(wordToGuess);



console.log("Welcome to Hangman: The Game");
console.log("Your randomly selected word has been randomly selected:");
console.log(displayArray.display);


// Game//
function pickALetter() {
	inquirer.prompt([{
			name: "letterPick",
			message: "What letter do you pick?",
			filter: function(input) {
			    return input.toUpperCase();
			}			
	}]).then(function(answer) {
		letterGuess = answer.letterPick;
//		displayArray = checkWord(wordToGuess, letterGuess, numGuessed, guessesLeft);
		console.log(guessesLeft);
		console.log(wordLength);
		if (numGuessed == wordLength) {
			wonOrLost = "won";  // Guessed word right and won!
			gameOver();
		} else if (guessesLeft == 0) {
			wonOrLost = "lost";  //Ran out of guesses and lost!
			gameOver();
		}

		
		pickALetter();
	});
};


function gameOver() {
	console.log("=======================");
	console.log("GAME OVER!");
	console.log("=======================");
	if (wonOrLost == "won") {
		console.log("Congratulations, you won!");
	} else if (wonOrLost == "lost") {
		console.log("YOU LOOSE!");
	}
	return;
};

//START THE GAME//
pickALetter();