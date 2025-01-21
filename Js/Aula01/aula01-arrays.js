//Arrays

let frutas = ['maçã', 'banana', 'laranja', 'morango'];
console.log(frutas);
//acessar um elemento
console.log(frutas[0]);
console.log(frutas[2]);

//add um elemento no fim
frutas.push('Uva');
console.log(frutas);

//remover um elemento do inicio
frutas.shift();
console.log(frutas);

//add maçã novamente
frutas.push('maçã');

//iterando sobre os elementos do array
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

//usando o foreach que itera a cada elemento
frutas.forEach(function(frutas){
    console.log(frutas);
})

frutas[2] = 'melancia';
console.log(frutas);
frutas.unshift('jaca');
console.log(frutas);

