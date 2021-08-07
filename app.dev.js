"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

//create morse code object
var morseCode = {
  a: " ⚫➖/ ",
  b: " ➖⚫⚫⚫/ ",
  c: " ➖⚫➖⚫/ ",
  d: " ➖⚫⚫/ ",
  e: " ⚫/ ",
  f: " ⚫⚫➖⚫/ ",
  g: " ➖➖⚫/ ",
  h: " ⚫⚫⚫⚫/ ",
  i: " ⚫⚫/ ",
  j: " ⚫➖➖➖/ ",
  k: " ➖⚫/ ",
  l: " ⚫➖⚫⚫/ ",
  m: " ➖➖/ ",
  n: " ➖⚫/ ",
  o: " ➖➖➖/ ",
  p: " ⚫➖➖⚫/ ",
  q: " ➖➖⚫➖/ ",
  r: " ⚫➖⚫/ ",
  s: " ⚫⚫⚫/ ",
  t: " ➖/ ",
  u: " ⚫⚫➖/ ",
  v: " ⚫⚫⚫➖/ ",
  w: " ⚫➖➖/ ",
  x: " ➖⚫⚫➖/ ",
  y: " ➖⚫➖➖/ ",
  z: " ➖➖⚫⚫/ ",
  " ": "   //    "
}; //grab html elements

var translateEnglishBtn = document.querySelector(".morse__translate__toMorse");
var tranlsateMorseBtn = document.querySelector(".english__translate__toEnglish");
var clearMorseBtn = document.querySelector(".morse__clearMorse");
var clearEnglishBtn = document.querySelector(".morse__clearEnglish");
var textInput = document.getElementById("textInput");
var textOutput = document.querySelector(".morse__output__translation");
var title = document.querySelector(".morse__output__title");
var morseBtns = document.querySelector(".english__translate__inputs");
var morseDisplay = document.querySelector(".english__translate__keyedInputs");
var englishOutput = document.querySelector(".english__translate__output"); //reference array for the morse code

var letterKeys = Object.keys(morseCode); //capture typed input - english

var englishWords = []; //capture button input - morse code

var morseWords = []; //function to clear text input

var clear = function clear() {
  textInput.value = null;
  englishWords.length = 0;
}; //run translation  on button click


var handleTranslateEnglish = translateEnglishBtn.addEventListener("click", function (e) {
  var input = textInput.value.toLowerCase(); //validate input is valid - if yes push letter to array, if not message to try again

  var validInput = function validInput() {
    var regex = /[^\w\s]/g;

    if (input.search(regex) != -1) {
      title.innerHTML = "That word wasn't recognised, please try again!";
    } else {
      for (var i = 0; i < input.length; i++) {
        var letter = input[i];
        englishWords.push(letter);
      }
    }
  }; //display translation


  var translatePhrase = function translatePhrase() {
    var translationArr = [];
    englishWords.forEach(function (word) {
      translationArr.push(morseCode[word]);
      title.innerHTML = "Your Morse Code is:";
      textOutput.innerHTML = translationArr.join(" ");
    });
  };

  validInput();
  translatePhrase();
  clear();
}); //clear area/clear translation

textInput.onfocus = function () {
  document.querySelector(".morse__output__title").innerHTML = "";
  textOutput.innerHTML = "";
}; //clear input using clear button


var handleClearMorse = clearMorseBtn.addEventListener("click", function (e) {
  clear();
}); //------ MORSE TO ENGLISH -------//

var handleMorseInput = morseBtns.addEventListener("click", function (e) {
  e.preventDefault;
  var morseLetter = e.target.value; //morseWords.push(morseLetter);

  morseDisplay.innerHTML += morseLetter;

  var getMorse = function getMorse() {
    var getKey = letterKeys.find(function (key) {
      return morseCode[key] === morseLetter;
    });
    morseWords.push(getKey);
  };

  getMorse();
});
var handleTranslateMorse = tranlsateMorseBtn.addEventListener("click", function (e) {
  englishOutput.innerHTML = morseWords.join(" ");
  morseWords = (_readOnlyError("morseWords"), []);
});
var handleClearEnglish = clearEnglishBtn.addEventListener("click", function (e) {
  morseDisplay.innerHTML = "";
  englishOutput.innerHTML = "";
});