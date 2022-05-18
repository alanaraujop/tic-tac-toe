//Variável criada para fazer requisições aos usuários
const prompt = require('prompt-sync')()

//Variáveis criadas para construir o tabuleiro
const emptyString = ' ';
const boardData = Array(9).fill(emptyString)

//Variáveis criadas para estabelecer os jogadores
const playerOne = prompt('Nome do jogador 1: ')
const playerTwo = prompt('Nome do jogador 2: ')
const players = { 1: 'x', 2: 'o' };
let currentPlayer = players[1];
let currentNamePlayer = playerOne

//Variáveis criadas para estabelecer um placar
let logPlayerOne = { nome: playerOne, score: 0 }
let logPlayerTwo = { nome: playerTwo, score: 0 }


//Desenha o tabuleiro e um mapa para auxiliar nas jogadas
function drewBoard(positions) {
    console.log(`                          Mapa do tabuleiro
    ${positions[0]} | ${positions[1]} | ${positions[2]}                 0 | 1 | 2
    —————————                 —————————
    ${positions[3]} | ${positions[4]} | ${positions[5]}                 3 | 4 | 5 
    —————————                 —————————
    ${positions[6]} | ${positions[7]} | ${positions[8]}                 6 | 7 | 8
    `)
}

//Faz a mudança automatica dos jogadores após efetuar uma jogada
function changePlayer() {
    currentPlayer === players[1] ? currentPlayer = players[2] : currentPlayer = players[1]
}

//Faz a mudança do NOME dos jogadores após efetuar uma jogada
function changePlayerName() {
    currentNamePlayer === playerOne ? currentNamePlayer = playerTwo : currentNamePlayer = playerOne
}

//Função que executa a jogada no tabuleiro, verifica se há um vencedor ou se deu velha
//É responsável por executar a função de trocar o nome e o jogador após efeturar uma jogada
function setPlayerMovement(position) {
    if (isEmpty(position)) {
        boardData[position] = currentPlayer
        isWinner(boardData)
        isOldLady(boardData)
        changePlayerName()
        changePlayer()
    }
    else {
        console.log(`A posição ${position} é inválida ou ja foi utilizada`)
    }
}

//Verifica se há um vencedor baseado nas possiveis combinações de vitória
function isWinner(boardData) {
    if (
        (boardData[0] === boardData[1] && boardData[1] === boardData[2] && boardData[2] != ' ') ||
        (boardData[3] === boardData[4] && boardData[4] === boardData[5] && boardData[5] != ' ') ||
        (boardData[6] === boardData[7] && boardData[7] === boardData[8] && boardData[8] != ' ') ||
        (boardData[0] === boardData[3] && boardData[3] === boardData[6] && boardData[6] != ' ') ||
        (boardData[1] === boardData[4] && boardData[4] === boardData[7] && boardData[7] != ' ') ||
        (boardData[2] === boardData[5] && boardData[5] === boardData[8] && boardData[8] != ' ') ||
        (boardData[0] === boardData[4] && boardData[4] === boardData[8] && boardData[8] != ' ') ||
        (boardData[2] === boardData[4] && boardData[4] === boardData[6] && boardData[6] != ' ')
    ) {
        return true
    }
    else {
        return false
    }
}

//Verifica se a posição escolhida pelo jogador está vazia ou foi preenchida
function isEmpty(position) {
    return boardData[position] === emptyString;
}

//Verifica se deu velha
function isOldLady(boardData) {
    return !boardData.includes(emptyString)
}

//Reinicia o tabuleiro após o fim de uma rodada
function restartBoard(boardData) {
    for (p = 0; p < 9; p++) {
        boardData[p] = emptyString
    }
    return boardData
}

//Mostra o placar atual
function showScore() {
    console.log(`
[ ${playerOne} ] =>   ${logPlayerOne.score}  
[ ${playerTwo} ] =>   ${logPlayerTwo.score} 
    `)
}

//Marca os pontos no placar de acordo com o jogador que executou a ultima jogada
//Marca pontos iguais caso o resultado seja 'DEU VELHA'
function scoreGame() {
    if (isWinner(boardData) === true) {
        currentNamePlayer === playerOne ? logPlayerOne.score += 3 : logPlayerTwo.score += 3
    }
    else {
        logPlayerOne.score += 1
        logPlayerTwo.score += 1
    }
    showScore()
}

//Função que encerra o jogo
function endGame() {
    console.log(`_______________________________________

PLACAR FINAL:`)
    showScore()
    console.log(`FIM DE JOGO
_______________________________________`)
}

//Função que verifica se os jogadores querem continuar a jogar
function continueGame() {
    let optionContinue = prompt('Deseja jogar outra partida: [s / n]-> ')
    while (optionContinue != 's' && optionContinue != 'n') {
        optionContinue = prompt("Entrada inválida, digite apenas 's' ou 'n': ")
    }
    optionContinue === 's' ? ticTacToe() : endGame()
}


//Executa todas as funções criadas
//Cria um loop que enquanto não houver vencedor e não "DEU VELHA", continuará pedindo jogadas
//Quando uma das condições é satisfeita, temos um resultado para um vencedor e outro para empate
//Ao final, é perguntado se os jogadores desejam jogar novamente com um leve tratamento de erro nas possiveis respostas
//Caso os jogadores não desejem mais jogar, o placar final é impresso e o programa é finalizado.
function ticTacToe() {
    restartBoard(boardData)
    while (isWinner(boardData) === false && isOldLady(boardData) === false) {
        drewBoard(boardData)
        setPlayerMovement(prompt(`Jogador [ ${currentNamePlayer} ] faça sua jogada --> `))
    }
    if (isWinner(boardData) === true) {
        drewBoard(boardData)
        changePlayerName()
        console.log(`O vencedor é: ${currentNamePlayer}`)
        scoreGame()
    }
    else {
        console.log('____DEU VELHA____')
        scoreGame()
    }
    continueGame()
}

//Chamada da função para iniciar o programa
ticTacToe()
