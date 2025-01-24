const elemento = document.getElementById('meuElemento');

setTimeout(() => {
    elemento.style.backgroundColor = 'red';
}, 1000);

setTimeout(() => {
    elemento.style.backgroundColor = 'green';
}, 2000);

setTimeout(() => {
    elemento.style.backgroundColor = 'blue';
}, 3000);