//create morse code object
const morseCode = {
  a: " ·- ",
  b: " -··· ",
  c: " -·-· ",
  d: " -·· ",
  e: " · ",
  f: " ··-· ",
  g: " --· ",
  h: " ···· ",
  i: " ·· ",
  j: " ·--- ",
  k: " -·- ",
  l: " ·-·· ",
  m: " -- ",
  n: " -· ",
  o: " --- ",
  p: " ·--· ",
  q: "--.- ",
  r: " ·-· ",
  s: " ··· ",
  t: " - ",
  u: " ··- ",
  v: " ···- ",
  w: " ·-- ",
  x: " -··- ",
  y: " -·-- ",
  z: " --·· ",
  " ": " //  "
}

//grab html elements
const translateBtn = document.querySelector("button");
const textInput = document.getElementById("textInput");
const textOutput = document.querySelector(".morse__output__translation");
const title = document.querySelector(".morse__output__title");

//reference array for the morse code
let letterKeys = Object.keys(morseCode);


//capture typed input
const words = [];



//run translation  on button click
const handleTranslate = translateBtn.addEventListener("click", (e) => {
  let input = textInput.value.toLowerCase();
  

  
  //validate input is valid - if yes push letter to array, if not message to try again
    const validInput = () => {

 
   const regex = /[^\w\s]/g
   if(input.search(regex) != -1) {
    title.innerHTML = "That word wasn't recognised, please try again!"
   } else {
      for(let i = 0; i < input.length; i++) {
        let letter = input[i];
        words.push(letter);
      }  
   }
   }
    
  // for(let i = 0; i < input.length; i++) {
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
const translatePhrase = () => {
  let translationArr = []
  words.forEach((word) => {
  translationArr.push(morseCode[word]);
  title.innerHTML = "Your phrase is:"
  textOutput.innerHTML = translationArr.join(" ");
  
    }
  
  )}
  
const clear = () => {
  textInput.value= null;
  words.length = 0;

}



  
  validInput(); 
  translatePhrase();
  clear();

  
})


//clear area/clear translation
textInput.onfocus = () => {
  document.querySelector(".morse__output__title").innerHTML = "";
  textOutput.innerHTML = "";
  
}










