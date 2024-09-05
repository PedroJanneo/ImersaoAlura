function pesquisa() {
    // Seleciona o elemento HTML com o ID "resultados-pesquisa" para exibir os resultados.
    let sessao = document.getElementById("resultados-pesquisa");
  
    // Seleciona o elemento HTML com o ID "pesquisa" (não utilizado nesta função).
    let p = document.getElementById("pesquisa");
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultado = '';
  
    // Itera sobre cada personagem no array "personagens".
    for (let personagem of personagens) {
      // Constrói o HTML para cada item do resultado da pesquisa.
      resultado += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${personagem.nome}</a>
          </h2>
          <p class="descricao-meta">${personagem.descricao}</p>
          <a href=${personagem.link} target="_blank">Clique aqui</a>
        </div>
      `;
    }
  
    // Atribui o HTML gerado ao elemento "sessao", atualizando a página com os resultados.
    sessao.innerHTML = resultado;
  }