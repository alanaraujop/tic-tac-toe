const emptyString = '  ';
const boardData = Array(9).fill(emptyString);
const players = {
  1: 'x',
  2: 'o',
};
let currentPlayer = players[1];


const winnerConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function checkTieGame() {
    const isDraw = boardData.every((item) => item !== emptyString);
  
    if (isDraw) {
      drawBoard(boardData);
      console.log(`DEU VELHA!`);
      process.exit();
    }
  }
  
  function checkWinner() {
    winnerConditions.forEach((winCondition) => {
      const [a, b, c] = winCondition;
      const data = boardData;
  
      if (data[a] !== emptyString && data[a] === data[b] && data[a] === data[c]) {
        drawBoard(boardData);
        console.log(`O VENCEDOR É "${currentPlayer}", PARABÉNS!`);
        process.exit();
      }
    });
  }
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

function setPlayerMovement(position) {
  if (isEmpty(position)) {
    boardData[position] = currentPlayer;

    checkWinner();
    changePlayer();
  } else {
    console.log(`A posição ${position} já foi usada`);
  }
}

// showTutorial();
setPlayerMovement(8);
setPlayerMovement(5);
setPlayerMovement(3);
setPlayerMovement(1);
setPlayerMovement(0);
setPlayerMovement(7);
setPlayerMovement(4);
setPlayerMovement(2);
setPlayerMovement(6);

drawBoard(boardData);
