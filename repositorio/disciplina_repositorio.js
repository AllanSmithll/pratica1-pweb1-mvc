class DisciplinaRepositorio {

    constructor() {
        this._disciplinas = [];
    }

    inserir(disciplina) {
        this._disciplinas.push(disciplina);
    }

    inserirAlunoNaDisciplina(aluno, disciplina) {
        const idx = this._disciplinas.indexOf(disciplina);
        this._disciplinas[idx].alunos.push(aluno);
    }

    atualizarNome(indice, novoNome) {
        this._disciplinas[indice].nome = novoNome;
    }

    listar() {
        return this._disciplinas;
    }

    remover(indice) {
        this._disciplinas.splice(indice, 1);
    }
}
