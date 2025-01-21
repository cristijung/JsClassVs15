//tipos primitivos

const text1 = "oi";
const text2 = 'oi';
const text3 = '123.45657898';
const text4 = 'Ana Banana trouxe várias frutas';

//concatenando e tipos
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