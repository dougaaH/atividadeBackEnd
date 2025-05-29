export function* quizGenerador() {
    const quiz = [
        { pergunta: "Qual a capital da França?", resposta: "Paris" },
        { pergunta: "Quantos planetas existem no sistema solar?", resposta: "8" },
        { pergunta: "Qual o maior osso do corpo humano?", resposta: "fêmur" }
    ];

    for (const item of quiz) {
        yield item;
    }
}