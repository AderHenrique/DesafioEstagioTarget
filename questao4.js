const faturamentoPorEstado = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

const totalFaturamento = Object.values(faturamentoPorEstado).reduce(
  (acc, valor) => acc + valor,
  0
);

const percentualPorEstado = Object.keys(faturamentoPorEstado).map((estado) => {
  const valor = faturamentoPorEstado[estado];
  const percentual = ((valor / totalFaturamento) * 100).toFixed(2);
  return { estado, percentual };
});

// Exibe os resultados
percentualPorEstado.forEach(({ estado, percentual }) => {
  console.log(`Percentual de ${estado}: ${percentual}%`);
});
