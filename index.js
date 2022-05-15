var readlineSync = require('readline-sync');

let playerOne = readlineSync.question('What symbol do you wanna play with? [Player 1]: ');
let playerTwo = readlineSync.question('What symbol do you wanna play with? [Player 2]: ');

const dataScore = [
  {number: 1, score: 0},
  {number: 2, score: 0}
];

const emptyString = '  ';
const boardData = Array(9).fill(emptyString);
const players = {
  1: playerOne,
  2: playerTwo,
};
let currentPlayer = players[1];
let playerNumber = 1;

let winner = false;

function drawBoard(positions) {
  console.log(`
    ${positions[0]} | ${positions[1]} | ${positions[2]}
    -----------
    ${positions[3]} | ${positions[4]} | ${positions[5]}
    -----------
    ${positions[6]} | ${positions[7]} | ${positions[8]}
  `);
}

function showTutorial() {
  console.log(`
  ### Escolha a posiçao que deseja jogar baseado no tabuleiro abaixo ###

     1 | 2 | 3
    -----------
     4 | 5 | 6
    -----------
     7 | 8 | 9

  ######################################################################
  `);
}

function isEmpty(position) {
  return boardData[position] === emptyString;
}

function countScore() {
  dataScore.forEach(playerScore => {
    if (playerScore.number == playerNumber) {
      playerScore.score++;
    };
  });
}

function restart() {
  showTutorial();
  boardData.fill(emptyString);
  winner = false;
  gameDefine();
}

function changePlayer() {
  if (currentPlayer === players[1]) {
    currentPlayer = players[2];
  } else {
    currentPlayer = players[1];
  }
  playerNumber = currentPlayer === 'x' ? '1' : '2';
}

function verifyWinner() {
  const winPatterns = [
    boardData[0] === boardData[1] && boardData[0] === boardData[2] && boardData[0] != emptyString,
    boardData[3] === boardData[4] && boardData[3] === boardData[5] && boardData[3] != emptyString,
    boardData[6] === boardData[7] && boardData[6] === boardData[8] && boardData[6] != emptyString,
    boardData[0] === boardData[4] && boardData[0] === boardData[8] && boardData[0] != emptyString,
    boardData[2] === boardData[4] && boardData[2] === boardData[6] && boardData[2] != emptyString,
    boardData[0] === boardData[3] && boardData[0] === boardData[6] && boardData[0] != emptyString,
    boardData[1] === boardData[4] && boardData[1] === boardData[7] && boardData[1] != emptyString,
    boardData[2] === boardData[5] && boardData[2] === boardData[8] && boardData[2] != emptyString,
  ];

  winPatterns.forEach(pattern => {
    if (pattern === true) {
      console.log(`The player ${playerNumber} win`);
      countScore();
      winner = true;
    };
  });
}

function verifyTie() {
  let numberOfPositions = 9;
  let countPositionsOccupped = 0;

  for (let i = 0; i < numberOfPositions; i++) {
    if (boardData[i] != emptyString) {
      countPositionsOccupped++;
    };
  };

  if (countPositionsOccupped == numberOfPositions) {
    if (winner === false) {
      console.log("It's a tie");
    };
    return "over";
  };
}

function setPlayerMovement(position) {
  if (isEmpty(position)) {
    boardData[position] = currentPlayer;
    verifyWinner();
    changePlayer();
  } else {
    console.log(`The position ${position} has already been used`);
  }
}

function gameDefine() {
  while (winner === false) {
    let playerMovement = readlineSync.keyInSelect(boardData, "What's your movement? ");
    
    if(playerMovement == -1) {
      break;
    };
    
    setPlayerMovement(playerMovement);
    drawBoard(boardData);

    if (verifyTie() === 'over') {
      break;
    };
  };

  console.log(dataScore)
  let newGame = readlineSync.question('Do you wanna play a new game?[y/n] ');
  if (newGame === 'y') {
    restart();
  };
}

showTutorial();
gameDefine();

