const prompt = require('prompt-sync')()

const emptyString = ' ';
const boardData = Array(9).fill(emptyString)

const playerOne = prompt('Nome do jogador 1: ')
const playerTwo = prompt('Nome do jogador 2: ')

const players = {1: 'x', 2: 'o'};
let currentPlayer = players[1];
let currentNamePlayer = playerOne
let ganhador = ''

function drewBoard(positions){
    console.log( `
    ${positions[0]} | ${positions[1]} | ${positions[2]}
    —————————
    ${positions[3]} | ${positions[4]} | ${positions[5]}
    —————————
    ${positions[6]} | ${positions[7]} | ${positions[8]}
    `)
}

function changePlayer(){
    if(currentPlayer === players[1]){
        return currentPlayer = players[2]
    }
    else{
        return currentPlayer = players[1]
    }
}

function changePlayerName(){
    if(currentNamePlayer === playerOne){
        return currentNamePlayer = playerTwo
    }
    else{
        return currentNamePlayer = playerOne
    }
}

function setPlayerMovement(position){
    if(isEmpty(position)){
    boardData[position] = currentPlayer
    drewBoard(boardData)
    isWinner(boardData)
    isOldLady(boardData)
    changePlayerName()
    changePlayer()
    }
    else{
        if (position >= 0 && position < 9){
            console.log(`A posição ${position} ja foi utilizada.`)
        }
        else{
            console.log('A posição que você digitou é inválida.')
        }
    }
}

function isWinner(boardData){
    jogadas = boardData
    for (p = 0; p <9; p++) {
        jogadas.push(p)
    }
    if(
    (jogadas[0] === jogadas[1] && jogadas[1] == jogadas[2] && jogadas[2] != ' ') ||
    (jogadas[3] === jogadas[4] && jogadas[4] == jogadas[5] && jogadas[5] != ' ') ||
    (jogadas[6] === jogadas[7] && jogadas[7] == jogadas[8] && jogadas[8] != ' ') ||
    (jogadas[0] === jogadas[3] && jogadas[3] == jogadas[6] && jogadas[6] != ' ') ||
    (jogadas[1] === jogadas[4] && jogadas[4] == jogadas[7] && jogadas[7] != ' ') ||
    (jogadas[2] === jogadas[5] && jogadas[5] == jogadas[8] && jogadas[8] != ' ') ||
    (jogadas[0] === jogadas[4] && jogadas[4] == jogadas[8] && jogadas[8] != ' ') ||
    (jogadas[2] === jogadas[4] && jogadas[4] == jogadas[6] && jogadas[6] != ' ')
    ){
        console.log(`O vencedor é o jogador: ${currentNamePlayer}`)
        return true
    }
    else{
        return false
    }
}

function isEmpty(position){
    return boardData[position] === emptyString;
}

function isOldLady(boardData){
    if (boardData.includes(' ')){
        return false
    }
    else{
        return console.log('DEU VELHA')
    }
}

function showTutorial(){
    console.log(`
### Escolha a posição que deseja jogar baseado no tabuleiro abaixo.
    0o | 1o | 2x
    —————————
    3x | 4x | 5o
    —————————
    6o | 7x | 8o

###############################################################
    `)
}

function isFinished(){
    return boardData.includes(' ') ? false : true;
}

function continuarJogo(){
    while(true){
        continuar = prompt('Deseja jogar outra partida? [s / n]: ')
        if (continuar === 's' || continuar === 'n'){break} 
    }
    if (continuar === 's'){
        return jogoDaVelha()
    }
    else{
        return false
    }
}


