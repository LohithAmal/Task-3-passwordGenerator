// activate strict mode
'use strict';
// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Assignment code here

  // pseudo coding the application

  // declare variabe for each password character category
  var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",  "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// variable declaration for each character category
var passwordLength; 
var passwordNumber;
var passwordSymbol;
var passwordLower;
var passwordUpper;
// call the main function to generatepassword
function generatePassword (){
//  in the function prompt user to select how many character to include
var passwordLength = window.prompt("Enter a number between 8 and 128");
// set a condition if character length < 8 || >128 alert to choose a number between
if (passwordLength < 8 || passwordLength > 128){
  window.alert('Please choose a slection of number between 8 and 128');
  var passwordLength = window.prompt("Enter a number between 8 and 128");
}

// give value to each variable for password character category

var passwordSymbol = confirm('ok if you want symbols on your password');
var passwordNumber = confirm('ok if you want numbers on your password');
var passwordUpper = confirm('ok if you want uppercase alphabets on your password');
var passwordLower = confirm('ok if you want lowercase alphabets on your password');

// set condition if user deny to select any category alet with select altleast one to proceed
if(!passwordLower && !passwordNumber && !passwordUpper && !passwordSymbol){
  window.alert('please choose atleast one password criteria to proceed');
var passwordSymbol = confirm('ok if you want symbols on your password');
var passwordNumber = confirm('ok if you want numbers on your password');
var passwordUpper = confirm('ok if you want uppercase alphabets on your password');
var passwordLower = confirm('ok if you want lowercase alphabets on your password');
}
// a designated variable for the password type an open array
var passwordType = []
//  user selection for each category set condition as charater + passwoerd array combines to fill the variable password type array
if (passwordSymbol) {
  passwordType = passwordType .concat(symbols)
}
if (passwordNumber){
  passwordType = passwordType .concat(number);
}
if (passwordUpper) {
  passwordType = passwordType .concat(uppercase);
}
if(passwordLower){
  passwordType = passwordType .concat(lowercase);
}
// variable for randomly generted password 

var finalPassword = ""
// loop for finalpassword = finalpassword + passwordtypes
for(var i = 0 ; i < passwordLength; i++){
  finalPassword = finalPassword + passwordType[Math.floor(Math.random() * passwordType.length)];
  console.log(finalPassword);
}
// return the value of the funtion generate password
return finalPassword;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
