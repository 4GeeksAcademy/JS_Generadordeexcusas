import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
  
  let randomwho = who[Math.floor(Math.random() * who.length)]
  let randomAction = action[Math.floor(Math.random()* action.length)];
  let randomWhat = what[Math.floor(Math.random()* what.length) ];
  let randomwhen = when[Math.floor(Math.random()* when.length) ];
  let excusa = randomwho + randomAction + randomWhat + randomwhen
  
  document.getElementById ("excusa").textContent = excusa;
};

