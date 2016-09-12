
var letterJs = require('./letter.js')

var Word = function(wrd) {  
    this.word = wrd;
    this.wordFound = [];
    this.lets = [];
    this.found = false;
    //make a property called getLets, 
    this.getLets = function() {
            
            console.log('========================Welcome To the Hoy Car Hangman =======================');
            console.log('');
            console.log('!!!!!!!!!Guess A Letter!!!!!!!!!!!');
            
            for (var i = 0; i < this.word.length; i++) {
                var myletterConstructed = new letterJs.Letter(this.word[i]);  
                this.lets.push(myletterConstructed);                
            }
        }
        //returns ture or false whether we found the current word or not
    this.didWeFindTheWord = function() {
        
        var wordFound = 0;
        for (var i = 0; i < this.lets.length; i++) {
            if (this.lets[i].appear === true) {
                wordFound++;
            }
            if (wordFound === this.lets.length) {
                this.found = true;
            } else {
                this.found = false;
            };

        }
        
        return this.found;


    };

    this.checkIfLetterFound = function(guessLetter) {
        //set a variable whatToReturn to 0
        var whatToReturn = 0;
        .
        for (var i = 0; i < this.lets.length; i++) {
            // console.log(this.lets[i])
            if (guessLetter === this.lets[i].charac) {
                whatToReturn++;
                this.lets[i].appear = true;
            } else
                this.appear = false;
        }
        return whatToReturn
    };

    this.wordRender = function() {
        //make a variable empty 
        var str = "";
        //loop over this.lets and call the letterRender 
        for (var i = 0; i < this.lets.length; i++) {
            str += (this.lets[i].letterRender())
        }
        return str;
    };
}



//export the Word constructor here at the end
exports.Word = Word;