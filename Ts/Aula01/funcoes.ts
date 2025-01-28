//funções

let numero1: number = 5;
let numero2: number = 10;

function somar(a: number, b: number): number {
    return a + b;
}

const resultado: number = somar(numero1, numero2);
console.log(`A soma de ${numero1} e ${numero2} é igual a: ${resultado}`);

//exemplo de arrays
const numeros: number[] = [1, 2, 3, 4, 5];

console.log('Elementos do array:');
for (const numero of numeros) {
    console.log(numero);
}

//arrays
const nomes: string[] = ['Ana', 'Caio', 'Bia'];
console.log('Elementos do array:');
for (const nome of nomes) {
    console.log(nome);
}

//funções e interfaces

interface Pessoa {
    nome: string;
    idade: number;
    email?: string;  //opcional
}

const pessoas : Pessoa[] = [
    { nome: 'Ana', idade: 30, email: 'ana@email.com'},
    { nome: 'Caio', idade: 25},
    { nome: 'Bia', idade: 28, email: 'bia@email.com'},
    { nome: 'Luiza', idade: 24, email: 'luiza@email.com'},
];

//acessando
console.log(pessoas[0].nome);
console.log(pessoas[1].idade);
console.log(pessoas[2].email);

//iterando
pessoas.forEach(pessoa => {
    console.log(`Nome: ${pessoa.nome}, com idade de ${pessoa.idade}`);
    if (pessoa.email) {
        console.log(`Email: ${pessoa.email}`);
    } else {
        'Email não encontrado!';
    }
})