class DisciplinaService {
    constructor() {
        this._repositorio = new DisciplinaRepositorio();
        this._alunoService = new AlunoService();
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

    inserirAlunoNaDisciplina(matricula) {
        const alunoPesquisado = this._alunoService.pesquisarPorMatricula(matricula);
        if (!alunoPesquisado) {
            throw new Error('Aluno não existe!');
        }
        this._repositorio.inserirAlunoNaDisciplina(alunoPesquisado);
        return alunoPesquisado;
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
