var possivelValor = 0;
var numeroSorteado = 10;
var achou = false;

while(!achou){
    possivelValor += 1;
    
    if(numeroSorteado === possivelValor){
        achou = true;
    } else {
        console.log('possivel valor não corresponde ao numero sorteado ' + possivelValor);
    }
}