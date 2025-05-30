// 1.
// function buscarDadosDoServidor() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const dados = {
//                 nome: "Douglas",
//                 idade: 32,
//                 altura: 1.73,
//                 peso: 89,
//             }
//             const erro = false

//             if(erro) {
//                 reject("Falha ao conectar com o Banco de Dados")
//             } else {
//                 resolve(dados)
//             }
//         }, 2000)
//     })
// }

// async function main() {
//     try {
//         console.log("Iniciando a busca de dados...")
//         const dados = await buscarDadosDoServidor()
//         console.log("Dados encontrados: ", dados)
//     } catch(erro) {
//         console.error("Erro: ", erro)
//     }
// }

// main();

// 2.
// function validarIdade(idade) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const idade = 32;
//             const erro = false;

//             if (idade >= 18) {
//                 resolve(idade)
//             } else {
//                 reject(erro)
//             }
//         }, 1500)
//     })
// }

// async function main() {
//     try {
//         console.log("Verificando sua idade, aguarde...")
//         const idade = await validarIdade()
//         console.log("Acesso permitido")
//     } catch (erro) {
//         console.error("Acesso negado")
//     }
// }

// main();

// 3.
// function baixaImagem() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Imagem baixada")
//             reject("Falha ao baixar imagem")
//         }, 2000);
//     })
// }

// function baixarVideo() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Video baixado")
//             reject("Falha ao baixar video")
//         }, 3000);
//     })
// }

// async function main() {
//     try {
//         console.log("Baixando imagem, aguarde...")
//         const imagem = await baixaImagem()
//         console.log(imagem)

//         console.log("Baixando video, aguarde...")
//         const video = await baixarVideo()
//         console.log(video)
//     } catch (erro) {
//         console.error("Erro: ",erro)
//     }
// }

// main();

// 4.
// function fazerLogin(usuario, senha) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const usuario = "admin"
//             const senha = 1234
//             const erro = false

//             if (usuario === 'admin' && senha === 1234) {
//                 resolve()
//             } else {
//                 reject()
//             }
//         }, 2000);
//     })
// }

// async function main() {
//     try {
//         console.log("Entrando...")
//         const usuario = await fazerLogin()
//         const senha = await fazerLogin()
//         console.log("Login bem-sucedido!")
//     } catch (erro) {
//         console.error("Credenciais inválidas")
//     }
// }

// main();

// 5.
// function getUsuario() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const usuario = [
//                 { id: 1, nome: "João", email: "joaojoao@joao.com" }]
//             const erro = false

//             if (erro) {
//                 reject("Falha nas informações do usuário.")
//             } else {
//                 resolve(usuario)
//             }
//         }, 1000);
//     })
// }

// function getPedidos(idUsuario) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const pedidos = [
//                 { id: 1, usuarioID: idUsuario, item: "Caneta", valor: 2 },
//                 { id: 2, usuarioID: idUsuario, item: "Caderno", valor: 15 },
//                 { id: 3, usuarioID: idUsuario, item: "Lápis", valor: 1 }
//             ];

//             resolve(pedidos)
//         }, 1500);
//     })
// }

// async function mostrarPedidos(idUsuario) {
//     try {
//         console.log("Verificando dados do usuário...")
//         const usuario = await getUsuario();
//         console.log("Usuário:", usuario);

//         console.log("Buscando seus pedidos...")
//         const pedidos = await getPedidos();
//         console.log("Pedidos:");

//         pedidos.forEach(p => {
//             console.log(` - ${p.item} R$ ${p.valor}`)
//         });
//     } catch (error) {
//         console.error("Erro ao buscas dados: ", erro)
//     }
// }

// mostrarPedidos();

// 6.
// function delay(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function contarAte(numero) {
//   for (let i = 1; i <= numero; i++) {
//     console.log(i);
//     await delay(1000);
//   }
// }
// contarAte(5);

// 7.

// function buscarComTimeout() {
//   const busca = new Promise(resolve =>
//     setTimeout(() => resolve("Dados encontrados"), 2000)
//   );

//   const timeout = new Promise((_, reject) =>
//     setTimeout(() => reject("Tempo esgotado"), 1000)
//   );

//   return Promise.race([busca, timeout]);
// }
// buscarComTimeout()
//   .then(console.log)
//   .catch(console.error);

// 8.
// function promessaResolve1s() {
//   return new Promise(resolve =>
//     setTimeout(() => resolve("Resolvida em 1 segundo"), 1000)
//   );
// }

// function promessaRejeita2s() {
//   return new Promise((_, reject) =>
//     setTimeout(() => reject("Rejeitada em 2 segundos"), 2000)
//   );
// }

// function promessaResolve05s() {
//   return new Promise(resolve =>
//     setTimeout(() => resolve("Resolvida em 0.5 segundo"), 500)
//   );
// }

// async function verificarResultados() {
//   const resultados = await Promise.allSettled([
//     promessaResolve1s(),
//     promessaRejeita2s(),
//     promessaResolve05s()
//   ]);

//   resultados.forEach((resultado, index) => {
//     console.log(`Promise ${index + 1}:`, resultado.status, "-", resultado.reason || resultado.value);
//   });
// }
// verificarResultados();