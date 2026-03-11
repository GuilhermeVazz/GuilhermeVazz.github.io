// QUIZ / QUIZ / QUIZ / QUIZ / QUIZ / QUIZ / QUIZ / QUIZ / QUIZ / QUIZ / QUIZ / QUIZ / QUIZ / QUIZ /

const perguntas = [
    {
        pergunta: "Onde atravessar na rua?",
        resposta: [
            { id: 1, texto: "calçada", correto: false },
            { id: 2, texto: "rua", correto: false },
            { id: 3, texto: "Faixa", correto: true},
            { id: 4, texto: "teto", correto: false }
        ]
    },
    {
        pergunta: "Onde atravessar na rua?",
        resposta: [
            { id: 1, texto: "calçada", correto: false },
            { id: 2, texto: "rua", correto: false },
            { id: 3, texto: "Faixa", correto: true },
            { id: 4, texto: "teto", correto: false }
        ]
    },
    {
        pergunta: "Onde atravessar na rua?",
        resposta: [
            { id: 1, texto: "calçada", correto: false },
            { id: 2, texto: "rua", correto: false },
            { id: 3, texto: "Faixa", correto: true },
            { id: 4, texto: "teto", correto: false }
        ]
    },
    {
        pergunta: "Onde atravessar na rua?",
        resposta: [
            { id: 1, texto: "calçada", correto: false },
            { id: 2, texto: "rua", correto: false },
            { id: 3, texto: "Faixa", correto: true },
            { id: 4, texto: "teto", correto: false }
        ]
    }
]

const h1Perguntas = document.getElementById("pergunta");
const botoesRespostas = document.getElementById("respostas-botoes");
const botaoProximo = document.getElementById("botao-proximo");

let questaoAtualIndex = 0;
let pontuacao = 0;

function comecarQuiz() {
    questaoAtualIndex = 0;
    pontuacao = 0;
    botaoProximo.innerHTML = "Próxima";
    mostrarQuestao();
}

function resetarEstado() {
    botaoProximo.style.display = "none";
    while (botoesRespostas.firstChild) {
        botoesRespostas.removeChild(botoesRespostas.firstChild)
    }
}

function mostrarQuestao() {
    resetarEstado()
    let questaoAtual = perguntas[questaoAtualIndex];
    let numeroPergunta = questaoAtualIndex + 1;
    h1Perguntas.innerHTML = numeroPergunta + ". " + questaoAtual.pergunta

    questaoAtual.resposta.forEach((respostas) => {
        const botao = document.createElement("button");
        botao.innerHTML = respostas.texto;
        botao.dataset.id = respostas.id;
        botao.classList.add("btn");
        botao.addEventListener("click", selecionarResposta);
        botoesRespostas.appendChild(botao)
    })
}

function selecionarResposta(e) {
    respostas = perguntas[questaoAtualIndex].resposta;
    const respostaCorreta = respostas.filter((resposta) => resposta.correto == true)[0];

    const botaoSelecionado = e.target;
    const correto = botaoSelecionado.dataset.id == respostaCorreta.id;
    if (correto) {
        botaoSelecionado.classList.add("correto");
        pontuacao++;
    } else {
        botaoSelecionado.classList.add("errado");
        console.log(respostaCorreta)
    }
    Array.from(botoesRespostas.children).forEach((button) => {
        if (button.dataset.id == respostaCorreta.id) {
            button.classList.add("correto")
        }
        button.disabled = true;
    })
    botaoProximo.style.display = "block";
}

function mostrarPontuacao() {
    resetarEstado();
    h1Perguntas.innerHTML = `Você acertou ${pontuacao} de ${perguntas.length}!`
    botaoProximo.innerHTML = "Jogar Novamente";
    botaoProximo.style.display = "block";
}

function proximaPergunta() {
    questaoAtualIndex++;
    if (questaoAtualIndex < perguntas.length) {
        mostrarQuestao()
    } else {
        mostrarPontuacao()
    }
}

botaoProximo.addEventListener("click", () => {
    if (questaoAtualIndex < perguntas.length) {
        proximaPergunta()
    } else {
        comecarQuiz()
    }
})
mostrarQuestao()

// QUIZ / QUIZ / QUIZ / QUIZ / QUIZ / QUIZ / QUIZ /QUIZ / QUIZ / QUIZ / QUIZ / QUIZ / QUIZ / QUIZ/ QUIZ / QUIZ / QUIZ /

