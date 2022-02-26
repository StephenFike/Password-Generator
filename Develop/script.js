// Assignment code here
var letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numers = [];
var specialCharacters = [];
var finalPassword = ""

var getPasswordLength = function() {
  var passLength = prompt("How long do you want the password");
  return passLength;
 }

 var lowerCase = function() {
  var lowerCasePrompt = confirm("Do you want to include lower case characters?")
  return lowerCasePrompt;
 }

var createRandomNumber = function() {
  var randomNumber = Math.floor(Math.random() * letters.length);
  return randomNumber;
}

var lowerCasePicker = function(num) {
  var fractionalNum = num / 4;
  while(fractionalNum > 0) {
    finalPassword += letters[createRandomNumber()].toLowerCase();
    fractionalNum--
  }
}

function generatePassword() {
  var passwordLength = getPasswordLength();
  lowerCase();
  lowerCasePicker(passwordLength);
  lowerCasePicker(passwordLength);
  lowerCasePicker(passwordLength);
  lowerCasePicker(passwordLength);
  lowerCasePicker(passwordLength);
  checkFinalPassword(passwordLength);
  console.log(finalPassword);
 }

var checkFinalPassword = function(num) {
  if(finalPassword.length > num) {
  var finalPasswordTrim = finalPassword.substring(0, parseInt(num));
  finalPassword = finalPasswordTrim;
  }
}

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
