class DisciplinaService {
    constructor() {
        this._repositorio = new DisciplinaRepositorio();
    }

    inserirDisciplina(codigo, nome) {
        const discPesquisada = this.pesquisarDisciplinaPorCodigo(codigo);
        if (discPesquisada.length > 0) {
            throw new Error('Disciplina já cadastrada!');
        }
        const discNova = new Disciplina(codigo, nome);
        this._repositorio.inserirDisciplina(discNova);
        return discNova;
    }

    inserirAluno(matricula, nome, idade) {
        const alunoPesquisado = this.pesquisarAlunoPorMatricula(matricula);
        if (alunoPesquisado.length > 0) {
            throw new Error('Aluno já cadastrado na disciplina!');
        }
        const alunoNovo = new Aluno(nome, idade, matricula);
        this._repositorio.inserirAluno(alunoNovo);
        return alunoNovo;
    }

    pesquisarDisciplinaPorCodigo(codigo) {
        return this._repositorio.listarDisciplinas().filter(
            disc => disc._codigo === codigo);
    }

    pesquisarAlunoPorMatricula(matricula) {
        return this._repositorio.listarAlunos().filter(
            alu => alu._matricula === matricula);
    }

    removerAlunoDaDisciplina(matricula) {
        this._repositorio.removerAluno(matricula);
    }

    removerDisciplina(codigo) {
        this._repositorio.removerDisciplina(codigo);
    }
}
