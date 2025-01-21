//undefined
//Nan
//Null


//NaN
//Exemplos

let resultado = 0 / 0;
console.log(isNaN(resultado));

let resultados = Math.sqrt(-1);
if (isNaN(resultados)) {
    console.log('O resultado não é um nº');
} else {
    console.log('O resultado é: ', resultados);
}

//Null
let usuario = null; //inicial - nenhum valor atribuído

if(usuario === null) {
    console.log('Nenhum usuário está logado.');
} else {
    console.log('Bem-vindo,  ', usuario);
}

//undefined
let idade;
if(typeof idade === 'undefined') {
    console.log('A idade não foi definida.');
} else {
    console.log('A idade é: ', idade);
}

//outro exemplo
function calcularArea(largura, altura) {
    if(isNaN(largura) || isNaN(altura) || largura === null || altura === null) {
        return 'Por favor, forneça valores numéricos válidos!';
    } else {
        return largura * altura
    }    
}

console.log(calcularArea(5, 10));
console.log(calcularArea('a', 10));
console.log(calcularArea(null, 10));