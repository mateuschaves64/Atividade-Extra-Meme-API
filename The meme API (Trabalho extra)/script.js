const botao = document.getElementById("btnbuscar"); //Funcão que traduz o botão do html para o js
const resultado = document.getElementById("resultado"); //define primeira etapa de lincagem com o site

// Adiciona o evento de clique ao botão
botao.addEventListener("click", buscarmeme);

async function buscarmeme() {
    resultado.innerHTML = '<p>Carregando meme...</p>';

    try {
        // A API de memes geralmente não precisa de parâmetros para um meme aleatório
        const resposta = await fetch(`//meme-api.com/gimme/wholesomememes`);


        if (!resposta.ok) {
            throw new Error("Falha ao gerar o meme");
        }
        const meme = await resposta.json();
        mostrarmeme(meme);


    } catch (erro) {
        resultado.innerHTML = `<p class="erro">Erro: ${erro.message}</p>`;
    }
}

function mostrarmeme(meme) {
    // cria uma estrutura da Meme API é: titulo, url, autor e nome do subreddit.
    resultado.innerHTML = `
        <div class="card">
          <img src="${meme.url}" alt="${meme.title}" style="max-width: 100%; border-radius: 10px;">
          <p>Postado por: <strong>${meme.author}</strong> no subreddit <strong>${meme.subreddit}</strong></p>
        </div>
      `;
}