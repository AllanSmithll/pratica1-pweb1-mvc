class AlunoService {
    constructor() {
        this.repositorio = new AlunoRepositorio();
    }

    inserir(nome, idade, matricula) {
        const alunoPesquisado = this.pesquisarPorMatricula(matricula);
        if (alunoPesquisado !== undefined) {
            throw new Error('Aluno já cadastrado!');
        }
        if (idade < 18) {
            throw new Error("Aluno menor de idade não pode inserido.")
        }
        const alunoNovo = new Aluno(nome, idade, matricula);
        this.repositorio.inserir(alunoNovo);
        return alunoNovo;
    }

    pesquisarPorMatricula(matricula) {
        const resultado = this.repositorio.listar().filter(alu => alu.matricula === matricula);
        return resultado[0];
    }

    remover(matricula) {
        this.repositorio.remover(matricula);
    }
}
