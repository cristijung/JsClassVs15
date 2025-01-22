const btnCriarDiv = document.getElementById("criarDiv");
const containerDivs = document.getElementById("container-divs");
const btnMudarTexto = document.getElementById("mudarTexto");
const paragrafo = document.getElementById("texto");

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

btnCriarDiv.addEventListener("click", () => {
  const novaDiv = document.createElement("div");
  novaDiv.classList.add("colored-div");
  novaDiv.style.backgroundColor = getRandomColor();
  containerDivs.appendChild(novaDiv);
});

btnMudarTexto.addEventListener("click", () => {
  paragrafo.innerHTML = "Novo texto com <b>negrito</b>!";
});