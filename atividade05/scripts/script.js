function criar_tarefa() {
    let nome = document.getElementById("nome").value;
    let prioridade = document.getElementById("prioridade").value;
    let container = document.getElementById("tc");

    let tarefa = document.createElement("p");
    tarefa.innerText = "Nome da Tarefa: " + nome;

    let card = document.createElement("div");
    card.appendChild(tarefa);

    card.classList.add("border");

    if (prioridade === "Alta") {
        card.classList.add("border-danger");
    }

    else if (prioridade === "Média") {
        card.classList.add("border-warning");
    }

    else {
        card.classList.add("border-success");
    }

    container.appendChild(card);
}