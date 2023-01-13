// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var charNum = prompt("How many characters would you like your password to contain?");

  // At least 8 characters but no more than 128.
  if (parseInt(charNum) > 8 && parseInt(charNum) < 129) {

    // Character types options
    var speChar = confirm("Click OK to confirm including special characters.");
    var numChar = confirm("Click OK to confirm including numeric characters.");
    var lowChar = confirm("Click OK to confirm including lowercase characters.");
    var upperChar = confirm("Click OK to confirm including uppercase characters.");
    var options = [speChar, numChar, lowChar, upperChar];
    return options;

  }
    
  else {
    if (parseInt(charNum) < 8) {
      alert("Password length must be at least 8 characters!")
    }
    else if (parseInt(charNum) > 128) {
      alert("Password length must be no more than 129 characters!")
    }
    // For all other incorrect inputs
    else {
      alert("Please enter a number between 8 and 129 (included).")
    }
  }
}


getPasswordOptions();

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
