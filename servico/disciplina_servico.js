class DisciplinaService {
    constructor() {
        this._repositorio = new DisciplinaRepositorio();
    }

    inserir(codigo, nome) {
        const discPesquisada = this.pesquisarPorCodigo(codigo);
        if (discPesquisada) {
            throw new Error('Disciplina já cadastrada!');
        }
        const discNova = new Disciplina(codigo, nome);
        this._repositorio.inserir(discNova);
        return discNova;
    }

    inserirAlunoNaDisciplina(matricula, codigo) {
        const alunoPesquisado = controladorAluno.servico.pesquisarPorMatricula(matricula);
        if (alunoPesquisado === undefined) {
            throw new Error("Aluno não foi cadastrado!");
        }
        const discPesquisada = this.pesquisarPorCodigo(codigo);
        if (discPesquisada === undefined) {
            throw new Error('Disciplina não foi cadastrada!');
        }
        if (discPesquisada.alunos.indexOf(alunoPesquisado) !== -1) {
            throw new Error("Aluno já foi cadastrado nesta disciplina!");
        }
        this._repositorio.inserirAlunoNaDisciplina(alunoPesquisado, discPesquisada);
        return alunoPesquisado;
    }

    atualizarNome(codigo, novoNome) {
        const idx = this._repositorio._disciplinas.indexOf(codigo);
        if (idx === -1) {
            throw new Error("Disciplina não foi cadastrada!")
        }
        this._repositorio.atualizarNome(idx, novoNome);
    }

    pesquisarPorCodigo(codigo) {
        const resultado = this._repositorio.listar().filter(disc => disc.codigo === codigo);
        return resultado[0];
    }

    removerAlunoDaDisciplina(matricula) {
        this._repositorio.removerAluno(matricula);
    }

    removerDisciplina(codigo) {
        const idx = this._repositorio._disciplinas.indexOf(codigo);
        if(idx === -1) {
            throw new Error("Disciplina não foi cadastrada!");
        }
        this._repositorio.removerDisciplina(idx);
    }
}
