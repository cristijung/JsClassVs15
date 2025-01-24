//temporizadores

setTimeout(function() {
    console.log('Essa função será executada após 3 segundos');
}, 3000);

function operacaoAssincrona(tempo, callback) {
    console.log('Iniciando a operação assíncrona ...');

    setTimeout(function() {
        console.log(`Operação assíncrona concluída após ${tempo} milissengundos`);
        callback();
    }, tempo)
}

//exemplo de carregamento

function simuarCarregamento() {
    console.log('Carregando ...');
    setTimeout(() => {
        console.log('Conteúdo carregado com sucesso!!');
    }, 4000);
}

simuarCarregamento();

//setInterval
function mostrarHora() {
    const agora = new Date();
    console.log(`Hora atual: ${agora.toLocaleTimeString()}`);
}
const intervalo = setInterval(mostrarHora, 2000);

setTimeout(() => {
    clearInterval(intervalo);
    console.log('Hora parada');
}, 1000);

//
function hora() {
    const agoraDois = new Date();
    const opcoes = { hour: '2-digit', minute: '2-digit', second: '2-digit'};
    console.log(`Hora atual: ${agoraDois.toLocaleTimeString('pt-br', opcoes)}`);
}

setInterval(hora, 1000);