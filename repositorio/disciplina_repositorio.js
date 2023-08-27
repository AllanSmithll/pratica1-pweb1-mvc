class DisciplinaRepositorio {

    constructor() {
        this._alunos_matriculados = [];
        this._disciplinas = [];
    }

    inserirAluno(aluno) {
        this._alunos_matriculados.push(aluno);
    }

    inserirDisciplina(disciplina) {
        this._disciplinas.push(disciplina);
    }

    removerAluno(matricula) {
        const indxAlunoARemover = this._alunos_matriculados.findIndex(aluno => aluno.matricula === matricula);
        if (indxAlunoARemover > -1) {
            this._alunos_matriculados.splice(indxAlunoARemover, 1);
        }
    }

    removerDisciplina(codigo) {
        const indxDisciplinaARemover = this._disciplinas.findIndex(disc => disciplina.codigo === codigo);
        if (indxDisciplinaARemover > -1) {
            this._disciplinas.splice(indxDisciplinaARemover, 1);
        }
    }

    listarAlunos() {
        return this._alunos_matriculados;
    }

    listarMatriculas() {
        return this._disciplinas;
    }
}
