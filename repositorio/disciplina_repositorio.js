class DisciplinaRepositorio {

    constructor() {
        this._disciplinas = [];
    }

    inserir(disciplina) {
        this._disciplinas.push(disciplina);
    }

    inserirAlunoNaDisciplina(aluno, disciplina) {
        const idx = this_disciplinas.indexOf(disciplina);
        this._disciplinas[idx].alunos.push(aluno);
    }

    atualizarNome(indice, novoNome) {
        this._disciplinas[indice].nome = novoNome;
    }

    listar() {
        return this._disciplinas;
    }

    removerAluno(matricula) {
        const indxAlunoARemover = this._disciplinas.findIndex(aluno => aluno._matricula === matricula);
        if (indxAlunoARemover > -1) {
            this._disciplinas.splice(indxAlunoARemover, 1);
        }
    }

    removerDisciplina(codigo) {
        const indxDisciplinaARemover = this._disciplinas.findIndex(disc => disc._codigo === codigo);
        if (indxDisciplinaARemover > -1) {
            this._disciplinas.splice(indxDisciplinaARemover, 1);
        }
    }
}
