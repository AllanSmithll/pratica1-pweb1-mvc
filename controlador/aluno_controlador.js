class AlunoControlador {

    constructor() {
        this.servico = new AlunoService();
    }

    inserir() {
        const nomeElemento = document.querySelector("#nome");
        const idadeElemento = document.querySelector("#idade");
        const matriculoElemento = document.querySelector("#matriculaAluno");
        if (idadeElemento === null || idadeElemento.value === ""
            || nomeElemento === null || nomeElemento.value === ""
            || matriculoElemento === null || matriculoElemento.value === "") {
            throw new Error("Algum campo está vazio! Escreva algo.");
        }
        const alunoInserido = this.servico.inserir(nomeElemento.value, Number(idadeElemento.value),
            matriculoElemento.value);
        const listaAlunosElemento = document.querySelector("#listaAlunos");
        if (alunoInserido) {
            this.inserirAlunoNoHtml(alunoInserido, listaAlunosElemento);
        }
    }

    inserirAlunoNoHtml(aluno, elementoDestino) {
        const alunoElemento = document.createElement("li");
        alunoElemento.textContent = `Nome: ${aluno._nome} - Idade: ${aluno._idade}`;
        elementoDestino.appendChild(alunoElemento);
    }

    pesquisarPorMatricula(matricula) {
        return this.servico.pesquisarPorMatricula(matricula);
    }
}
