function adicionarElemento() {
    const inputItem = document.querySelector("#item");
    const texto = inputItem.value.trim();

    if (texto === "") {
        alert("Informe o que deseja comprar.");
        return;
    }

    const lista = document.getElementById("lista");
    const novoItem = document.createElement("li");
    novoItem.textContent = texto;
    lista.appendChild(novoItem);

    inputItem.value = ""; // limpa o campo
    inputItem.focus(); // volta o foco pro input
}

function removerElemento() {
    const lista = document.getElementById("lista");
    if (lista.firstChild) {
        lista.removeChild(lista.firstChild);
        alert("Item removido com sucesso!");
    } else {
        alert("A lista já está vazia.");
    }
}

// Conecta os botões às funções
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("add").addEventListener("click", adicionarElemento);
    document.getElementById("remover").addEventListener("click", removerElemento);
});