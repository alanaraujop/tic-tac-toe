const student = {
    name: "Hana",
    firstGrade: 10,
    secondGrade: 9,
    thirdGrade: 9
}

student.average = (student.firstGrade + student.secondGrade + student.thirdGrade)/3;

const isApproved = student.average >= 8;

console.log("Olá, " + student.name + ". Sua média é " + student.average);

if(isApproved){
    console.log("Você foi aprovado(a)!");
}else{
    console.log("Você foi reprovado(a)! =(")
}

console.log(student)