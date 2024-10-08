    let computerScore = parseInt(0); //computer starting score
    let playerScore = parseInt(0); //player starting score
  
    //play one round

    function playRound () {
      //Computer choice of rock/paper/scissors

      let computerChoice; //declaring computer choice variable

      function getComputerChoice() {
            let randomNumber = Math.floor(Math.random()*3); //randomly choosing 0-1; multiplying by 300 to make the three ranges easier to ascertain
            //console.log(randomNumber);
            if (randomNumber<(1)) {
              computerChoice = "rock";
            } else if (randomNumber>=(1)&&randomNumber<(2)) {
              computerChoice = "paper";
            } else {
              computerChoice = "scissors";
            }
      }
      getComputerChoice();

      //Player input of choice

      let playerChoice; //declaring player choice variable

      function getPlayerChoice() {
        let playerValidChoice; //declaring player choice validity check
        playerChoice = prompt("Type either 'Rock', 'Paper', or 'Scissors'.");
        playerChoice = playerChoice.toLowerCase();
        //need to validate choice - maybe a while loop
        if (playerChoice === "rock"||playerChoice === "paper"||playerChoice === "scissors") {
          playerValidChoice = "true";
        } else {
          playerValidChoice = "false";
        }
        while (playerValidChoice==="false") {
          playerChoice = prompt("Invalid choice - try again. Type either 'Rock', 'Paper', or 'Scissors'.");
          playerChoice = playerChoice.toLowerCase();
          if (playerChoice === "rock"||playerChoice === "paper"||playerChoice === "scissors") {
            playerValidChoice = "true";
            break;
          } else {
            //nothing needed here - will repeat the loop
          } 
        }
        console.log(playerValidChoice);
      }

      getPlayerChoice();
      console.log("Player: " + playerChoice);
      console.log("Computer: " + computerChoice);


      //Logic for determining the winner

      let result; //who wins the round
      let roundResult; //how the round is won

      if (computerChoice==="rock") {
        if (playerChoice==="scissors") { //rock beats scissors
          result = "cpu"; //computer wins
          roundResult = "rbs"; //rock beats scissors
        } else if (playerChoice==="paper") { //paper beats rock
          result = "player"; //player wins
          roundResult = "pbr"; //paper beats rock
        } else {
          result = "tie"; //tie
        }
      } else if (computerChoice==="paper") {
        if (playerChoice==="rock") { //paper beats rock
          result = "cpu"; //computer wins
          roundResult = "pbr"; //paper beats rock
        } else if (playerChoice==="scissors") { //scissors beats paper
          result = "player"; //player wins
          roundResult = "sbp"; //scissors beats paper
        } else {
          result = "tie"; //tie
        }
      } else {
        if (playerChoice==="paper") { //scissors beats paper
          result = "cpu"; //computer wins
          roundResult = "sbp"; //scissors beats paper
        } else if (playerChoice==="rock") { //rock beats scissors
          result = "player"; //player wins
          roundResult = "rbs"; //rock beats scissors
        } else {
          result = "tie"; //tie
        }      
      }

      console.log(result);
      if (result==="cpu") {

      }

      //result message
      let message; //declaring the message variable

      if (result==="cpu" && roundResult==="rbs") { //Computer victory message
        message = "Rock beats scissors: The computer wins.";
      } else if (result==="player" && roundResult==="rbs") { //player victory message
        message = "Rock beats scissors:You win!";
      } else if (result==="cpu" && roundResult==="pbr") { //Computer victory message
        message = "Paper beats rock: The computer wins.";
      } else if (result==="player" && roundResult==="pbr") { //player victory message
        message = "Paper beats rock: You win!";
      } else if (result==="cpu" && roundResult==="sbp") { //Computer victory message
        message = "Scissors beats paper: The computer wins.";
      } else if (result==="player" && roundResult==="sbp") { //player victory message
        message = "Scissors beats paper: You win!";
      } else { //tie message
        message = "Nobody wins.";
      }

      console.log(message);

      //scoring mechanism
      if (result==="cpu") {
        computerScore++; //add 1 to computer score
      } else if (result==="player") {
        playerScore++; //add 1 to player score
      } else {
        // nothing happens
      }

      console.log("Computer: "+ computerScore);
      console.log("Player: " + playerScore);

    }

    let i=0;

    function playGame() {
      console.log("Game Started")
      for (i=0; i<5; i++) {
        console.log("Round " + parseInt(i+1));
        playRound();
      }
    }

    playGame();

    //end game message of winer
    function gameEnd() {
      if (playerScore>computerScore) { //player has higher score
        console.log("Final Result: You win the game!");
      } else if (computerScore>playerScore) { //computer has higher score
        console.log("Final Result: The computer wins the game.");
      } else { // Tie
        console.log("Final Result: It was a tie.");
      }
    } 

    gameEnd();