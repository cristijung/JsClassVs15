const produtos = [
  { id: 1, nome: "Caderno", preco: 80, disponivel: true },
  { id: 2, nome: "Agenda", preco: 180, disponivel: false },
  { id: 3, nome: "Livro", preco: 450, disponivel: false },
  { id: 4, nome: "Caneta", preco: 25, disponivel: true },
  { id: 5, nome: "Lápis", preco: 12.5, disponivel: false },
  { id: 6, nome: "Borracha", preco: 0.5, disponivel: false },
  { id: 7, nome: "Apontador", preco: 1.99, disponivel: true },
  { id: 8, nome: "Grampeador", preco: 39, disponivel: true },
  { id: 9, nome: "Caneta Apagador", preco: 59, disponivel: false },
  { id: 10, nome: "Marcador", preco: 89, disponivel: true },
  { id: 11, nome: "Calendário", preco: 19.99, disponivel: false },
  { id: 12, nome: "Cabo USB", preco: 39.99, disponivel: true },
];

function renderizarProdutos(produtos) {
  const produtosDiv = document.getElementById("produtos");
  produtosDiv.innerHTML = "";

  produtos.map((produto) => {
    const produtoDiv = document.createElement("div");
    produtoDiv.classList.add("produto", "col-12", "col-md-6", "col-lg-4");
    produtoDiv.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${produto.nome}</h5>
                    <p class="card-text">Preço: ${produto.preco.toFixed(2)}</p>
                    <p class="card-text">Disponível: ${
                      produto.disponivel ? "Sim" : "Não"
                    }</p>
                </div>
            </div>
        `;
    produtosDiv.appendChild(produtoDiv);
  });
}

function mostrarTodosProdutos() {
  renderizarProdutos(produtos);
}

function mostrarProdutosDisponiveis() {
  const produtosDisponiveis = produtos.filter((produto) => produto.disponivel);
  renderizarProdutos(produtosDisponiveis);
}

//adicionar um ouvinte de evento para os botões
document
  .getElementById("mostrarTodos")
  .addEventListener("click", mostrarTodosProdutos);
document
  .getElementById("mostrarDisponiveis")
  .addEventListener("click", mostrarProdutosDisponiveis);

mostrarTodosProdutos();
