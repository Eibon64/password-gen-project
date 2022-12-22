// Assignment code here
var upLetter = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "J", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
var lowLetter = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "?"];

var password = []

function getPrompts() {
  var lengthPrompt = prompt("Pick a number between 8 and 128 for your password");
  var upPrompt = prompt("Would you like to include upper case letters: yes or no?");
  var lowPrompt = prompt("Would you like to include lower case letters: yes or no?");
  var numPrompt = prompt("Would you like to include numbers: yes or no?");
  var symbPrompt = prompt("would you like to include symbols: yes or no?");

  if (upPrompt === "yes") {
    password.push(...upLetter)
  }
  if (lowPrompt === "yes") {
    password.push(...lowLetter)
  }
  if (numPrompt === "yes") {
    password.push(...number)
  }
  if (symbPrompt === "yes") {
    password.push(...symbol)
  }
  generatePassword(lengthPrompt)
}

var finalPassword = ""

function generatePassword(length) {
  for (var i = 0; i < length; i++) {
    var randomNumber = Math.floor(Math.random() * password.length);
    // password += password.substring(randomNumber, randomNumber +1);
    finalPassword += password[randomNumber]

  }
  var passwordText = document.querySelector("#password");
  // 
  passwordText.innerHTML=finalPassword
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   

//   passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


getPrompts()