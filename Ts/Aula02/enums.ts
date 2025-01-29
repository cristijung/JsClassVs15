enum Cor {
  Vermelho,
  Verde,
  Amarelo,
  Azul,
}

let minhaCor: Cor = Cor.Vermelho;
console.log(minhaCor);

enum DiaDaSemama {
  Domingo, //0
  Segunda, //1
  Terça, //2
  Quarta,
  Quinta,
  Sexta,
  Sábado,
}

function obterDiaDaSemana(dia: DiaDaSemama): string {
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

enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400,
  BadGateway = 500,
}

console.log(StatusCodes.Success);

const statusCodes = StatusCodes.Success;
if (statusCodes === StatusCodes.Success) {
  console.log("A solicitação foi bem sucedida");
} else if (statusCodes === StatusCodes.NotFound) {
  console.log("A solicitação não foi bem sucedida");
} else if (statusCodes === StatusCodes.Accepted) {
  console.log("A solicitação foi aceita para posterior processamento, aguarde");
} else if (statusCodes === StatusCodes.BadRequest) {
  console.log("Houve um erro na solicitação");
} else if (statusCodes === StatusCodes.BadGateway) {
  console.log("Erro interno do servidor");
} else {
  console.log("Código de status desconhecido");
}
