//exemplo de farmacia
//arrays de objetos, métodos de manipulação
//.map, .filter, .reduce
//laços

//arrays de objetos
const medicamentos = [
  { nome: "Paracetamol", preco: 15.99, estoque: 120 },
  { nome: "Dipirona", preco: 22.99, estoque: 123 },
  { nome: "Ibuprofeno", preco: 18.97, estoque: 20 },
  { nome: "Amoxicilina", preco: 35.99, estoque: 143 },
  { nome: "Loratadina", preco: 12.1, estoque: 40 },
  { nome: "Aspirina", preco: 42.1, estoque: 56 },
];

//listar os medicamentos com estoque baixo
function ListarEstoqueBaixo(limite) {
  return medicamentos.filter((medicamento) => medicamento.estoque < limite);
}

//calcular o valor total do estoque -- map e reduce
function calcularValorTotalEstoque() {
  const valores = medicamentos.map(
    (medicamento) => medicamento.preco * medicamento.estoque
  );
  return valores.reduce((total, valor) => total + valor, 0);
}

//loops
//medicamentos em estoque baixo
console.log("Medicamentos com estoque baixo:");
const estoqueBaixo = ListarEstoqueBaixo(80);
for (let i = 0; i < estoqueBaixo.length; i++) {
  console.log(`- ${estoqueBaixo[i].nome}: ${estoqueBaixo[i].estoque} unidades`);
}

let i = 0;
console.log("\nLista de todos os medicamentos:");
do {
  console.log(
    `- ${medicamentos[i].nome}: R$ ${medicamentos[i].preco.toFixed(2)}`
  );
  i++;
} while (i < medicamentos.length);

const valorTotal = calcularValorTotalEstoque();
console.log(`\nValor total do estoque: R$ ${valorTotal.toFixed(2)}`);
