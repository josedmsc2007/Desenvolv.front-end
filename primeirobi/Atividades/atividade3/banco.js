const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Dados fixos do titular da conta
const conta = {
  nome: "José Augusto Damasceno Lopes",
  agencia: "0001",
  numero: "123456-7"
};

let saldo = 1000; // saldo inicial

function formatarMoeda(valor) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(valor);
}

function exibirMenu() {
  console.log("\n===== MENU =====");
  console.log("1 - Consultar dados da conta");
  console.log("2 - Consultar saldo");
  console.log("3 - Realizar débito");
  console.log("4 - Realizar crédito");
  console.log("0 - Sair");

  rl.question("Escolha uma opção: ", (opcao) => {
    switch (opcao) {
      case '1':
        console.log(`\nNome: ${conta.nome}`);
        console.log(`Agência: ${conta.agencia}`);
        console.log(`Conta: ${conta.numero}`);
        exibirMenu();
        break;

      case '2':
        console.log(`\nSaldo atual: ${formatarMoeda(saldo)}`);
        exibirMenu();
        break;

      case '3':
        rl.question("Valor para débito: ", (valor) => {
          const debito = parseFloat(valor);

          if (isNaN(debito) || debito <= 0) {
            console.log("\nValor inválido.");
          } else if (debito > saldo) {
            console.log("\nSaldo insuficiente.");
          } else {
            saldo -= debito;
            console.log(`\nDébito realizado. Novo saldo: ${formatarMoeda(saldo)}`);
          }
          exibirMenu();
        });
        break;

      case '4':
        rl.question("Valor para crédito: ", (valor) => {
          const credito = parseFloat(valor);

          if (isNaN(credito) || credito <= 0) {
            console.log("\nValor inválido.");
          } else {
            saldo += credito;
            console.log(`\nCrédito realizado. Novo saldo: ${formatarMoeda(saldo)}`);
          }
          exibirMenu();
        });
        break;

      case '0':
        console.log("\nEncerrando o sistema...");
        rl.close();
        break;

      default:
        console.log("\nOpção inválida.");
        exibirMenu();
    }
  });
}

exibirMenu();