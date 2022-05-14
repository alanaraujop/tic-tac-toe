//Vetor de alunos
const vetorAlunos = [
    { nome: 'Joao', notas: [5, 7.5, 8, 8, 4.5, 9] },
    { nome: 'Breno', notas: [10, 8.5, 10, 7.5, 9, 6.5] },
    { nome: 'Pedro', notas: [5.5, 8.3, 9.5, 8, 9, 6.9] },
    { nome: 'Fulano', notas: [5.9, 8.5, 4, 8, 9.5, 6] },
    { nome: 'Angelino', notas: [0, 4.8, 9.2, 8.5, 4.9, 6.1] },
    { nome: 'Jaja', notas: [10, 4.3, 6.8, 8.25, 9.4, 6] },
    { nome: 'Frederico', notas: [3.5, 8, 10, 8.5, 9, 3.8] },
    { nome: 'Jonatas', notas: [6, 8.5, 8, 6.5, 7, 10] },
    { nome: 'Henrique', notas: [4, 8.2, 5.5, 8.5, 5.4, 6] }
];

//Criando uma função que calcula a média de um array
function calcMedia(notas){
    let soma = 0;
    for (const nota of notas){
        soma += nota;
    }

    const media = soma/notas.length;

    return media;
}

//Criando uma função que adiciona a média das notas no objeto
function addMedia(aluno){
    const {nome, notas} = aluno;
    const media = calcMedia(notas).toFixed(1);

    console.log(`${nome} teve média ${media}`);

    return{
        nome,
        notas,
        media
    };
}

const novoVetorAlunos = vetorAlunos.map(addMedia); //Imprimindo "fulano(o) teve média x" e capturando o novo vetor com as médias dos alunos
console.log(novoVetorAlunos); //Imprimindo o novo vetor