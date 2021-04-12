console.log("Aula de AC");

let aluno = {
    "nome": "Ana",
    "idade": 16
};

console.log(aluno);

// aluno.idade = 20;
// aluno.cidade="Braga";

// console.table(aluno);

// Buscar o elemento <div id="aluno">
let divAluno = document.getElementById("aluno");

let texto = "nome: " + aluno.nome + ", idade: " + aluno.idade;

divAluno.innerText = texto;

console.log(texto);

