const employee = {
    name: "Moira O'Deorain",
    salary: 2900,
};

employee.newSalary = employee.salary * 1.18; 

const isOver3000 = employee.newSalary > 3000;

console.log("Olá, " + employee.name + ". Seu novo salário é de R$" + employee.newSalary);

if(isOver3000){
    console.log("Você vai ter que declarar imposto!");
}else{
    console.log("Você não precisa declarar imposto!")
}
