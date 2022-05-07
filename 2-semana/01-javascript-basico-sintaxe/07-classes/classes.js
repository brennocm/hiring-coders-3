class matematica{
    soma(valorA, valorB){
        return valorA + valorB;
    }
    subtracao(valorA, valorB){
        return valorA - valorB;
    }
    multipilcacao(valorA, valorB){
        return valorA * valorB;
    }
}

var intanciaMatematica = new matematica();

var resultado = intanciaMatematica.multipilcacao(5, 8);

console.log(resultado);