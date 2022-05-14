const person = {
    name: "Ângela Ziegler",
    age: 37
};

const isOver18 = person.age >= 18;

console.log("Nome: " + person.name + "\n" + "Idade: " + person.age);

if(isOver18){
    console.log("Você é maior de idade!");
}else{
    console.log("Você é menor de idade");
}