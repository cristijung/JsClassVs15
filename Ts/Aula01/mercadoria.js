var mercadorias = [
    { id: 1, nome: 'Camiseta', preco: 45.99, categoria: 'Vestuário', emEstoque: true },
    { id: 2, nome: 'Tênis', preco: 569.99, categoria: 'Calçados', emEstoque: false },
    { id: 3, nome: 'Calça', preco: 126.99, categoria: 'Vestuário', emEstoque: false },
    { id: 4, nome: 'Sapato Social', preco: 405.99, categoria: 'Calçados', emEstoque: true },
];
//para add
function adicionarProduto(produto) {
    mercadorias.push(produto);
}
//para remover
function removerProduto(id) {
    for (var i = 0; i < mercadorias.length; i++) {
        if (mercadorias[i].id === id) {
            mercadorias.slice(i, 1);
            return;
        }
    }
}
//para atualizar
function atualizarPreco(id, novoPreco) {
    for (var _i = 0, mercadorias_1 = mercadorias; _i < mercadorias_1.length; _i++) {
        var produtos = mercadorias_1[_i];
        if (produtos.id === id) {
            produtos.preco = novoPreco;
            return; //sai da função depois de atualizar o preço
        }
    }
}
//para filtrar
function filtrarPorCategoria(categoria) {
    return mercadorias.filter(function (mercadoria) { return mercadoria.categoria === categoria; });
}
//operações de manipulação
adicionarProduto({ id: 5, nome: 'Meias', preco: 14.99, categoria: 'Acessórios', emEstoque: true });
removerProduto(3);
atualizarPreco(2, 110.99);
var mercadoriasFiltradas = filtrarPorCategoria('Vestuário');
//exibindo
console.log('Lista de mercadorias atualizada: ', mercadorias);
console.log('Mercadorias filtradas por vestuário: ', mercadoriasFiltradas);
//calcular o total em estoque
function calcularTotalEmEstoque(mercadorias) {
    var total = 0;
    for (var _i = 0, mercadorias_2 = mercadorias; _i < mercadorias_2.length; _i++) {
        var produtos = mercadorias_2[_i];
        if (produtos.emEstoque) {
            total += produtos.preco;
        }
    }
    return total;
}
//exibor
var totalEstoque = calcularTotalEmEstoque(mercadorias);
console.log('Total em estoque: ', totalEstoque);
