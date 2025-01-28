interface Mercadoria {
    id: number;
    nome: string;
    preco: number;
    categoria: string;
    emEstoque: boolean;
}

const mercadorias: Mercadoria[] = [
    { id: 1, nome: 'Camiseta', preco: 45.99, categoria: 'Vestuário', emEstoque: true },
    { id: 2, nome: 'Tênis', preco: 569.99, categoria: 'Calçados', emEstoque: false },
    { id: 3, nome: 'Calça', preco: 126.99, categoria: 'Vestuário', emEstoque: false },
    { id: 4, nome: 'Sapato Social', preco: 405.99, categoria: 'Calçados', emEstoque: true },
];

//para add
function adicionarProduto(produto: Mercadoria): void {
    mercadorias.push(produto);
}

//para remover
function removerProduto(id: number): void {
    for (let i = 0; i < mercadorias.length; i++) {
        if (mercadorias[i].id === id) {
            mercadorias.slice(i, 1);
            return; 
        }
    }
}

//para atualizar
function atualizarPreco(id: number, novoPreco: number): void {
    for (const produtos of mercadorias) {
        if (produtos.id === id) {
            produtos.preco = novoPreco;
            return; //sai da função depois de atualizar o preço
        }        
    }
}

//para filtrar
function filtrarPorCategoria(categoria: string): Mercadoria[] {
    return mercadorias.filter( mercadoria => mercadoria.categoria === categoria);
}



//operações de manipulação
adicionarProduto({ id: 5, nome: 'Meias', preco: 14.99, categoria: 'Acessórios', emEstoque: true });
removerProduto(3);
atualizarPreco(2, 110.99);

const mercadoriasFiltradas = filtrarPorCategoria('Vestuário');

//exibindo
console.log('Lista de mercadorias atualizada: ', mercadorias);
console.log('Mercadorias filtradas por vestuário: ', mercadoriasFiltradas);

//calcular o total em estoque
function calcularTotalEmEstoque(mercadorias: Mercadoria[]): number {
    let total = 0;
    for (const produtos of mercadorias) {
        if(produtos.emEstoque) {
            total += produtos.preco;
        }
    }
    return total;
}

//exibor
const totalEstoque = calcularTotalEmEstoque(mercadorias);
console.log('Total em estoque: ', totalEstoque);



