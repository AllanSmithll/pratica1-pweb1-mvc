class DisciplinaControlador {

    constructor() {
        this._servico = new DisciplinaService();
    }

    inserir() {
        const codigoElemento = document.querySelector("#codigo");
        const nomeElemento = document.querySelector("#nomeDisc");
        if (codigoElemento === null || codigoElemento.value === ""
            || nomeElemento === null || nomeElemento.value === "") {
            throw new Error("Algum campo está vazio! Escreva algo.");
        }
        const disciplinaInserida = this._servico.inserir(Number(codigoElemento.value), nomeElemento.value);
        const listaDisciplinasElemento = document.querySelector("#lista_disciplinas");
        if (disciplinaInserida) {
            this.inserirDisciplinaNoHtml(disciplinaInserida, listaDisciplinasElemento);
        }
    }

    inserirAlunoNaDisciplina() {
        const matriculaElemento = document.querySelector("#matriculaEmDisc");
        const codigoElemento = document.querySelector("#codigoEmDisc");
        if (matriculaElemento === null || matriculaElemento.value === ""
        || codigoElemento === null || codigoElemento.value === "") {
            throw new Error("Algum campo está vazio! Escreva algo.");
        }
        const alunoInserido = this._servico.inserirAlunoNaDisciplina(
            Number(matriculaElemento.value),
            Number(codigoElemento.value)
        );
        const listaAlunosElemento = document.querySelector("#lista_alunos");
        if (alunoInserido) {
            this.inserirAlunoNoHtml(alunoInserido, listaAlunosElemento);
        }
    }

    inserirDisciplinaNoHtml(disciplina, elementoDestino) {
        const disciplinaElemento = document.createElement("li");
        disciplinaElemento.textContent = `Código: ${disciplina.codigo} - Nome: ${disciplina.nome}`;
        elementoDestino.appendChild(disciplinaElemento );
    }

    inserirAlunoNoHtml(aluno, elementoDestino) {
        const alunoElemento = document.createElement("li");
        alunoElemento.textContent = `Matrícula: ${aluno._matricula} - Nome: ${aluno._nome}`;
        elementoDestino.appendChild(alunoElemento);
    }

    pesquisarPorCodigo(codigo) {
        return this._servico.pesquisarPorCodigo(codigo);
    }
}