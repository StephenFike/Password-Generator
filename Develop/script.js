// Assignment code here
var letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = [1,2,3,4,5,6,7,8,9,0];
var specialCharacters = [".",",","?","!","@","<",">","#","$","%","^","&","*","(",")","-","_","=","+"];
var confirms = 0;
var finalPassword = "";

var getPasswordLength = function() {
  var passLength = prompt("How long do you want the password");
  if (passLength < 8) {
    alert("You must have at least 8 characters!")
    getPasswordLength();
  } else if (passLength > 128) {
    alert("You must have no more than 128 characters!")
    getPasswordLength();
  } else {
    lowerCase();
    return passLength;
  }
}

var lowerCase = function() {
  if (confirm("Do you want to include lower case characters?")){
    confirms++;
    upperCase();
    return;
  } else {
    upperCase();
  }
}

var upperCase = function() {
  if (confirm("Do you want to include upper case characters?")){
    confirms++;
    askNumber();
    return;
  } else {
    askNumber();
  }
}

var askNumber = function() {
  if (confirm("Do you want to include numbers?")){
    confirms++
    askSpecialCharacter();
    return
  } else {
    askSpecialCharacter();
  }
}

var askSpecialCharacter = function() {
  if (confirm("Do you want to include special characters?")){
    confirms++;
    return;
  }
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
    finalPassword += letters[createRandomLetter()].toLowerCase();
    fractionalNum--;
  }
}

var upperCasePicker = function(num) {
  var fractionalNum = num / confirms;
  while(fractionalNum > 0) {
    finalPassword += letters[createRandomLetter()];
    fractionalNum--;
  }
}

var specialCharacterPicker = function(num) {
  var fractionalNum = num / confirms;
  while(fractionalNum > 0) {
    finalPassword += specialCharacters[createRandomSpecial()];
    fractionalNum--;
  }
}

var numberPicker = function(num) {
  var fractionalNum = num / confirms;
  while(fractionalNum > 0) {
    finalPassword += numbers[createRandomNumber()];
    fractionalNum--;
  }
}

var checkfinalPassword = function(num) {
  if(finalPassword.length > num) {
  var finalPasswordTrim = finalPassword.substring(0, parseInt(num));
  finalPassword = finalPasswordTrim;
  }
}

function generatePassword() {

  var passwordLength = getPasswordLength();

  lowerCasePicker(passwordLength);
  upperCasePicker(passwordLength);
  numberPicker(passwordLength);
  specialCharacterPicker(passwordLength);
  checkfinalPassword(passwordLength);
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
