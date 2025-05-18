enum DiaSemana {
  Domingo,
  Segunda,
  Terca,
  Quarta,
  Quinta,
  Sexta,
  Sabado
}

function obterNomeDia(dia: number): string {
  switch (dia) {
    case DiaSemana.Domingo:
      return "Domingo";
    case DiaSemana.Segunda:
      return "Segunda-feira";
    case DiaSemana.Terca:
      return "Terça-feira";
    case DiaSemana.Quarta:
      return "Quarta-feira";
    case DiaSemana.Quinta:
      return "Quinta-feira";
    case DiaSemana.Sexta:
      return "Sexta-feira";
    case DiaSemana.Sabado:
      return "Sábado";
    default:
      return "Dia inválido";
  }
}

// Definindo o dia atual como uma constante
const diaAtual = 3; // Por exemplo, 3 = Quarta-feira

// Mostrando o resultado
console.log(`Hoje é: ${obterNomeDia(diaAtual)}`);