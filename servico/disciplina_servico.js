class DisciplinaService {
    constructor() {
        this._repositorio = new DisciplinaRepositorio();
    }

    inserirDisciplina(codigo, nome) {
        const discPesquisada = this.pesquisarPorCodigo(codigo);
        if (discPesquisada.length > 0) {
            throw new Error('Disciplina já cadastrada!');
        }
        const discNova = new Disciplina(codigo, nome);
        this._repositorio.inserirDisciplina(discNova);
        return discNova;
    }

    inserirAlunoNaDisciplina(matricula, codigo) {
        this._repositorio.inserirAlunoNaDisciplina(matricula, codigo);
        return matricula;
    }

    pesquisarPorCodigo(codigo) {
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
