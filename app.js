console.log("hello word");

let humanScore = 0;
let computerScore = 0;
 
function getComputerChoice(robot) {
  const choix = Math.floor(Math.random()* 3 + 1) ;
  console.log(choix);


  if (choix === 1) {
    return "papier"
  }
  else if (choix === 2){
    return "pierre"
  }
  else if (choix === 3){
    return "ciseaux"
  }
  return choix;
   
}
 
function getHumanChoice(valeur) {
    const joueur = prompt("Faites votre choix Pierre, Papier, ou Ciseaux");



// if (joueur != "papier" || joueur != "pierre" || joueur != "ciseaux") {
//     alert ( "Veuillez entrer un choix valide !");

// }

return joueur;
    
};

let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
function playRound(humanChoice, computerChoice) {
    humanSelection = getHumanChoice();
computerSelection = getComputerChoice();
    if (humanSelection === computerSelection) {
        
        alert (`Egalite VOUS :${humanScore}/ IA :${computerScore}`);
    }
    else if (humanSelection === "ciseaux" && computerSelection === "papier" || humanSelection === "papier" && computerSelection === "pierre" || humanSelection === "pierre" && computerSelection === "ciseaux"  ){
        humanScore++;
        alert (`Vous avez gagner ${humanSelection} bat ${computerSelection} VOUS :${humanScore}/ IA :${computerScore}`)
    }
    else if (humanSelection === "papier" && computerSelection === "ciseaux" || humanSelection === "pierre" && computerSelection === "Papier" || humanSelection === "ciseaux" && computerSelection === "pierre" ){
        computerScore++;
        alert (`Vous avez perdu ${computerSelection} bat ${humanSelection} VOUS :${humanScore}/ IA :${computerScore}`)
    }
     return ;
}playRound();
// console.log(playRound());
// console.log(humanScore);
// console.log(computerScore);

function playGame(params) {
    
 let round = 0;
   let continu = 5;
    let score = humanScore + computerScore;
   while ( round <= continu) {
   playRound(getHumanChoice(), getComputerChoice());
round++
 
  
      humanSelection = getHumanChoice();
computerSelection = getComputerChoice();

    return score;
    
   }

 } playGame()
