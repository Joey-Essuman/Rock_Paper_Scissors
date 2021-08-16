const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      console.log('ERROR. Please make sure your input is correct.Double-check spelling.')
    };
  };
  //console.log(getUserChoice('scissors'))
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
      return 'rock';
      break;
      case 1:
      return 'paper';
      break;
      case 3:
      return 'scissors';
      break;
      default:
      return 'oops';
      break
    };
    
  }
  //console.log(getComputerChoice());
  
  const determineWinner = (userChoice, computerChoice) => {
     if (userChoice === 'bomb') {
       if(computerChoice === 'rock' || computerChoice === 'paper' || computerChoice === 'scissors') {
         return 'You won!'
       }
     }
     if (userChoice === computerChoice) {
       return 'This game is a tie!';
     };
     if (userChoice === 'rock') {
       if (computerChoice === 'paper') {
         return 'Computer won!'
       } else {
         return 'You won!'
       };
     }; 
     if (userChoice === 'paper') {
       if (computerChoice === 'scissors') {
         return 'Computer won!'
       } else {
         return 'You won!'
       };
     } ;
  
     if (userChoice === 'scissors') {
       if (computerChoice === 'rock') {
         return 'Computer won!'
       } else {
         return 'You won!'
       };
     } ;
  
  
  };
  //console.log(determineWinner('paper', 'rock'));
  
  const playGame = () => {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('Computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame();