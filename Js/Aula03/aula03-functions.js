//ex de funções puras

function somar(a, b) {
    return a + b;
}

function isPar(numero) {
    return numero % 2 === 0;
}

console.log(somar(2,4));
console.log(isPar);

//exs. de funções impuras
function gerarNumeroAleatorio() {
    return Math.random();
}

function addElemento(elemento) {
    document.body.appendChild(elemento);
}

//exs. de funções de primeira ordem
function executar(funcao) {
    funcao();
}

// function mostrarDetalhes(cores, tamanho, posicao) {
//     return(       

//     );
// }

function criarOla(saudacao) {
    return function(nome) {
        console.log(saudacao + ', ' + nome);
    };
}
const dizerOi = criarOla('Oisss');

//arrow function

(parametros) => {
    //corpo da função
}

//função tradicional
function adicionar(x, y) {
    return x + y;
}

//variações da arrow function
const adicao = (x, y) => {
    return x + y;
}

const somatorio = (x, y) => x + y;

let numero = 2
const dobro = numero => numero * 2;

const oi = () => console.log('olá povo!')