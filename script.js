// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Assignment code here

  // pseudo coding the application

  // declare variabe for each password character category

// variable declaration for each character category

// call the main function to generatepassword

//  in the function prompt user to select how many character to include

// set a condition if character length < 8 || >128 alert to choose a number between


// give value to each variable for password character category

// set condition if user deny to select any category alet with select altleast one to proceed

// a designated variable for the password type an open array

//  user selection for each category set condition as charater + passwoerd array combines to fill the variable password type arra
y 
// variable for randomly generted password 
// loop for finalpassword = finalpassword + passwordtypes

// return the value of the funtion generate password

// Get references to the #generate element

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
