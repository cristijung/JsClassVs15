//métodos nativos de String

const cidade = 'Porto Alegre';
const municipio = 'PORTO ALEGRE';
const maiusculo = cidade.toUpperCase();
console.log(cidade === maiusculo);
console.log(maiusculo === municipio);

const numUm = 456;
const numDois = '789';
const numTres = 12;

console.log(numUm + numDois + numTres); //só concatenou os valores
console.log(numUm + numTres + numDois); //somou os 2 primeiros e concatenou o terceiro
console.log(numUm + Number(numDois) + numTres); //converteu em nº e somou

// == igualdade abstrata: compara dois valores após realizar a conversão do tipo. Os valores não precisam ter o mesmo tipo
// === igualdade estrita: os valores devem ser os mesmos e do mesmo tipo

let numero = 5;
let texto = '5';
console.log(numero == texto); //true
console.log(numero === texto); //false

let var1 = null;
let var2; //indefinido undefined

console.log(var1 == var2); //true
console.log(var1 === var2); //false
