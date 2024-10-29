function inverterString(str) {
  let stringInvertida = "";

  for (let i = str.length - 1; i >= 0; i--) {
    stringInvertida += str[i];
  }

  return stringInvertida;
}

// Entrada da string
const entrada = "Olá, mundo!";
const resultado = inverterString(entrada);

// Exibe o resultado
console.log(`String original: ${entrada}`);
console.log(`String invertida: ${resultado}`);
