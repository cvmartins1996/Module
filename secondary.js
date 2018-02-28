
var Module = (function () {

    var manipularVar =  8;
    var soma = 5 + 8;

    var somaDeDoisValores = function () {
        console.log("Soma de dois valores: ", soma);
    };
   
    var divisao = function () {
        var divisao = soma/manipularVar;
        return divisao;
    }
   
    var manipularOito = function () {
        manipularVar = 12
        console.log("manipulando variaveis: ", manipularVar);
        console.log("Exibir a divisao: " + divisao());
    };

    return {
        /*somaDeTresValores : function() {
            var soma = 5 + 8 + 11;
            console.log("Soma de tres valores: ", soma);
        },*/
        /**
         * expor um metodo desse jeito ou o de cima comentado
         */
        somaDeDoisValores : somaDeDoisValores,
        manipularOito : manipularOito
    };
});