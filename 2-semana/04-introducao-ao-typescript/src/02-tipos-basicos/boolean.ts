

function mapearStatusDeUsuario(status: boolean){
    if (status){
        return `Usuario está ativo`;
    }else{
        return `Usuário NÃO está ativo`;
    }
}

mapearStatusDeUsuario(false);