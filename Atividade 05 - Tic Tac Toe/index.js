const readlineSync = require('readline-sync');
const emptyString = '  ';
let boardData = Array(9).fill(emptyString);
const players = {
  1: 'X',
  2: 'O',
};
const scoreboard = {
  "X": 0,
  "O": 0
}
const winningCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
let currentPlayer = players[1];
let currentPlayPosition;
let choose = "";
let firstPlayer;

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
  } else {
    console.log(`A posição ${position} já foi usada`);
  }
}

function winnerCheck(winningCombinations, boardData) {
  let filledPositions = 0;

  for(array of winningCombinations) {
    for(position of array) {
      if(boardData[position] === currentPlayer) {
        filledPositions++;
      }else{
        filledPositions = 0;
        break;
      }

      if(filledPositions === 3){
        return true;
      }
    }
  }

  return false;
} 

function isDraw(boardData) {
  if(boardData.includes(emptyString)){
    return false;
  }

  return true;
}

function cleanBoard() {
  boardData = Array(9).fill(emptyString);
}

function countScore(currentPlayer) {
  scoreboard[currentPlayer]++;
}

function showScore() {
  console.log(`#####Placar#####
  X: ${scoreboard['X']} pontos
  O: ${scoreboard['O']} pontos
################`);
}

function showWinner() {
  if(scoreboard["X"] > scoreboard["O"]){
    console.log("O jogador X é o vencedor!");
  }else if(scoreboard["X"] < scoreboard["O"]){
    console.log("O jogador O é o vencedor!");
  }else{
    console.log("Empatou! :/");
  }
}

function round() {
  cleanBoard(boardData);

  firstPlayer = readlineSync.question("Quem vai começar jogando? 1 para O ou 2 para X: ");
  currentPlayer = players[firstPlayer];

  while(!winnerCheck(winningCombinations, boardData) && !isDraw(boardData)) {
    changePlayer();

    currentPlayPosition = readlineSync.question(`Digite a posicao (Vez de ${currentPlayer}):`);
    setPlayerMovement(currentPlayPosition);

    drawBoard(boardData);
  }

  if(isDraw(boardData) && !winnerCheck(winningCombinations, boardData)){
    console.log("Deu velha!");
  }else{
    countScore(currentPlayer);
    console.log(currentPlayer + " venceu!");
  }

  showScore();
}

showTutorial();

do{
  round();

  choose = readlineSync.question("Deseja continuar jogando? (y/n): ");
}while(choose.toLowerCase() === "y");

showWinner();




