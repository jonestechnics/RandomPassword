// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numberCharacters = "1234567890"
var specialCharacters = "!@#$%^&*+=?~-:;"
var characterChoices = ""
var passwordString = ""

function getPasswordLength(){
  return prompt("How long would you like you password from 8 to 128 characters")
}

function generatePassword() {

  var passwordLength = getPasswordLength()
  passwordLength = parseInt(passwordLength)
  if (passwordLength >= 8 && passwordLength <= 128) {
    console.log(passwordLength)
  } else {
    alert("Error incorrect try again.")
    passwordLength = getPasswordLength()
  }

  var useLowerCase = confirm("Would you like to use lowercase letters?")
  var useUpperCase = confirm("WOULD YOU LIKE TO USE UPPER CASE?")
  var useNumberCharacters = confirm("Would you like to use numbers?")
  var useSpecialCharacters = confirm("Would you like to use special characters?")

  if (useLowerCase) {
    characterChoices += lowerCaseLetters
  }
  if (useUpperCase) {
    characterChoices += upperCaseLetters
  }
  if (useNumberCharacters) {
    characterChoices += numberCharacters
  }
  if (useSpecialCharacters) {
    characterChoices += specialCharacters
  }

  

  for(let i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * characterChoices.length)
    var randomCharacter = characterChoices[randomNumber]
    passwordString += randomCharacter
  }
  return passwordString
  
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
