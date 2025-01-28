//arrays de objetos com inferência de tipo

const produtos = [
    { nome: 'Camiseta', preco: 39.99, cor: 'vermelho' },
    { nome: 'Calça', preco: 159.99, cor: 'cinza' },
    { nome: 'Vestido', preco: 450.99, cor: 'preto' },
    { nome: 'Tênis', preco: 399.99, cor: 'branco' },
];

console.log(produtos[0].nome);
console.log(produtos[1].preco);

//add um novo produto com tipo inferido
produtos.push({ nome: 'Meia', preco: 14.99, cor: 'rosa' });
console.log(produtos);

//array com tipos genéricos
//observando o código, colocamos tipos diferentes para a 
//propriedade dados, sendo q ela está 'tipada' como generics
interface Item<T> {
    id: number;
    dados: T;
}

const items: Item<string>[] = [
    { id: 1, dados: 'Este é um texto 1' },
    { id: 2, dados: 'Este é um texto 2' }
];

const valores: Item<number>[] = [
    { id: 1, dados: 1246 },
    { id: 2, dados: 2346 },
];