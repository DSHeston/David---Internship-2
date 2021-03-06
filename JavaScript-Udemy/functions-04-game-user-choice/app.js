const startGameBtn = document.getElementById('start-game-btn'); 

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';


const getPlayerChoice = () => {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
  if (
    selection !== ROCK &&
    selection !== PAPER &&
    selection !== SCISSORS
  ) {console.log('invalid input- your options are Rock, Paper or Scissors. Random selection was made')
    const randomValue2 = Math.random();
    if (randomValue2 < 0.34){
    return ROCK;
  } else if (randomValue2 < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
}

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) => {
  if (cChoice === pChoice) {
    return RESULT_DRAW;
  }else if (
    cChoice === ROCK && pChoice === PAPER || 
    cChoice === PAPER && pChoice === SCISSORS || 
    cChoice === SCISSORS && pChoice === ROCK) {
      return RESULT_PLAYER_WINS;
    } else {
      return RESULT_COMPUTER_WINS;
    }
}

startGameBtn.addEventListener('click', function() {
  console.log('Game is starting...');
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const winner = getWinner(computerChoice, playerChoice);
  let message = `you picked ${playerChoice} the computer chose ${computerChoice} therefore you `
  if (winner === RESULT_DRAW) {
    message = message + 'had a draw'
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message + 'won'
  } else {
    message = message + 'lost'
  }
  console.log(message);
});


// not related to the game

const sumUp = (resultHandler, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };

  let sum = 0;
  for (const num of numbers) {
    sum += validateNumber(num);
  }
  resultHandler(sum);
} 

