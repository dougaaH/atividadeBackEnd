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
function getUsuario() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const usuario = {
                id: 5,
                nome: "João"
            }
            const erro = false

            if (erro) {
                reject("Falha nas informações do usuário.")
            } else {
                resolve(usuario)
            }
        }, 1000);
    })
}

function getPedidos(idUsuario) {
    return new Promise(() => {
        setTimeout(() => {
            const pedidos = [
                
            ];

        }, 1500);
    })
}

async function mostrarPedidos() {
    try {
        console.log("Verificando dados do usuário...")
        const usuario = await getUsuario()


        console.log("")
    } catch (error) {
        
    }
}