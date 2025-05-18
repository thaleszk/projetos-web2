var DiaSemana;
(function (DiaSemana) {
    DiaSemana[DiaSemana["Domingo"] = 0] = "Domingo";
    DiaSemana[DiaSemana["Segunda"] = 1] = "Segunda";
    DiaSemana[DiaSemana["Terca"] = 2] = "Terca";
    DiaSemana[DiaSemana["Quarta"] = 3] = "Quarta";
    DiaSemana[DiaSemana["Quinta"] = 4] = "Quinta";
    DiaSemana[DiaSemana["Sexta"] = 5] = "Sexta";
    DiaSemana[DiaSemana["Sabado"] = 6] = "Sabado";
})(DiaSemana || (DiaSemana = {}));
function obterNomeDia(dia) {
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
var diaAtual = 3; // Por exemplo, 3 = Quarta-feira
// Mostrando o resultado
console.log("Hoje \u00E9: ".concat(obterNomeDia(diaAtual)));
