function calcularMedia(...notas: number[]): number {
  if (notas.length === 0) {
    throw new Error("É necessário informar ao menos uma nota.");
  }

  const soma = notas.reduce((total, nota) => total + nota, 0);
  return soma / notas.length;
}

// Chamando a função com três notas
const media = calcularMedia(7.5, 8.0, 9.2);
console.log(`A média das notas é: ${media.toFixed(2)}`);
