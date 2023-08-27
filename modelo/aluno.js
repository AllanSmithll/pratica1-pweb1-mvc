class Aluno {

    constructor(nome, idade, matricula) {
        this._nome = nome;
        this._idade = idade;
        this._matricula = matricula;
    }

    get nome() {
        return this._nome;
    }

    set nome(novoNome) {
        this._nome = novoNome;
    }

    get idade() {
        return this._idade;
    }

    set idade(novaIdade) {
        this._idade = novaIdade;
    }

    get matricula() {
        return this._matricula;
    }

    set matricula(novaMatricula) {
        this._matricula = novaMatricula;
    }
}
