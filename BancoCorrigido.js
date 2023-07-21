// PROJETO BANCARIO, CAIXA ELETRONICO

//pedindo nome
let nomeCliente = prompt("Digite seu nome: ");

// variaveis de saque, deposito, extrato
let saldo = 0;
let saque = 0;
let numeroSaque = 0;
let deposito = 0;
let extrato = "";
let limite = 500;
const limiteSaque = 3;

while (true) {
  let opcao = parseInt(
    prompt(` Digite qual opção você deseja. 
Digite 1 para Deposito, 2 para Saque, 3 para Extrato, 4 para SAIR`)
  );

  //deposito
  if (opcao == 1) {
    deposito = parseFloat(
      prompt("Olá, " + nomeCliente + " Digite o valor que deseja depositar:")
    );
    if (deposito <= 0) {
      alert("Número negativo, depósito NÃO REALIZADO.");
    } else {
      alert("Depósito do valor R$ " + deposito + " realizado com sucesso.");
      saldo += deposito;
      extrato += `Depósito do R$${deposito} \n`;
    }

    //saque
  } else if (opcao == 2) {
    saque = parseFloat(
      prompt("Olá, " + nomeCliente + " Digite o valor que você deseja sacar:")
    );
    excedeuSaldo = saque > saldo;
    excedeuLimite = saque > limite;
    excedeuSaque = numeroSaque >= limiteSaque;

    if (excedeuSaldo) {
      alert("Operação falhou! Você não tem saldo suficiente!");
    } else if (excedeuLimite) {
      alert("Operação falhou! Valor excede o limite.");
    } else if (excedeuSaque) {
      alert("Operação falhou! Número máximo de saques excedido.");
    } else if (saque > 0) {
      saldo -= saque;
      extrato += `Saque de R$${saque} \n`;
      alert(`Saque de R$${saque} realizado com sucesso.`);
      numeroSaque++;
    } else {
      alert("O número informado é inválido. saque NÃO REALIZADO.");
    }
  }

  //extrato
  else if (opcao == 3) {
    mensagem =
      extrato == true ? "Não foram realizadas movimentações." : extrato;
    alert(`
    ===============EXTRATO===============
    ${nomeCliente},
    ${mensagem}
    Saldo: R$${saldo.toFixed(2)}
    =====================================
    `);
  }

  //sair do sistema
  else if (opcao == 4) {
    alert(nomeCliente + ", Fechando o sistema.");
    break;
  } else {
    alert("Digite uma opção válida.");
  }
}
