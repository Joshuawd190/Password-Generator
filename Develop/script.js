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
//arrays for letters and special characters
var lettersArry = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var specCharArry = [
  "\u0020",
  "\u0021",
  "\u0022",
  "\u0023",
  "\u0024",
  "\u0025",
  "\u0026",
  "\u0027",
  "\u0028",
  "\u0029",
  "\u002A",
  "\u002B",
  "\u002C",
  "\u002D",
  "\u002E",
  "\u002F",
  "\u003A",
  "\u003B",
  "\u003C",
  "\u003D",
  "\u003E",
  "\u003F",
  "\u0040",
  "\u005B",
  "\u005C",
  "\u005E",
  "\u005F",
  "\u0060",
  "\u007B",
  "\u007C",
  "\u007D",
  "\u007E",
];
// Generate password function to hook into exsisting code
var generatePassword = function () {
  //window prompt password length
  var lengthInput = window.prompt(
    "Please choose a length between 8 and 128 for your password"
  );
  passwordData.length = parseInt(lengthInput);

  //re prompt if inputValid returns false
  if (!passwordData.inputValid()) {
    window.alert("Please input a valid password length!");
    generatePassword();
  }

  //window confirm password criteria
  var confirmCriteria = function () {
    passwordData.hasLowercase = window.confirm(
      "Would you like to include lowercase letters?"
    );
    passwordData.hasUppercase = window.confirm(
      "Would you like to include uppercase letters?"
    );
    passwordData.hasNumber = window.confirm(
      "Would you like to include numbers?"
    );
    passwordData.hasSpecial = window.confirm(
      "Would you like to include special characters?"
    );
    //validate that at least one char is true
    var hasCriteria = [
      passwordData.hasLowercase,
      passwordData.hasNumber,
      passwordData.hasUppercase,
      passwordData.hasSpecial,
    ];
    if (!hasCriteria.includes(true)) {
      window.alert("You must include at least one criteria!");
      confirmCriteria();
    }
  };

  confirmCriteria();

  //generate random pass
  var generateRandomPass = function () {
    //randomly choose category
    //generate a random choice 0-2 (three choices)
    //26 letters, 33 special char, 10 num(incuding 0)
    //case for changing letters to uppercase
    var passArray = [];
    while (passArray.length < passwordData.length) {
      var charChoice = Math.floor(Math.random() * 4);

      switch (charChoice) {
        //if number, choose num 0-9
        case 0:
          if (passwordData.hasNumber) {
            var charNum = Math.floor(Math.random() * 10);
            charNum.toString();
            //add to array
            passArray.push(charNum);
            break;
          }
        //if special char, choose char from list
        case 1:
          if (passwordData.hasSpecial) {
            //get a num between 1-33
            var charSpecChoice = Math.floor(Math.random() * 34);
            //add to array
            passArray.push(specCharArry[charSpecChoice]);
            break;
          }
        //if lower, choose letter from list
        case 2:
          if (passwordData.hasLowercase) {
            //get a num between 1-26
            var charLowerChoice = Math.floor(Math.random() * 27);
            //add to array
            passArray.push(lettersArry[charLowerChoice]);
            break;
          }
        //if uppercase, choose letter and make uppercase
        case 3: {
          if (passwordData.hasUppercase) {
            //get a num between 1-26
            var charUpperChoice = Math.floor(Math.random() * 27);

            //add to array
            passArray.push(lettersArry[charUpperChoice].toUpperCase());
            break;
          }
        }
        default: {
          break;
        }
      }
    }
    //return pass as string using join array
    return passArray.join("");
  };
  var PasswordActual = generateRandomPass();

  console.log(PasswordActual);

  //return pass to be printed on page
  return PasswordActual;
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
