function principal(): void{
    console.log('execuntado')
}

function funcaoQueNuncaRetorna(): never{
    throw new Error('ola');
}