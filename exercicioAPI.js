// 1. Buscar Usuários (Console)
async function buscarUsuarios() {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/users");
    const dados = await resposta.json();
    
    // Mostrando apenas Nome e Email no console
    dados.forEach(user => {
        console.log(Nome: ${user.name} | Email: ${user.email});
    });
}
buscarUsuarios();

// 2. Renderizar Usuários na Tela (Botão carregar)
async function carregarUsuarios() {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/users");
    const usuarios = await resposta.json();
    const container = document.getElementById("usuarios");
    
    container.innerHTML = ""; // Limpa antes de carregar
    usuarios.forEach(usuario => {
        container.innerHTML += <p><strong>${usuario.name}</strong> - ${usuario.email}</p>;
    });
}

// 3. Buscar 3 Posts da API e exibir lado a lado
async function carregarPostsAPI() {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await resposta.json();
    const container = document.getElementById("posts-api");

    // slice(0, 3) pega apenas os 3 primeiros
    posts.slice(0, 3).forEach(post => {
        container.innerHTML += `
            <div class="post-card">
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            </div>
        `;
    });
}
carregarPostsAPI();

// 4. Criar card de posts via formulário
function criarCardPost() {
    const titulo = document.getElementById("tituloPost").value;
    const texto = document.getElementById("textoPost").value;
    const container = document.getElementById("meus-posts-cards");

    if (titulo === "" || texto === "") {
        alert("Preencha todos os campos!");
        return;
    }

    const novoCard = `
        <div class="post-card" style="border-left: 5px solid #007bff;">
            <h3>${titulo}</h3>
            <p>${texto}</p>
        </div>
    `;

    container.innerHTML += novoCard;

    // Limpa os campos
    document.getElementById("tituloPost").value = "";
    document.getElementById("textoPost").value = "";
}