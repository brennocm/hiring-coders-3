var elementos = [];
var topo = -1;
const TAMANHOmax = 10;

function push(num){
    if(topo < TAMANHOmax){
        topo = topo +1;
        elementos[topo] = num;
    } else{
        console.log("Pilha está cheia");
    }
}

function pop(){
    if (topo != -1){
        let num = elementos[topo];
        topo = topo -1;
        return num;
    } else {
        console.log("Pilha está vazia");
    }
}

function estaVazia(){
    return topo == -1;
}

// .: -- Parte do código que usa a pilha

var numDecimal = 10;
var resto;

while(numDecimal != 1){
    resto = parseInt(numDecimal % 2);
    push(resto);
    numDecimal = parseInt(numDecimal / 2);
}

while(!estaVazia()){
    console.log(pop());
}