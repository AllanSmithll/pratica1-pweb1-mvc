class Disciplina {

    constructor(codigo, nome) {
        this._codigo = codigo;
        this._nome = nome;
        this._alunos = [];
    }

    get codigo() {
        return this._codigo;
    }

    set codigo(novoCodigo) {
        this._codigo = novoCodigo;
    }

    get nome() {
        return this._nome;
    }

    set nome(novoNome) {
        this._nome = novoNome;
    }

    get alunos() {
        return this._alunos;
    }
}
