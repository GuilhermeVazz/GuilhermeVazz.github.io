const IMG_CARTAS = [
    "../../src/img/AtravessarNaFaixa.png",
    "../../src/img/cintoSeguranca.png",
    "../../src/img/cuidadoNoTransito.png",
    "../../src/img/naoDirijaNoTelefone.png",
    "../../src/img/olhoParaOsLados.png",
    "../../src/img/respeiteOSinal.png"
]

let primeiraCarta;
let segundaCarta;
let jogadas = 0;
let acertos = 0;

function carregarJogo() {
    let cartas = ordenarCartas()
    // console.log(cards)
    inserirCartasNoBoard(cartas)
}

function ordenarCartas() {
    const descarteCards = []

    IMG_CARTAS.forEach(IMGCarta => {
        descarteCards.push(IMGCarta);
        descarteCards.push(IMGCarta);
    });

    return descarteCards.sort(embaralharCartas)
}

function inserirCartasNoBoard(cartas) {
    const boardEl = document.querySelector(".board");
    boardEl.innerHTML = "";

    cartas.forEach(card => {
        boardEl.innerHTML += `
        <div class="card" onclick="virarCarta(this)">
            <div class="card-front">
                <img src="../../src/img/brasaoColorido.png" />
            </div>
            <div class="card-back">
                <img src="${card}">
            </div>
        </div>
        `
    })
}

function virarCarta(card) {
    if (cartaClicadaEstaVirada(card) || ambasCartasVirada()) return;
    card.classList.add("is-flipped");

    //DEFINIR CARTAS

    const isFirstCard = primeiraCarta == undefined;
    if (isFirstCard) {
        primeiraCarta = card;
        return;
    } else {
        segundaCarta = card;
        jogadas = jogadas + 1;
    }

    const jogada = primeiraCarta.innerHTML === segundaCarta.innerHTML
    if (jogada) {
        acertos = acertos + 1;
        resetarJogada()
    } else {
        setTimeout(desvirarCartaseResetarJogada, 1000);
    }

    checkFimDoJogo();
}

function checkFimDoJogo() {
    const todasAsCartas = acertos === IMG_CARTAS.length;
    if (todasAsCartas) {
        setTimeout(encerrarJogo, 1000 / 2);
    }
}

function encerrarJogo() {
    alert(`Parábens! Você ganhou em ${jogadas} jogadas!`)
    setTimeout(location.reload(), 1000)
}

function ambasCartasVirada() {
    return primeiraCarta != undefined && segundaCarta != undefined;
}

function cartaClicadaEstaVirada(card) {
    return card.classList.contains("is-flipped");
}

function embaralharCartas() {
    return Math.random() - 0.5;
}

function desvirarCartaseResetarJogada() {
    primeiraCarta.classList.remove("is-flipped");
    segundaCarta.classList.remove("is-flipped");
    resetarJogada();
}

function resetarJogada() {
    primeiraCarta = undefined
    segundaCarta = undefined
}

carregarJogo()

