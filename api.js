fetch("https://jsonplaceholder.typicode.com/users")
    .then(resposta=>resposta.json())
    .then(dados=> {
        console.log(dados);
    });
async function buscarUsuarios() {
        const resposta = await fetch("https://jsonplaceholder.typicode.com/users");
        const dados = await resposta.json();
        console.log(dados);
}
buscarUsuarios();
async function carregarUsuarios() {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/users");
    const usuarios = await resposta.json();
    const container = document.getElementById("usuarios");
    usuarios.forEach(usuario=> {
        container.innerHTML+= <p>${usuario.name} ${usuario.name} - ${usuario.email}</p>;
    });
}
carregarUsuarios();
async function carregarPost() {
    // 1. Fetching "posts" instead of "users" to get titles and bodies
    const resposta = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await resposta.json();
    
    const container = document.getElementById("posts");

    // 2. Clear container in case of re-runs
    container.innerHTML = "";

    posts.slice(0, 5).forEach(post => {
        // 3. Using template literals with the correct dot notation
        container.innerHTML += `
        <div class="card">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        </div>
        `;
    });
}

carregarPost();
async function buscarDados() {
    
}

//////////////////////////////////////////////////////////