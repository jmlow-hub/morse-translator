//create morse code object
const morseCode = {
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
}

//grab html elements
const translateBtn = document.querySelector("button");
const textInput = document.getElementById("textInput");
const textOutput = document.querySelector(".morse__output__translation");

//reference array
let letterKeys = Object.keys(morseCode);
console.log(letterKeys)

//capture typed input
const word = [];



//how to translate from typed input to morse code



//run translation  on button click
const handleTranslate = translateBtn.addEventListener("click", (e) => {
  let input = textInput.value.toLowerCase();
  
  //validate input is valid - on click?
const validInput = () => {
  for(let i = 0; i < input.length; i++) {
    if(letterKeys.includes(input[i])){
      word.push(i);
    }else {
       textInput.value= "";
       document.querySelector(".morse__output__title").innerHTML = "Try Again!"
    }
  }
}
 validInput(); 



}
)



//display translation




//clear area/clear translation


