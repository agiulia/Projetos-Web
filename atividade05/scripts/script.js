function criar_tarefa() {
    let nome = document.getElementById("nome").value;
    let prioridade = document.getElementById("prioridade").value;
    let cor;

    /* Definir a cor conforme a prioridade
    if (prioridade === "alta") {
        cor = "red";
    }

    else if (prioridade === "media") {
        cor = "yellow";
    }

    else {
        cor = "green";
    }
    */

    let tarefa = document.createElement("p");
    tarefa.innerText = "Nome da Tarefa: " + nome;

    let card = document.createElement("div");
    card.appendChild(tarefa);

    document.body.appendChild(card);
}