var Cor;
(function (Cor) {
    Cor[Cor["Vermelho"] = 0] = "Vermelho";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Amarelo"] = 2] = "Amarelo";
    Cor[Cor["Azul"] = 3] = "Azul";
})(Cor || (Cor = {}));
var minhaCor = Cor.Vermelho;
console.log(minhaCor);
var DiaDaSemama;
(function (DiaDaSemama) {
    DiaDaSemama[DiaDaSemama["Domingo"] = 0] = "Domingo";
    DiaDaSemama[DiaDaSemama["Segunda"] = 1] = "Segunda";
    DiaDaSemama[DiaDaSemama["Ter\u00E7a"] = 2] = "Ter\u00E7a";
    DiaDaSemama[DiaDaSemama["Quarta"] = 3] = "Quarta";
    DiaDaSemama[DiaDaSemama["Quinta"] = 4] = "Quinta";
    DiaDaSemama[DiaDaSemama["Sexta"] = 5] = "Sexta";
    DiaDaSemama[DiaDaSemama["S\u00E1bado"] = 6] = "S\u00E1bado";
})(DiaDaSemama || (DiaDaSemama = {}));
function obterDiaDaSemana(dia) {
    switch (dia) {
        case DiaDaSemama.Domingo:
            return "Domingo";
        case DiaDaSemama.Segunda:
            return "Segunda";
        case DiaDaSemama.Quarta:
            return "Quarta";
        default:
            return "Dia Inválido";
    }
}
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
    StatusCodes[StatusCodes["BadGateway"] = 500] = "BadGateway";
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes.Success);
var statusCodes = StatusCodes.Success;
if (statusCodes === StatusCodes.Success) {
    console.log("A solicitação foi bem sucedida");
}
else if (statusCodes === StatusCodes.NotFound) {
    console.log("A solicitação não foi bem sucedida");
}
else if (statusCodes === StatusCodes.Accepted) {
    console.log("A solicitação foi aceita para posterior processamento, aguarde");
}
else if (statusCodes === StatusCodes.BadRequest) {
    console.log("Houve um erro na solicitação");
}
else if (statusCodes === StatusCodes.BadGateway) {
    console.log("Erro interno do servidor");
}
else {
    console.log("Código de status desconhecido");
}
