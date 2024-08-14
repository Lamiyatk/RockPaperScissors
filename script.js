
let choice = prompt("your choice");
let result;
let HumanScore = 0;
let ComputerScore = 0;
function getComputerChoice(){
    const sign = ["rock","paper","scissors"];
    const randomindex = Math.floor(Math.random() * 3);
    return sign[randomindex];
}
console.log(getComputerChoice());
function getHumanChoice() {
    if (choice === "paper" || choice ==="rock"|| choice ==="scissors"){
        return choice;
 } else {
       return  "invalid";
 }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice ===computerChoice)
        result = "its a tie";

console.log('humanChoice:',humanChoice);
console.log('computerChoice:',computerChoice);

   switch (humanChoice) {
       case 'rock':
           if (computerChoice === 'scissors') {
               result = "You win! Rock beats Scissors";
           } else if (computerChoice === 'paper') {
               result= "You lose! Paper beats Rock";
           }
           break;
       case 'paper':
           if (computerChoice === 'rock') {
               result = "You win! Paper beats Rock";
           } else if (computerChoice === 'scissors') {
               result ="You lose! Scissors beat Paper";
           }
           break;
       case 'scissors':
           if (computerChoice === 'paper') {
               result= "You win! Scissors beat Paper";
           } else if (computerChoice === 'rock') {
               result =  "You lose! Rock beats Scissors";

           }
           break;
           default:
           result = "Invalid choice";
           
      }
      console.log('result:',result);
      return result;
    
   }

          const humanSelection = getHumanChoice();
          const computerSelection = getComputerChoice();

     console.log(playRound(humanSelection, computerSelection));


