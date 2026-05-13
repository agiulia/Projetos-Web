function criar_tarefa() {
    let nome = document.getElementById("nome").value;
    let prioridade = document.getElementById("prioridade").value;
    let cor;

    let tarefa = document.createElement("p");
    tarefa.innerText = "Nome da Tarefa: " + nome;

    let card = document.createElement("div");
    card.appendChild(tarefa);

    if (prioridade === "alta") {
        card.classList.add("danger");
    }

    else if (prioridade === "media") {
        cor = "yellow";
    }

    else {
        cor = "green";
    }

    document.body.appendChild(card);
}