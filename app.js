// Array para armazenar os nomes dos amigos
let amigos = [];

function adicionarAmigo() {
    
    const inputAmigo = document.getElementById("amigo");
    const nomeAmigo = inputAmigo.value.trim();
    
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
        return; 
    }
    
    amigos.push(nomeAmigo);
    
    // Limpa o campo de entrada após adicionar o nome
    inputAmigo.value = "";
    
}