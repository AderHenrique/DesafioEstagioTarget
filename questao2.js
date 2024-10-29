function verificaFibonacci(numero) {
  let a = 0;
  let b = 1;
  let pertence = false;

  // Tratamos os casos especiais para 0 e 1
  if (numero === 0 || numero === 1) {
    pertence = true;
  } else {
    // Gerando números
    while (b <= numero) {
      if (b === numero) {
        pertence = true;
        break;
      }

      // Atualiza os números de Fibonacci
      let temp = b;
      b = a + b;
      a = temp;
    }
  }

  if (pertence) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
  }
}

// Exemplo de uso
const numeroInformado = 21; // Altere isso para verificar outros números
verificaFibonacci(numeroInformado);
