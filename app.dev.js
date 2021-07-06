"use strict";

//create morse code object
var morseCode = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  " ": " "
}; //grab html elements

var translateBtn = document.querySelector("button");
var textInput = document.getElementById("textInput");
var textOutput = document.querySelector(".morse__output__translation"); //reference array

var letterKeys = Object.keys(morseCode); //capture typed input

var words = []; //how to translate from typed input to morse code
//run translation  on button click

var handleTranslate = translateBtn.addEventListener("click", function (e) {
  var input = textInput.value.toLowerCase(); //validate input is valid - if yes push letter to array, if not message to try again

  var validInput = function validInput() {
    for (var i = 0; i < input.length; i++) {
      if (letterKeys.includes(input[i])) {
        words.push(input[i]);
      } else {
        textInput.value = "";
        document.querySelector(".morse__output__title").innerHTML = "Try Again!";
      }
    }
  };

  var translatePhrase = function translatePhrase() {
    var translationArr = [];
    words.forEach(function (word) {
      translationArr.push(morseCode[word]);
    });
    textOutput.innerHTML = translationArr.join("  ");
  };

  validInput();
  translatePhrase();
}); //display translation
//clear area/clear translation