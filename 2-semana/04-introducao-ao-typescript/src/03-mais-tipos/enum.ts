enum permissoes{
    admin,
    editor,
    comum
}

enum cores{
    red = '#ff0000',
    black = '#000'
}

const usuario = {
    nivel: permissoes.admin,
    perfil: cores.black
}

console.log(usuario);