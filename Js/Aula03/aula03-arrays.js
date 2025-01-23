//arrays, arrays de objeto, métodos e funções

const numeros = [1, 2, 3, 4, 5];

const numerosDobrados = numeros.map(function (numero) {
  return numero * 2;
});

console.log(numerosDobrados);

const numPares = numeros.filter(function (numero) {
  return numero % 2 === 0;
});

console.log(numPares);

//exemplo dos dois métodos
//filter está filtrando os pares
//map está dobrando os números filtrados
const numerosParesDobrados = numeros
  .filter((numero) => numero % 2 === 0)
  .map((numero) => numero * 2);

console.log(numerosParesDobrados);
console.log("\n------------------------------\n");
//reduce: soma o array acumulando seus valores e retorna somente 1 valor
const soma = numeros.reduce(function (acumulador, numero) {
  return acumulador + numero;
});

const sum = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

console.log(soma);
console.log(sum);

//exemplo --> callback
//tabuada com função tradicional
function calcTabuada(numero) {
    for (let i = 0; i <= 10; i++) {
        const resultado = numero * i;
        console.log(`${numero} X ${i} = ${resultado}`);
    }
}
calcTabuada(5);

console.log("\n------------------------------\n");
//tabuada com arrow function
const calcularTabuada = (numero) => {
    for (let i = 0; i <= 10; i++) {
        const resultado = numero * i;
        console.log(`${numero} X ${i} = ${resultado}`);
    }
}
 calcularTabuada(8);