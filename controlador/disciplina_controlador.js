class DisciplinaControlador {

    constructor() {
        this.servico = new DisciplinaService();
    }

    inserir() {
        const codigoElemento = document.querySelector("#codigo");
        const nomeElemento = document.querySelector("#nome");
        if (codigoElemento === null || codigoElemento.value === ""
            || nomeElemento === null || nomeElemento.value === "") {
            throw new Error("Algum campo está vazio! Escreva algo.");
        }
        const disciplinaInserida = this.servico.inserir(
            Number(codigoElemento.value),
            nomeElemento.value
        );
        
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
        const alunoInserido = this.servico.inserirAlunoNaDisciplina(
            matriculaElemento.value,
            Number(codigoElemento.value)
        );

        const listaDisciplinasElemento = document.querySelector("#lista_alunos");
        if (alunoInserido) {
            this.inserirAlunosNoHtml(codigoElemento.value, alunoInserido.nome, listaDisciplinasElemento);
        }
    }

    inserirDisciplinaNoHtml(disciplina, elementoDestino) {
        const disciplinaElemento = document.createElement("li");
        disciplinaElemento.textContent = `Código: ${disciplina.codigo} - Nome: ${disciplina.nome}`;
        elementoDestino.appendChild(disciplinaElemento );
    }

    inserirAlunosNoHtml(codigo, aluno, elementoDestino) {
        const disciplinaElemento = document.createElement("li");
        disciplinaElemento.textContent = `Código da disciplina: ${codigo} - Aluno: ${aluno}`;
        elementoDestino.appendChild(disciplinaElemento);
    }
}