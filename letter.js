var Letter = function(let) {
    
    this.charac = let;
    //make an appear property 
    this.appear = false;
    //make a letterRender property and set it to a function that does what you think makes sense
    this.letterRender = function() {
        if (this.appear === true) {
            return this.charac;
        } else if (this.charac === " ") {
            this.appear = true;
            return this.charac
        } else {
            return " ";
        }
    }
};

//export the Letter constructor here
exports.Letter = Letter;