// 1.
// const contarPares = (n) => {
//     n = 10;
//     for(let i = 0; i <= n; i++) {
//         if(i % 2 === 0 ) {
//             console.log("O número " + i + " é par");
//         }
//     }
// }

// contarPares();


// 2.
// const livro = {
//     titulo: "JavaScript Essencial",
//     autor: "Alana Souza",
//     ano: 2024,
//     sinopse: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolare magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     editora: "Mundo Dev"
// }

// const { titulo, ano } = livro;

// console.log(titulo);
// console.log(ano);


// 3.
// const frutas1 = ["maçã", "banana"];
// const frutas2 = ["laranja", "abacaxi"];
// const todasAsFrutas = [...frutas1, ...frutas2];

// console.log(todasAsFrutas);

// 4.
// const verificarAcesso = (idade, temIngresso) => {
//     if (idade >= 18 && temIngresso === true) {
//         console.log("Acesso Permitido");
//     } else {
//         console.log("Acesso Negado");
//     }
// }

// verificarAcesso(20, true);
// verificarAcesso(17, true);
// verificarAcesso(20, false);

// 5.

// const exibirAviso = (estaChovendo, semGuardaChuva) => {
//     if (estaChovendo || semGuardaChuva) {
//         console.log("Leve um guarda-chuva!")
//     } else {
//         console.log("Tudo certo, pode sair tranquilo.")
//     }
// }

// exibirAviso(true, true);
// exibirAviso(true, false);
// exibirAviso(false, true);
// exibirAviso(false, false);