 /*1.
 const readline = require('readline');

 const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
 });

 rl.question('Digite sua idade: ',  function(idade) {
   if (idade >= 18) {
     console.log('Você é maior de idade.');
   } else {
     console.log('Você é menor de idade.');
   }

   rl.close();
 }); */

/* 2.
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um número: ', function(numero) {
  if (numero % 2 === 0) {
    console.log('O número é par.');
  } else {
    console.log('O número é ímpar.');
  }

  rl.close();
}); */

/* 3.
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite seu nome: ", function (nome) {
  nome == "admin"
    ? console.log("Olá, admin!")
    : console.log("Olá, " + nome + "!");

  rl.close();
}); */

/* 4.
for (var i = 1; i <= 100; i++) {
  console.log(i);
} */

/*5.
i=10
while ( i > 0) {
  console.log(i);
  i--;
} */

/* 6.
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite sua senha: ", function (senha)  {
  if (senha === "1234") {
    console.log("Acesso permitido.");
  } else {
    console.log("Acesso negado.");
  }
 rl.close();
}); */

//7.
/*const numeros = [2, 4, 6, 8, 10];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}

console.log("A soma dos valores é: " + soma);
*/

/* 8.
const alunos = ["João", "Maria", "Pedro", "Ana", "Lucas"];
for (let i in alunos) {
  
  console.log(i, alunos[i]);
 
} */

/* 9.
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite sua nota: ", function (nota) {
  const notaNumero = parseFloat(nota);
  if (isNaN(notaNumero) || notaNumero < 0 || notaNumero > 10) {
    console.log("Nota inválida, sua nota deve ser entre 0 e 10.");
    rl.close();
    return;
  }
  switch (true) {
    case notaNumero === 10 || notaNumero === 9:
      console.log("Conceito 'A'.");
      break;
    case notaNumero === 8 || notaNumero === 7:
      console.log("Conceito 'B'.");
      break;
    case notaNumero === 6 || notaNumero === 5:
      console.log("Conceito 'C'.");
      break;
    case notaNumero === 4 || notaNumero === 3:
      console.log("Conceito 'D'.");
      break;
    default:
      console.log("Nota inválida ou conceito não definido.");
  }

  rl.close();
}); */

/* 10. 
const readline = require ("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question("Digite um número entre 1 e 7 para o dia da semana: ", function (numero) {
  const dia = parseInt(numero);
  switch (dia) {
    case 1:
      console.log("O dia da Semana é Domingo");
      break;
    case 2:
      console.log("O dia da Semana é Segunda-feira");
      break;
    case 3:
      console.log("O dia da Semana é Terça-feira");
      break;
    case 4:
      console.log("O dia da Semana é Quarta-feira");
      break;
    case 5:
      console.log("O dia da Semana é Quinta-feira");
      break;
    case 6:
      console.log("O dia da Semana é Sexta-feira");
      break;
    case 7:
      console.log("O dia da Semana é Sábado");
      break;
    default:
      console.log("Número inválido. Digite um número entre 1 e 7.");
  }

  rl.close();
}); */