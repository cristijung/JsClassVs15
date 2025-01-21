//tipos de variaveis e tipos de dados

//ex.1
var altura = 6;
var comprimento = 22;
area = altura * comprimento;
var area;
console.log(area)

//ex.2 - usando let
let areas;
let alturas = 8;
let comprimentos = 22;
areas = alturas * comprimentos;
console.log(areas)

//ex.3 - usando const
const forma = 'quadrado';
const alturaTres = 12;
const comprimentoTres = 24;
let areaTres;

if (forma === 'quadrado') {
    areaTres = alturaTres * comprimentoTres;
} else {
    areaTres = (alturaTres * comprimentoTres) / 2;
}

console.log(areaTres);

//ex.4
let idade = '22';
idade = 22;

console.log(idade);

let nome = 'Ana';
let idades = 32;
let alturaQuatro = 1.71;
let peso = 56.789;

let informacao = "Nome: " + nome + " - Idade: " + idades + " - Altura: " + alturaQuatro + " - Peso: " + peso;
let infos = `Nome: ${nome}, Idade: ${idades}, Altura: ${alturaQuatro} com peso de: ${peso}`;
let dados = "Nome: ".concat(nome, ", Idade: ", idades, ", Altura: ", alturaQuatro, " Peso: ", peso);
console.log(informacao); 
console.log(infos);
console.log(dados);


