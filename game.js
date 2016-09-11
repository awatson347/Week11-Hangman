

// Word Array 
var carArray = [
	"FERRARI",
	"BUGATTI",
	"MCLAREN",
	"LAMBORGHINI",
	"ASTON MARTIN",
	"BENTLEY",
	"PORSCHE"
];

// Random array picker
 var randomWord = carArray[Math.floor(Math.random()*carArray.length)];

// Exports to main.js
exports.randomWord = randomWord;