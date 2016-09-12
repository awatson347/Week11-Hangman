var prompt = require('prompt');
var Word = require('./word.js');
var Game = require('./game.js');
var Letters = require('./letter.js');

prompt.start();

game = {
    
    wordsWon: 0,
    guessesRemaining: 10, 
    currentWrd: null, 
    userGuess: [],
    startGame: function(wrd) {
        //make sure the userguesses
        this.resetGuessesRemaining();

        //get a random word from the array
        // this.currentWrd = new Word.Word(Game.game.wordBank[0].toLowerCase());
        this.currentWrd = new Word.Word(Game.game.wordBank[Math.floor(Math.random() * (6 - 0 + 1)) + 0].toLowerCase());
        this.currentWrd.getLets(); //populate currentWrd (made from Word constructor function) object with letters

        this.keepPromptingUser();

    },
    resetGuessesRemaining: function() {
        this.guessRemaining = 10;
        this.userGuess = [];
    },
    keepPromptingUser: function() {
        var self = this;

        prompt.get(['guessLetter'], function(err, result) {
            // result is an object like this: { guessLetter: 'f' }
            //console.log(result);
            self.userGuess.push(result.guessLetter)
            
            console.log('//////////////////////////// The Letter You Guessed: /////////////////////');
            
            console.log(result.guessLetter)
            
                //this checks if the letter was found and if it is then it sets that specific letter in the word to be found
            var findHowManyOfUserGuess = self.currentWrd.checkIfLetterFound(result.guessLetter);

            //guesses they have left
            if (findHowManyOfUserGuess == 0) {
                console.log('!!!!!!!!! You Guessed Wrong !!!!!!!');
                
                self.guessesRemaining--;
            } else {
                console.log('!!!!!!!!! You Guessed Right !!!!!!!');
                
                //check if you win only when you are right
                
                if (self.currentWrd.didWeFindTheWord()) {
                    
                    console.log(" ");
                    console.log('You Got it. Word Was: ' + self.currentWrd.wordRender());
                    console.log(" ");
                    console.log('!!!!!!!!!!! You Win !!!!!!!!!!!');
                    console.log(" ");
                    return; //end game
                }
            }
            console.log("=========================================================================");
            console.log('Guesses remaining: ', self.guessesRemaining);
            console.log("");

            console.log('Word: ' + self.currentWrd.wordRender());
            console.log("");

            console.log('Here are the letters you guessed already: ' + self.userGuess);
            console.log("=========================================================================");
            console.log(" ");
            if ((self.guessesRemaining > 0) && (self.currentWrd.found == false)) {
                self.keepPromptingUser();
            } else if (self.guessesRemaining == 0) {
                console.log('Game Over, Word Was: ', self.currentWrd.word);
                console.log("");
            	console.log('!!!!!!!!!!! You Lose !!!!!!!!!!!');
           		console.log("");
            } else {
                console.log(self.currentWrd.wordRender());
            }
        });
    }


};

game.startGame();