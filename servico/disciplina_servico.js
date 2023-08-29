class DisciplinaService {
    constructor() {
        this._repositorio = new DisciplinaRepositorio();
    }

    inserir(codigo, nome) {
        const discPesquisada = this._repositorio.listar().filter(disc => disc.codigo === codigo)
        if (discPesquisada.length > 0) {
            throw new Error('Disciplina já cadastrada!');
        }
        const discNova = new Disciplina(codigo, nome);
        this._repositorio.inserir(discNova);
        return discNova;
    }

    inserirAlunoNaDisciplina(matricula, codigo) {
        const alunoPesquisado = controladorAluno.servico.pesquisarPorMatricula(matricula);
        if (alunoPesquisado.length === 0) {
            throw new Error("Aluno não foi cadastrado!");
        }
        const discPesquisada = this._repositorio.listar().filter(disc => disc.codigo === codigo);
        if (discPesquisada.length === 0) {
            throw new Error("Disciplina não foi cadastrada!");
        }
        if (discPesquisada[0].alunos.indexOf(alunoPesquisado[0]) !== -1) {
            throw new Error("Aluno já foi cadastrado nesta disciplina!");
        }
       this._repositorio.inserirAlunoNaDisciplina(alunoPesquisado[0], discPesquisada[0]);
        return alunoPesquisado[0];
    }

    atualizarNome(codigo, novoNome) {
        const idx = this._repositorio._disciplinas.indexOf(codigo);
        if (idx == -1) {
            throw new Error("Disciplina não foi cadastrada!")
        }
        this._repositorio.atualizarNome(idx, novoNome);
    }

    pesquisarPorCodigo(codigo) {
        const resultado = this._repositorio.listar().filter(disc => disc.codigo === codigo);
        return resultado[0];
    }

    remover(matricula) {
        this._repositorio.removerAluno(matricula);
    }

    removerDisciplina(codigo) {
        const idx = this._repositorio._disciplinas.indexOf(codigo);
        if(idx === -1) {
            throw new Error("Disciplina não foi cadastrada!");
        }
        this._repositorio.remover(idx);
    }
}
