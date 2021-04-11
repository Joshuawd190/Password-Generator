// Assignment code here

//jsObj to hold password criteria
var passwordData = {
  length: 8,
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

// Generate password function to hook into exsisting code
var generatePassword = function () {};
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
