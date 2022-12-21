// Assignment code here
var upLetter = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d","f", "g", "h", "J", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
var lowLetter = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "?"];

lengthPrompt = prompt("Pick a number between 8 and 128 for your password");
upPrompt = prompt("Would you like to include upper case letters: yes or no?");
lowPrompt = prompt("Would you like to include lower case letters: yes or no?");
numPrompt = prompt("Would you like to include numbers: yes or no?");
symbPrompt = prompt("would you like to include symbols: yes or no?");



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
