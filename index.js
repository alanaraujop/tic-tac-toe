// First step - Draw board in terminal 
const emptyString = '  ';
const boardData = Array(9).fill(emptyString);
const players = {
    1: 'X',
    2: 'O',
};
let currentPlayer = players[1]

function drawBoard(positions) {
    console.log(`
  ${positions[0]} | ${positions[1]} | ${positions[2]}
  -----------
  ${positions[3]} | ${positions[4]} | ${positions[5]}
  -----------
  ${positions[6]} | ${positions[7]} | ${positions[8]}
`);
}

function checkWinner() {
    winningCombinations.forEach((valores) => {
        const [a, b, c] = valores

        const isWinner = boardData[a] !== emptyString &&
            boardData[a] === boardData[b] &&
            boardData[b] === boardData[c]

        if (isWinner) {
            console.log(`O jogador ${currentPlayer} é o vencedor da partida.`)
            drawBoard(boardData)
            process.exit()
        }
    })
}

function checkTieGame() {
    const isDraw = boardData.every((valor) => valor !== emptyString)

    if (isDraw) {
        console.log(`Deu velha!`)
        drawBoard(boardData)
        process.exit()
    }
}

function changePlayer() {
    if (currentPlayer === players[1]) {
        currentPlayer = players[2];
    } else {
        currentPlayer = players[1];
    }
}

function isEmpty(position) {
    return boardData[position] === emptyString;
}

function setPlayerMovement(position) {

    if (isEmpty(position)) {
        boardData[position] = currentPlayer;
        checkWinner()
        checkTieGame()
        changePlayer();
    } else {
        console.log(`A posição ${position} já foi usada`);
    }
}

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

// Players movements 
setPlayerMovement(0)
setPlayerMovement(1)
setPlayerMovement(4)
setPlayerMovement(3)
setPlayerMovement(7)
setPlayerMovement(5)
setPlayerMovement(6)
setPlayerMovement(2)
setPlayerMovement(8)