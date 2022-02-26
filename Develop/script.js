// Assignment code here
var letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = [1,2,3,4,5,6,7,8,9,0];
var specialCharacters = [".",",","?","!","@","<",">","#","$","%","^","&","*","(",")","-","_","=","+"];
var confirms = 0
var finalPassword = ""

var getPasswordLength = function() {
  var passLength = prompt("How long do you want the password");
  if (passLength < 8) {
    alert("You must have at least 8 characters!")
    getPasswordLength();
  } else if (passLength > 128) {
    alert("You must have no more than 128 characters!")
    getPasswordLength();
  } else {
    return passLength
  }
}

var lowerCase = function() {
  var lowerCasePrompt = confirm("Do you want to include lower case characters?");
  return lowerCasePrompt;
  confirms++
}


var upperCase = function() {
  var upperCasePrompt = confirm("Do you want to include upper case characters?");
  return upperCasePrompt;
}

var askNumber = function() {
  var numberPrompt = confirm("Do you want to include numbers?")
  return numberPrompt;
}

var askSpecialCharacter = function() {
  var specialCharConfirm = confirm("Do you want to include special characters?")
  return specialCharConfirm;
}

var createRandomLetter = function() {
  var randomLetter = Math.floor(Math.random() * letters.length);
  return randomLetter;
}

var createRandomNumber = function() {
  var randomNumber = Math.floor(Math.random() * numbers.length);
  return randomNumber;
}

var createRandomSpecial = function() {
  var randomSpecial = Math.floor(Math.random() * specialCharacters.length)
  return randomSpecial;
}

var lowerCasePicker = function(num) {
  var fractionalNum = num / 4;
  while(fractionalNum > 0) {
    finalPassword += letters[createRandomLetter()].toLowerCase();
    fractionalNum--;
  }
}

var upperCasePicker = function(num) {
  var fractionalNum = num / 4;
  while(fractionalNum > 0) {
    finalPassword += letters[createRandomLetter()];
    fractionalNum--;
  }
}

var specialCharacterPicker = function(num) {
  var fractionalNum = num / 4;
  while(fractionalNum > 0) {
    finalPassword += specialCharacters[createRandomSpecial()];
    fractionalNum--;
  }
}

var numberPicker = function(num) {
  var fractionalNum = num / 4;
  while(fractionalNum > 0) {
    finalPassword += numbers[createRandomNumber()];
    fractionalNum--;
  }
}

function generatePassword() {
  var passwordLength = getPasswordLength();
  lowerCase();
  lowerCasePicker(passwordLength);
  upperCase();
  upperCasePicker(passwordLength);
  askNumber();
  numberPicker(passwordLength);
  askSpecialCharacter();
  specialCharacterPicker(passwordLength);
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
