
'use strict';

var name = prompt("Please enter your name:");

var gender = prompt("Please enter your gender (male or female):");

var age = parseInt(prompt("Please enter your age:"));

if (age <= 0) {
  alert("Invalid age. Age must be greater than zero.");
}

var skipMessage = confirm("Do you want to skip the welcoming message?");

var answers = [];

function askQuestion(question) {
  var answer = prompt(question);
  if (answer === "") {
    answer = "invalid";
  }
  answers.push(answer);
}

askQuestion("Do you like Cooking? (Yes/No)");
askQuestion("Have you traveled abroad? (Yes/No)");
askQuestion("Do you enjoy runing? (Yes/No)");

function printAnswers() {
  console.log("User's Answers:");
  for (var i = 0; i < answers.length; i++) {
    console.log(answers[i]);
  }
}

printAnswers();

function getTitle(gender) {
  if (gender.toLowerCase() === "male") {
    return "Mr";
  } else if (gender.toLowerCase() === "female") {
    return "Ms";
  } else {
    return "";
  }
}

function displayWelcomeMessage(name, gender, skipMessage) {
  var title = getTitle(gender);

  if (!skipMessage) {
    if (title !== "") {
      alert("Welcome, " + title + " " + name + "!");
    } else {
      alert("Welcome, " + name + "!");
    }
  }
}

displayWelcomeMessage(name, gender, skipMessage);
