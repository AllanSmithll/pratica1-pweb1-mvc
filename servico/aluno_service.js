class AlunoService {
    constructor() {
        this._repositorio = new AlunoRepositorio();
    }

    inserir(nome, idade, matricula) {
        const alunoPesquisado = this.pesquisarPorMatricula(matricula);
        if (alunoPesquisado.length > 0) {
            throw new Error('Aluno já cadastrado!');
        }
        if (idade < 18) {
            throw new Error("Aluno menor de idade não pode inserido.")
        }
        const alunoNovo = new Aluno(nome, idade, matricula);
        this._repositorio.inserir(alunoNovo);
        return alunoNovo;
    }

    pesquisarPorMatricula(matricula) {
        return this._repositorio.listar().filter(
            aluno => aluno._matricula === matricula);
    }

    remover(matricula) {
        this._repositorio.remover(matricula);
    }
}
