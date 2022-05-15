const emptyString = '  ';
const boardData = Array(9).fill(emptyString);
const players = {
  1: 'x',
  2: 'o',
};
let currentPlayer = players[1];

boardData[0] = 'x'
boardData[1] = '0'
boardData[2] = 'x'

if (boardData[0] === boardData[1, 2]) {
  console.log('ganhou')
}