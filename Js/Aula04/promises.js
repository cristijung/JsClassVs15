//promises

const tempo = (duration) => {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, duration);
    });
  };  
  tempo(4000).then(function () {
    console.log("Apareceu depois de 4s");
  });

  //sintaxe da promise com a execução do fluxo
  function minhaFuncao() {
    return new Promise((resolve, reject) => {
        const sucesso = true;

        if (sucesso) {
            resolve('Operação bem sucedida!!');
        } else {
            reject('Erro na operação!')
        }
    });
  }

  minhaFuncao()
  .then((resultado) => {
    console.log(resultado);
  })

  .catch((erro) => {
    console.error(erro);
  })