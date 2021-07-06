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
  " ": "/"
}; //grab html elements

var translateBtn = document.querySelector("button");
var textInput = document.getElementById("textInput");
var textOutput = document.querySelector(".morse__output__translation"); //reference array

var letterKeys = Object.keys(morseCode);
console.log(letterKeys); //capture typed input

var word = []; //how to translate from typed input to morse code
//run translation  on button click

var handleTranslate = translateBtn.addEventListener("click", function (e) {
  var input = textInput.value.toLowerCase(); //validate input is valid - on click?

  var validInput = function validInput() {
    for (var i = 0; i < input.length; i++) {
      if (letterKeys.includes(input[i])) {
        word.push(i);
      } else {
        textInput.value = "";
        document.querySelector(".morse__output__title").innerHTML = "Try Again!";
      }
    }
  };

  validInput();
}); //display translation
//clear area/clear translation