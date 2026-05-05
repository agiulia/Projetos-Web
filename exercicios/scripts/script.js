function criar_elemento() {
    let nome = document.getElementById("nome").value;
    let estado = document.getElementById("estado").value;
    let p = document.createElement("li");
    let cor = document.getElementById("cor").value;

    p.innerText = "Nome: " + nome + " | Estado: " + estado;
    p.style.color = cor;

    lista = document.getElementById("lista");
    lista.appendChild(p);
}