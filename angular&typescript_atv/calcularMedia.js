function calcularMedia() {
    var notas = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        notas[_i] = arguments[_i];
    }
    if (notas.length === 0) {
        throw new Error("É necessário informar ao menos uma nota.");
    }
    var soma = notas.reduce(function (total, nota) { return total + nota; }, 0);
    return soma / notas.length;
}
// Chamando a função com três notas
var media = calcularMedia(7.5, 8.0, 9.2);
console.log("A m\u00E9dia das notas \u00E9: ".concat(media.toFixed(2)));
