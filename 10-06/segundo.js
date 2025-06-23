//trabalhando com array e laço de repetição do while
const alunos = [  
    {aluno: "Henrique", nota: 8},
    {aluno: "Anabela", nota: 10},
    {aluno: "Fernandes", nota: 10},
    {aluno: "Bianca", nota: 9},
];

let index = 0;
let somaDasNotas = 0;
let totalAlunos = alunos.length;

//utilizando o laço de repetição
do{
    somaDasNotas+= alunos[index].nota;
    ++index;

} while (index < totalAlunos)

let media = somaDasNotas / totalAlunos

console.log(media)