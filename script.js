const buttons = document.querySelectorAll(".game button");
const currentPlayerHTML = document.querySelector(".currentPlayer");
let currentPlayer = "X";

const sequenciasDeVitoria = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

let sequenciaX = [];
let sequenciaO = [];

function init() {
    currentPlayerHTML.innerHTML = `Player atual: ${currentPlayer}`;
}

function defineGanhador(sequencias, sequencia) {
    for(let i = 0; i < sequencias.length; i++) {
        const [a, b, c] = sequencias[i];
        if(sequencia.includes(String(a)) && sequencia.includes(String(b)) && sequencia.includes(String(c))) {
            return true;
        }
    }
}

init();

buttons.forEach(button => {
    button.addEventListener("click", function click() {

        button.innerHTML = currentPlayer;

        if(currentPlayer === "X") {
            sequenciaX.push(button.getAttribute("data-i"));
        } else if(currentPlayer === "O") {
            sequenciaO.push(button.getAttribute("data-i"));
        }

        if(defineGanhador(sequenciasDeVitoria, sequenciaX)) {
            alert("Jogador X ganhou");
            location.reload();
        }

        if(defineGanhador(sequenciasDeVitoria, sequenciaO)) {
            alert("Jogador O ganhou");
            location.reload();
        }

        if(sequenciaX.length === 5 && !defineGanhador(sequenciasDeVitoria, sequenciaX)) {
            alert("EMPATE");
            location.reload();
        }

        currentPlayer = currentPlayer === "X" ? "O" : "X";

        currentPlayerHTML.innerHTML = `Player atual: ${currentPlayer}`;

        button.removeEventListener("click", click);
    });
});
