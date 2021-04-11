// Assignment code here

//jsObj to hold password criteria
var passwordData = {
  length: 0,
  hasLowercase: true,
  hasUppercase: true,
  hasNumber: true,
  hasSpecial: true,

  inputValid: function () {
    if (this.length >= 8 && this.length <= 128) {
      return true;
    } else {
      return false;
    }
  },
};

//regex to test pass string for criteria
const testNum = new RegExp(/\d+/);
const testLower = new RegExp(/[a-z]+/);
const testUpper = new RegExp(/[A-Z]+/);
const testSpec = new RegExp(/[^0-9][^a-z][^A-Z]/);

// Generate password function to hook into exsisting code
var generatePassword = function () {
  //window prompt password length
  passwordData.length = parseInt(
    window.prompt("Please choose a length between 8 and 128 for your password")
  );
  //re prompt if inputValid returns false
  if (!passwordData.inputValid()) {
    window.alert("Please input a valid password length!");
    generatePassword();
  }

  //window confirm password criteria
  //validate that at least one char is true
  //generate random pass
  //26 letters, 33 special char, 10 num(incuding 0)
  //randomly choose category
  //if lower, iterate letter list
  //if uppercase, flip a coin to determine case
  //if special char, iterate char list
  //if number, iterate num list
  //return char
  //add to array
  //set new var to join array
  //validate matches criteria
  //use a regex? and .test()
  //return pass to be printed on page
};
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
