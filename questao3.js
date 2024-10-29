const fs = require("fs");

fs.readFile("dados.json", "utf-8", (error, data) => {
  if (error) {
    console.error("Erro ao ler o arquivo: ", error);
    return;
  }

  const faturamento = JSON.parse(data);
  const diasComFaturamento = faturamento.filter((d) => d.valor > 0);

  const menorFaturamento = Math.min(...diasComFaturamento.map((d) => d.valor));
  const maiorFaturamento = Math.max(...diasComFaturamento.map((d) => d.valor));

  const totalFaturamento = diasComFaturamento.reduce(
    (acc, d) => acc + d.valor,
    0
  );

  const mediaMensal = totalFaturamento / diasComFaturamento.length;

  const diasAcimaDaMedia = diasComFaturamento.filter(
    (d) => d.valor > mediaMensal
  ).length;

  //Resultados
  console.log(`Menor faturamento: R$ ${menorFaturamento}`);
  console.log(`Maior faturamento: R$ ${maiorFaturamento}`);
  console.log(
    `Número de dias com faturamento acima da média mensal: ${diasAcimaDaMedia}`
  );
});
