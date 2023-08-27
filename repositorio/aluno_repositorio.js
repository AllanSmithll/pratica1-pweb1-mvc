class AlunoRepositorio {

    constructor() {
        this._alunos = [];
    }

    inserir(aluno) {
        this._alunos.push(aluno);
    }

    remover(matricula) {
        const indxAlunoARemover = this.alunos.findIndex(aluno => aluno._matricula === matricula);
        if (indxAlunoARemover > -1) {
            this._alunos.splice(indxAlunoARemover, 1);
        }
    }

    listar() {
        return this._alunos;
    }
}
