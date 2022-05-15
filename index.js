var readlineSync = require('readline-sync');

const emptyString = '  ';
let boardData = Array(9).fill(emptyString);
const players = {
  1: 'x',
  2: 'o',
};

let victory = {
    1: 0,
    2: 0
}

let currentPlayer = selectSymbol(players);
showTutorial();
startGame();


function startGame(){
    const winner = hasWinner(boardData);
    if(winner === true){
        console.log(`O vencedor da partida foi: ${lastPlayer()} =)`);
        clearBoard();
        pointWinner();
        reGame();
    } else {
        if(isGameOver()){
            console.log(`Ninguém ganhou essa partida =( `)
            clearBoard();
            reGame();
        }
        else{
            setPlayerMovement();
            startGame();
        }
    }
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

function selectSymbol(players){
    const re = /[12]/
    console.log(`Escolha o jogador que iniciára a partida: `)
    console.log(`Digite 1 ou 2: `)
    let choicePlayer = parseInt(readlineSync.question(`-->`));
    if(re.test(choicePlayer)){
        return players[choicePlayer];
    } else {
        console.log(`Escolha um jogador válido!`)
        selectSymbol(players);
    }
}

function choicePosition(boardData){
    const re = /[012345678]/
    console.log(`Escolha a posição da jogada: `)
    const choicePlay = readlineSync.question(`--->`);

    if(re.test(choicePlay)){
        return choicePlay;
    } else{
        console.log(`Escolha uma posição válida entre 0-8: `);
        choicePosition();
    }
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

function setPlayerMovement(){
    console.log(`Vez do jogador ${currentPlayer}`)
    position = choicePosition();
    
    if (isEmpty(position)) {
        boardData[position] = currentPlayer;
        changePlayer();
      } else {
        console.log(`A posição ${position} já foi usada`);
        setPlayerMovement();
    }
    drawBoard(boardData);
}

function hasWinner(arr){
    for(let i = 0; i < arr.length; i = i +3){
        if(arr[i] !== emptyString){
            if(arr[i] === arr[i+1] && arr[i] === arr[i+2]){
                return true;
            }
        }
    }

    for (let i = 0; i < arr.length; i++){
        if(arr[i] !== emptyString){
            if(arr[i] === arr[i+3] && arr[i] === arr[i+6]){
                return true;
            }
        }
        
    }
    if(arr[0] !== emptyString){
        if(arr[0] === arr[4] && arr[0] === arr[8]){
            return true;
        }
    }

    if(arr[2] !== emptyString){
        if(arr[2] === arr[4] && arr[2] === arr[6]){
            return true;
        }
    }
    
    return false;    
}

function clearBoard(){
    boardData = Array(9).fill(emptyString);
}

function pointWinner(){
    const playerWin = lastPlayer();
    if(playerWin === players[1]){
        victory[1]++;
    } else {
        victory[2]++;
    }
}

function winner(){
    if(victory[1] > victory[2]){
        return console.log(`O vencedor foi "${players[1]}"`);
    } else if (victory[1] < victory[2]){
        return console.log(`O vencedor foi "${players[2]}"`);
    } else {
        return console.log(`O jogo empatou!`)
    }
}

function isGameOver(){
    let aux = [0];
    boardData.map((position)=>{
        if(position !== emptyString){
           aux.push(1); 
        }
    })

    const sum = aux.reduce((acc, curr)=>{
        acc += curr;
        return acc;
    })

    if(sum === 9){
        return true;
    }
    
    return false;
}

function reGame(){
    console.log(`Deseja reiniciar a partida? 'S' - sim ou 'N' - nao `);
    const awnser =  readlineSync.question(`-->`);

    if(awnser === 'S' || awnser === 's'){
        startGame();
    } else {
        winner();
    }
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

function lastPlayer(){
  let symbol;
    if(currentPlayer === players[1]){
        symbol = players[2];
    } else {
        symbol = players[1];
    }

    return symbol;
};