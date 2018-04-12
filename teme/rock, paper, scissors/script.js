var choices = function() {
  usersChoice = prompt("rock, paper or scissors?");
  computersChoice = Math.random();
   if (computersChoice <= 0.34) {
     computersChoice = "rock";}
   else if (computersChoice <= 0.67) {
     computersChoice = "paper";}
   else {
     computersChoice = "scissors";}
    console.log("User: " + usersChoice);
    console.log("Computer: " + computersChoice);}
choices();
  