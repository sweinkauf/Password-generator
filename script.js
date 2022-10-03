// Assignment Code
var generateBtn = document.querySelector("#generate");

included in password
var special = [
  '@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.',
];

var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var lowerCase = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
];

var upperCase = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
];

function passwordPrompts() {
  var pwLength = parseInt(prompt("How long would you like your password to be? Enter Between 8-128 charcters"))
   if (pwLength<8 || pwLength>128) {
    alert("Between 8-128 please")
    return null;
   }  
   var hasUppercase = confirm("Would you like to use Upper Cases?")
   var hasLowercase = confirm("Would you like to use Lower Cases?")
   var hasSpecial = confirm("Would you like to use Special Characters?")
   var hasNumbers = confirm("Would you like to use Numbers?")
   if (
    hasLowercase === false &&
    hasUppercase === false &&
    hasSpecial === false &&
    hasNumbers === false 
    ) {
      alert ("You need to choose 1 type of character")
      return null;
    }
    var passwordOptions = {
      hasLowercase: hasLowercase, 
      hasUppercase: hasUppercase,
      hasNumbers: hasNumbers,
      hasSpecial: hasSpecial,
    };
    return passwordOptions

  
}
console.log (passwordPrompts)

function generatePassword() {}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

passwordPrompts()

//generatePassword is going to take all the choices we made and use it to create password
//were going to be using window.confirm method alert method
 //math.random and math.floor
 //concat method
 //push method
 // for loops
 // if statements and conditional statements true or false