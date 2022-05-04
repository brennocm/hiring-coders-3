var valores = [8, 7, 6, 5, 4, 3, 2 ,1];

function ordena(){
    let inicio = 0;
    let fim = 8;
    let tempo;

    for (vezes = 0; vezes < 8; vezes++){
        for(pos = inicio; pos < fim - 1; pos++){
            if(valores[pos] > valores [pos + 1]){
                tempo = valores[pos];
                valores[pos] = valores[pos + 1];
                valores[pos + 1] = tempo;
            }
        }
    }
}

ordena();
console.log("Vetor ordenando....")
console.log(valores);