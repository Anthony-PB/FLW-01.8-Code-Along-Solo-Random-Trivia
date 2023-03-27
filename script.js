let answer1 = document.querySelector(".answer1");
let answer2 = document.querySelector(".answer2");
let submitLevel1 = document.querySelector(".submitLevel1");
let resultLevel1 = document.querySelector(".resultLevel1");

let answer3 = document.querySelector(".answer3");
let answer4 = document.querySelector(".answer4");
let submitLevel2 = document.querySelector(".submitLevel2");
let resultLevel2 = document.querySelector(".resultLevel2");


submitLevel1.onclick = function() {
  let userInput1 = answer1.value.toUpperCase().trim();
  let userInput2 = answer2.value.toUpperCase().trim();

  // task 1: if either question 1 OR question 2 are answered correctly, have "You win!" print in the div with a class of "resultLevel1"
  if (userInput1 === "KONNICHIWA" && userInput2 === "BRAZIL") {
    resultLevel1.innerHTML = "You Win!"

  }
  // task 2: if both questions are answered incorrectly, print "Try Again!" to that same div.
  if (!(userInput1 === "KONNICHIWA" && userInput2 === "BRAZIL")) {
    resultLevel1.innerHTML = "Try Again!"

  }



};



submitLevel2.onclick = function() {
  let userInput3 = answer3.value.toLowerCase().trim();
  let userInput4 = answer4.value.toLowerCase().trim();
  
  // task 3:  if the user answers question 3 AND question 4 correctly, print "You win!" in the div with a class of "resultLevel2". Make sure to declare new variables to save the user's inputs.
  if (userInput3 === "google" && userInput4 === "purple") {
    resultLevel2.innerHTML = "You Win!"

  }
  // task 4: print "Try again!" to the same div if one or both of the answers are incorrect.
  if (!(userInput3 === "google" && userInput4 === "purple")) {
    resultLevel2.innerHTML = "Try Again!"

  }



};