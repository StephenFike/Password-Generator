// Assignment code here
var letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = [1,2,3,4,5,6,7,8,9,0];
var specialCharacters = [".",",","?","!","@","<",">","#","$","%","^","&","*","(",")","-","_","=","+"];
var confirms = 0;

var nonRandomPassword = "";
var finalPassword = "";

var lowerCaseBoolean = false;
var upperCaseBoolen = false;
var numberPickerBoolean = false;
var specialCharacterPickerBoolean = false;


var getPasswordLength = function() {
  var passLength = prompt("How long do you want the password");
  if (passLength < 8) {
    alert("You must have at least 8 characters!")
    getPasswordLength();
  } else if (passLength > 128) {
    alert("You must have no more than 128 characters!")
    getPasswordLength();
  } else {
    return passLength;
  }
}

var askLowerCase = function() {
  var lowerCaseConfirm = confirm("Do you want to include lower case characters?")
    if (lowerCaseConfirm == true) {
      confirms++
    }
    lowerCaseBoolean = lowerCaseConfirm;
}

var askUpperCase = function() {
  var upperCaseConfirm = confirm("Do you want to include upper case characters?")
  if (upperCaseConfirm == true) {
    confirms++;
  }
  upperCaseBoolen = upperCaseConfirm;
}

var askNumber = function() {
  var askNumberConfirm = confirm("Do you want to include numbers?")
  if (askNumberConfirm == true) {
    confirms++
  }
  numberPickerBoolean = askNumberConfirm;
}

var askSpecialCharacter = function() {
  var askSpecialCharacterConfirm = confirm("Do you want to include special characters?")
  if (askSpecialCharacterConfirm == true) {
    confirms++
  }
  specialCharacterPickerBoolean = askSpecialCharacterConfirm;
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
  var fractionalNum = num / confirms;
  while(fractionalNum > 0) {
    nonRandomPassword += letters[createRandomLetter()].toLowerCase();
    fractionalNum--;
  }
}

var upperCasePicker = function(num) {
  var fractionalNum = num / confirms;
  while(fractionalNum > 0) {
    nonRandomPassword += letters[createRandomLetter()];
    fractionalNum--;
  }
}

var specialCharacterPicker = function(num) {
  var fractionalNum = num / confirms;
  while(fractionalNum > 0) {
    nonRandomPassword += specialCharacters[createRandomSpecial()];
    fractionalNum--;
  }
}

var numberPicker = function(num) {
  var fractionalNum = num / confirms;
  while(fractionalNum > 0) {
    nonRandomPassword += numbers[createRandomNumber()];
    fractionalNum--;
  }
}

var checknonRandomPassword = function(num) {
  if(nonRandomPassword.length > num) {
  var nonRandomPasswordTrim = nonRandomPassword.substring(0, parseInt(num));
  nonRandomPassword = nonRandomPasswordTrim;
  }
}

//  FINISH
function randomizePassword() {

  while (finalPassword.length < nonRandomPassword.length) {
    finalPassword += nonRandomPassword.charAt(Math.floor(Math.random() * nonRandomPassword.length))
  }
}

function getPasswordRequirments() {
  askLowerCase();
  askUpperCase();
  askNumber();
  askSpecialCharacter();
}

function generatePassword() {

  var passwordLength = getPasswordLength();
  getPasswordRequirments();

  if (lowerCaseBoolean == true) {
    lowerCasePicker(passwordLength);
  }

  if (upperCaseBoolen == true) {
    upperCasePicker(passwordLength);
  }
 
  if (numberPickerBoolean == true) {
    numberPicker(passwordLength);
  }

  if (specialCharacterPickerBoolean) {
    specialCharacterPicker(passwordLength);
  }

  checknonRandomPassword(passwordLength);

  randomizePassword();

  console.log(nonRandomPassword);
  console.log(finalPassword);
 }

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = finalPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
