//interfaces
interface Produto {
    id: number;
    nome: string;
    preco: number;
    categoria: string;
}

const mercadoriaLoja: Produto[] = [
    { id: 1, nome: 'Boné', preco: 124.99, categoria: 'Acessórios'},
    { id: 2, nome: 'Moleton', preco: 224.99, categoria: 'Roupa'},
    { id: 3, nome: 'Casaco', preco: 524.99, categoria: 'Roupa'},
    { id: 4, nome: 'Sapato', preco: 624.99, categoria: 'Calçados'},
];

//função p listar todos os produtor
function listarProdutos(mercadoriaLoja: Produto[]): void {
    mercadoriaLoja.forEach((produto) => {
        console.log(`ID: ${produto.id}, Produto: ${produto.nome}, Preço: R$ ${produto.preco}, Categoria: ${produto.categoria}`);
    });
}

//função para filtrar
function filtrarProdutoPorCategoria(mercadoriaLoja: Produto[], categoria: string): Produto[] {
    return mercadoriaLoja.filter((produto) => produto.categoria === categoria);
}

//função para aumentar os preços de todas as mercadorias
function aumentarPreco(mercadoriaLoja: Produto[], porcentagem: number): Produto[] {
    return mercadoriaLoja.map((produto) => {
        const novoPreco = produto.preco * (1 + porcentagem / 100);
        return { ...produto, preco: novoPreco };
        });
    }

