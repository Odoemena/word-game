const wordText= document.querySelector(".word");
const hintText= document.querySelector(".hint span");
const inputField= document.querySelector("input");
const timeText= document.querySelector(".time b");
const refreshButton= document.querySelector(".refresh-word");
const checkButton= document.querySelector(".check-word");

let correctWord,timer;
initTimer=maxTime=>{
  timer= setInterval(()=>{
    if (maxTime> 0) {
      maxTime--;
      return timeText.innerText=maxTime;
    }
    clearInterval(timer);
    alert(`Time Off! ${correctWord.toUpperCase()} is the correct word`);

  },1000)
}
const initGame=()=>{
  initTimer(30);
  let randomObj= words[Math.floor(Math.random() * words.length)];
  let wordArray= randomObj.word.split("");
  for (let i = wordArray.length -1; i > 0; i--) {
    let j= Math.floor(Math.random() * (i+ 1));
    let temp= wordArray[i];
    wordArray[i]= wordArray[j];
    wordArray[j]= temp;

    
  }
  wordText.innerText= wordArray.join("");
  hintText.innerText= randomObj.hint;
  correctWord= randomObj.word.toLowerCase();
  inputField.value="";
  inputField.setAttribute("maxlength",correctWord.length);
}
const checkWord=()=>{
  let userWord= inputField.value.toLocaleLowerCase();
  if(userWord!==correctWord) return alert(`Oops! ${userWord} is not a correct word`);
  alert(`Congrats! ${userWord} is the correct word`);
}
initGame();
refreshButton.addEventListener("click",initGame);
checkButton.addEventListener("click",checkWord);