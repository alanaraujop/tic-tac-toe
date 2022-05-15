const emptyString = '  ';
const boardData = Array(9).fill(emptyString);
const players = {
  1: 'x',
  2: 'o'
};
const winningOptions = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]
];
let currentPlayer = players[1];
const winningMessage = `Vitória do jogador ${currentPlayer}!`;
const tieMessage = `DEU VELHA!`;
let countTurns = 0;

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

     0 | 1 | 2
    -----------
     3 | 4 | 5
    -----------
     6 | 7 | 8

  ######################################################################
  `);
}

function isEmpty(position) {
  return boardData[position] === emptyString;
}

function changePlayer() {
  if (currentPlayer === players[1]) {
    currentPlayer = players[2];
  } else {
    currentPlayer = players[1];
  }
}

function checkWinner() {
  let playerWon = false;
  for (let i = 0; i < 8; i++) {
    const winOption = winningOptions[i];
    let a = boardData[winOption[0]];
    let b = boardData[winOption[1]];
    let c = boardData[winOption[2]];
    if (a === emptyString || b === emptyString || c === emptyString) {
      continue;
    }
    if (a === b && b === c) {
      playerWon = true;
      break;
    }
  }
  return playerWon;
}

function setPlayerMovement(position) {
  if (isEmpty(position)) {
    boardData[position] = currentPlayer;
    countTurns++;
    drawBoard(boardData);
    if (checkWinner()) {
      console.log(winningMessage);
      clearBoard();
    } else if (countTurns > 8) {
      console.log(tieMessage);
      clearBoard();
    }

    changePlayer();
  } else {
    console.log(`A posição ${position} já foi usada`);
  }
}
function clearBoard() {
  for (let i = 0; i < 9; i++) {
    boardData[i] = emptyString;
  }
  countTurns = 0;
}
// showTutorial();
setPlayerMovement(0);
setPlayerMovement(3);
setPlayerMovement(2);
setPlayerMovement(1);
setPlayerMovement(6);
setPlayerMovement(4);
setPlayerMovement(7);
setPlayerMovement(8);
setPlayerMovement(5);
setPlayerMovement(0);
