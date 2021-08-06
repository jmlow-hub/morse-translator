"use strict";

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
  l: " ⚫➖⚫/ ",
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

var translateBtn = document.querySelector("button");
var textInput = document.getElementById("textInput");
var textOutput = document.querySelector(".morse__output__translation");
var title = document.querySelector(".morse__output__title"); //reference array for the morse code

var letterKeys = Object.keys(morseCode); //capture typed input

var words = []; //run translation  on button click

var handleTranslate = translateBtn.addEventListener("click", function (e) {
  var input = textInput.value.toLowerCase(); //validate input is valid - if yes push letter to array, if not message to try again

  var validInput = function validInput() {
    var regex = /[^\w\s]/g;

    if (input.search(regex) != -1) {
      title.innerHTML = "That word wasn't recognised, please try again!";
    } else {
      for (var i = 0; i < input.length; i++) {
        var letter = input[i];
        words.push(letter);
      }
    }
  }; // for(let i = 0; i < input.length; i++) {
  //   let letter = input[i];
  //   if((letterKeys.includes(letter))) {
  //     words.push(letter);
  //     console.log(words)
  //   } else {
  //     document.querySelector(".morse__output__title").innerHTML = "Try Again!"
  //   }
  // }
  // }
  //display translation


  var translatePhrase = function translatePhrase() {
    var translationArr = [];
    words.forEach(function (word) {
      translationArr.push(morseCode[word]);
      title.innerHTML = "Your Morse Code is:";
      textOutput.innerHTML = translationArr.join(" ");
    });
  };

  var clear = function clear() {
    textInput.value = null;
    words.length = 0;
  };

  validInput();
  translatePhrase();
  clear();
}); //clear area/clear translation

textInput.onfocus = function () {
  document.querySelector(".morse__output__title").innerHTML = "";
  textOutput.innerHTML = "";
};