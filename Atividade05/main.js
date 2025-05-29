import readline from "readline";
import { quizGenerador } from "./quizModule.js";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const quiz = quizGenerador();

function fazerPergunta(perguntaAtual) {
    rl.question(perguntaAtual.pergunta + " ", (userResposta) => {
        if (userResposta.trim().toLowerCase() === perguntaAtual.resposta.toLowerCase()) {
            console.log("Correto!");
            const proximaPergunta = quiz.next();
            if (!proximaPergunta.done) {
                fazerPergunta(proximaPergunta.value);
            } else {
                console.log("Parabéns! Você completou o quiz.");
                rl.close();
            }
        } else {
            console.log("Errado, tente novamente!");
            fazerPergunta(perguntaAtual);
        }
    });
}

const primeira = quiz.next();
if (!primeira.done) {
    fazerPergunta(primeira.value);
}