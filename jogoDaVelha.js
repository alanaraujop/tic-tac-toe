const emptyString = ' ';
const boardData = Array(9).fill(emptyString)
const players = {1: 'x', 2: 'o'};
let currentPlayer = players[1];


function drewBoard(positions){
    console.log( `
    ${positions[0]} | ${positions[1]} | ${positions[2]}
    —————————
    ${positions[3]} | ${positions[4]} | ${positions[5]}
    —————————
    ${positions[6]} | ${positions[7]} | ${positions[8]}
    `)
}

function isEmpty(position){
    return boardData[position] === emptyString;
}

function changePlayer(){
    if(currentPlayer === players[1]){
        return currentPlayer = players[2]
    }
    else{
        return currentPlayer = players[1]
    }
}

function setPlayerMovement(position){
    if(isEmpty(position)){
    boardData[position] = changePlayer()
    }
    else{
        console.log(`A posição ${position} ja foi utilizada.`)
    }
    drewBoard(boardData)
}



setPlayerMovement(6)
setPlayerMovement(1)
setPlayerMovement(4)
setPlayerMovement(4)

drewBoard(boardData)


function showTutorial(){
    console.log(`
### Escolha a posição que deseja jogar baseado no tabuleiro abaixo.
    0 | 1 | 2
    —————————
    3 | 4 | 5
    —————————
    6 | 7 | 8

###############################################################
    `)
}