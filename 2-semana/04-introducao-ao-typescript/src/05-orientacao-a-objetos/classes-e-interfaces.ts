class Usuario{
    public nome;
    public idade;

     constructor(nome: string, idade:number){
        this.nome = nome;
        this.idade = idade;
     }
}

class Player extends Usuario {
    public jogo;

    constructor(nome: string, idade: number, jogo:string){
        super(nome, idade);

        this.jogo = jogo;
    }
    
    dizerOJogoAtual(){
        return `No momento, estou jogando ${this.jogo}`;
    }

    static queHorasSao(){
        return Date();
    }
}

// const jogador = new Player('Brenno', 20, 'God Of War');
// console.log(jogador.dizerOJogoAtual());
// console.log(Player.queHorasSao());

//private, protected, public
class jogo{
    public nome;

    constructor(nome: string){
        this.nome = nome;
    }

    dizerNome(){
        return `O nome do jogo é: ${this.nome}`
    }
}

const godOfWar = new jogo('God Of War');
console.log(godOfWar);