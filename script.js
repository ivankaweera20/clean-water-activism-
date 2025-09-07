/* .js files add interaction to your website */

// Code for the sample template on the donate page //
var displaySample = document.getElementById("sampleText");
var sampleButton = document.getElementById("sampleButton");

if (sampleButton) {
  sampleButton.addEventListener("click", generateSample);
}

// The function that makes the template possible //
function generateSample() {
  var organization = document.getElementById("organization").value;
  var name = document.getElementById("name").value;
  var solution = document.getElementById("solution").value;

  displaySample.innerHTML = "Hi " + organization + " team. My name is " + name + " and I am writing this to inform you of a possible solution to make clean water accessible to all. My solution is " + solution + ". Please reach out to me as soon as possible, I look forward to hearing from you."
}