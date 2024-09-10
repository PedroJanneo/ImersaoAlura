function pesquisa() {
  // Seleciona a seção onde os resultados serão exibidos
  let sessao = document.getElementById("resultados-pesquisa");

  // Obtém o termo de pesquisa (não utilizado nesta função)
  let termoPesquisa = document.getElementById("pesquisa").value;

  // Inicializa a string para armazenar os resultados
  let resultado = '';
  termoPesquisa = termoPesquisa.toLowerCase();
  // Verifica se o termo de pesquisa está vazio
  if (!termoPesquisa ) {
    sessao.innerHTML = "<p><b>Nenhum personagem encontrado. Você não pesquisou nenhum personagem ou caracteristica</b></p>";
    return;
  }
let nome = '';
let descricao = '';
let tags = '';
  // Altera sobre os personagens e constrói o HTML dos resultados
  for (let personagem of personagens) {
      nome = personagem.nome.toLowerCase();
      descricao = personagem.descricao.toLowerCase();
      tags = personagem.tags.toLowerCase();
    if (nome.includes(termoPesquisa) || descricao.includes(termoPesquisa) || tags.includes(termoPesquisa)) {
      resultado += `
     <div class="item-resultado">
      <h2>
      <a href="#" target="_blank">${personagem.nome}</a>
      </h2>
      <p class="descricao-meta">${personagem.descricao}</p>
      <img class='imagem' src="${personagem.img1}" alt="Imagem 1"></img> <img class='imagem' src="${personagem.img2}" alt="Imagem 2"></img><img class='imagem' src="${personagem.img3}" "></img><br>
      <a href="${personagem.link}" target="_blank">Clique aqui</a>
      </div>
      `;
     
    }
  }

    if ( !resultado ){
      resultado = '<p><b> nada foi encontrado</b></p>'
    }
  // Atualiza a seção com os resultados
  sessao.innerHTML = resultado;
}