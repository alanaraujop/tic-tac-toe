//Criar a função (inverter) que recebe uma string e retorna um inverso dela “salve” => “evlas”

function countCharacters(string){
    let numberOfCharacters = 0;

    for(let i = 0; string[i] !== undefined; i++){
        numberOfCharacters++;
    }

    return numberOfCharacters;
}

function inverter(string){
    const numberOfCharacters = countCharacters(string);
    let inverseString = "";

    for(let i = (numberOfCharacters - 1); i >= 0; i--){
        inverseString = inverseString + string[i];
    }

    return inverseString;
}

console.log(inverter("Esse é um teste! =)"));

//Criar a função (contarNumeroVogais) que recebe uma string e retorna o número de vogais que ela tem (maiusculas e minusculas) “salve” => 2

function isVowel(character){
    const vowels = ['a', 'á', 'à', 'ã', 'â', 'A', 'Á', 'À', 'Ã', 'Â', 'e', 'é', 'ê', 'E', 'É', 'Ê', 'i', 'í', 'I', 'Í', 'o', 'ó', 'õ', 'ô', 'O', 'Ó', 'Õ', 'Ô', 'u', 'ú', 'U', 'Ú'];

    for(let i = 0; vowels[i] !== undefined; i++){
        if(character[0] === vowels[i]){
            return true;
        }
    }

    return false;
}

function contarNumeroVogais(string){
    let counter = 0;

    for(let i = 0; string[i] !== undefined; i++){
        if(isVowel(string[i])){
            counter++;
        }
    }

    return counter;
}

console.log(contarNumeroVogais("Esse é um teste"));

//Extra: Criar a função (fazerRelatorio) que recebe uma string e retorna um objeto com a própria string, o inverso da string e quantas vogais ela tem “salve” => { palavra: “salve”, palavraInverso: “evlas”, numeroVogais: 2 }
//Extra2: Se receber algo diferente de string da um console.log(“oh carai”) e retorna undefined

function fazerRelatorio(string){
    const isString = typeof string === 'string';

    if(isString){
        const object = {
            palavra: string,
            palavraInverso: inverter(string),
            numeroVogais: contarNumeroVogais(string)
        }

        return object;
    }

    console.log("Oh carai de asa");
    return undefined;
}

console.log(fazerRelatorio("Esse é um teste"));