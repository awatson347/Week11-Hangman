

var Letter = require('./letter.js');    	
var Word = function(word, letter){
	// Convert t0 array of characters
	var wordArray = word.split("");

	// Number of letters in the random word
	this.numLetters = wordArray.length;

	// Letter object
	var letterOrBlank = new Letter(letter);

	for (var i=0; i<wordArray.length; i++) {
		wordArray[i] = letterOrBlank.blank;
	}

	// Convert the array to string
	this.display = wordArray.join(" ");
};


Word.prototype.checkWord = function(word, letter, numGuessed, guessesLeft){
	
	var wordArray = word.split("");

	// Letter object
	var letterOrBlank = new Letter(letter);

	// Checks letter
	for (var i=0; i<wordArray.length; i++) {
		if (wordArray[i] === letter) {
			wordArray[i] = letterOrBlank.letter;
			numGuessed++;
			guessesLeft++;  
		} else {
			wordArray[i] = letterOrBlank.blank;

		}
	}

	// Convert back into a string
	this.display = wordArray.join(" ");

	guessesLeft--;
};

module.exports = Word;