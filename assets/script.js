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
    
    // Validate for each input and at least one character type should be selected
    if (!speChar && !numChar && !lowChar && !upperChar) {
      alert("Select at least one of the character options!");
      return;
    }
    
    // Character options object
    var options = {
      charNum : charNum,
      speChar : speChar,
      numChar : numChar,
      lowChar : lowChar,
      upperChar : upperChar,
    }
    return options;
  }
    
  else {
    if (parseInt(charNum) < 8) {
      alert("Password length must be at least 8 characters!")
    }
    else if (parseInt(charNum) > 128) {
      alert("Password length must be no more than 128 characters!")
    }
    // For all other incorrect inputs
    else {
      alert("Please enter a number between 8 and 128 (included).")
    }
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
  return Math.floor(Math.random() * arr.length);
}

// Function to generate password with user input
function generatePassword() {
  var randomPassword = "";
  var charOptions = [];

  // Stores the returned Character Options object
  var options = getPasswordOptions();

  if (options.speChar) {
    charOptions = charOptions.concat(specialCharacters);
  }
  if (options.numChar) {
    charOptions = charOptions.concat(numericCharacters);
  }

  if (options.lowChar) {
    charOptions = charOptions.concat(lowerCasedCharacters);
  }

  if (options.upperChar) {
    charOptions = charOptions.concat(upperCasedCharacters);
  }

  while (randomPassword.length < options.charNum) {
    randomPassword = randomPassword + charOptions[getRandom(charOptions)];
  }
  
  return randomPassword
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
