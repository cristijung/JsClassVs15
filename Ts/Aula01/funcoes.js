//funções
var numero1 = 5;
var numero2 = 10;
function somar(a, b) {
    return a + b;
}
var resultado = somar(numero1, numero2);
console.log("A soma de ".concat(numero1, " e ").concat(numero2, " \u00E9 igual a: ").concat(resultado));
//exemplo de arrays
var numeros = [1, 2, 3, 4, 5];
console.log('Elementos do array:');
for (var _i = 0, numeros_1 = numeros; _i < numeros_1.length; _i++) {
    var numero = numeros_1[_i];
    console.log(numero);
}
//arrays
var nomes = ['Ana', 'Caio', 'Bia'];
console.log('Elementos do array:');
for (var _a = 0, nomes_1 = nomes; _a < nomes_1.length; _a++) {
    var nome = nomes_1[_a];
    console.log(nome);
}
var pessoas = [
    { nome: 'Ana', idade: 30, email: 'ana@email.com' },
    { nome: 'Caio', idade: 25 },
    { nome: 'Bia', idade: 28, email: 'bia@email.com' },
    { nome: 'Luiza', idade: 24, email: 'luiza@email.com' },
];
//acessando
console.log(pessoas[0].nome);
console.log(pessoas[1].idade);
console.log(pessoas[2].email);
//iterando
pessoas.forEach(function (pessoa) {
    console.log("Nome: ".concat(pessoa.nome, ", com idade de ").concat(pessoa.idade));
    if (pessoa.email) {
        console.log("Email: ".concat(pessoa.email));
    }
    else {
        'Email não encontrado!';
    }
});
