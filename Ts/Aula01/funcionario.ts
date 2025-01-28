//---------------------------------------------------------------------------
/*Um funcionário de uma empresa recebe aumento salarial anualmente. Sabe-se que:
Esse funcionário foi contratado em 2013, com salário inicial de R$1000,00;
A cada ano o funcionário recebe um aumento salarial de 1,5%;
A partir de 2017 em diante, os aumentos salariais passaram a ser o dobro do percentual do ano anterior
Faça um programa que determine e imprima o salário desse funcionário com o passar dos anos até o ano atual,
Imprima o percentual de aumento com o passar dos anos
E imprima o percentual de aumento total que o salário dele teve em comparação à 2013;
*/

interface Funcionario {
    anoContratacao: number;
    salarioAtual: number;
    aumentoAnual: number;
  }
  
  function calcularSalarioAnual(funcionario: Funcionario, anoAtual: number): void {
    const salarioInicial = 1000;
    let salario = salarioInicial;
    let percentualAumentoTotal = 0;
  
    console.log('Ano | Salário | Percentual de Aumento | Percentual de Aumento Total');
    console.log('----|---------|------------------------|---------------------------');
  
    for (let ano = funcionario.anoContratacao; ano <= anoAtual; ano++) {
      salario += salario * (funcionario.aumentoAnual / 100);
      percentualAumentoTotal += funcionario.aumentoAnual;
  
      console.log(`${ano} | R$${salario.toFixed(2)} | ${funcionario.aumentoAnual}% | ${percentualAumentoTotal}%`);
      
      if (ano >= 2017) {
        funcionario.aumentoAnual *= 2;
      }
    }
  
    const percentualAumentoTotalEmRelacaoA2013 = ((salario - salarioInicial) / salarioInicial) * 100;
    console.log(`Percentual de Aumento Total em relação a 2013: ${percentualAumentoTotalEmRelacaoA2013.toFixed(2)}%`);
  }
  
  const funcionario: Funcionario = {
    anoContratacao: 2013,
    salarioAtual: 1000,
    aumentoAnual: 1.5,
  };
  
  const anoAtual = new Date().getFullYear();
  
  calcularSalarioAnual(funcionario, anoAtual);
  