
var Module = (function () {

    var somaDeDoisValores = function () {
        var soma = 5 + 8;
        console.log("Soma de dois valores: ", soma);
    };

    return {
        /*somaDeTresValores : function() {
            var soma = 5 + 8 + 11;
            console.log("Soma de tres valores: ", soma);
        },*/
        /**
         * expor um metodo desse jeito ou o de cima comentado
         */
        somaDeDoisValores : somaDeDoisValores
    };
});