function pesquisar() {
  // Essa função é acionada quando o botão de pesquisa é clicado.
  // Seu objetivo é buscar os dados, formatá-los e exibi-los na seção "resultados-pesquisa".

  console.log("Clicou"); // Mensagem de debug para confirmar que a função foi chamada.

  // Seleciona o elemento HTML com o ID "resultados-pesquisa" onde os resultados serão exibidos.
let section = document.getElementById("resultados-pesquisa");
console.log(section); // Verifica se o elemento foi encontrado.

let campo_pesquisa = document.getElementById("campo-pesquisa").value
console.log("campo-pesquisa");
  
if(campo_pesquisa == ""){
  section.innerHTML = "<p>Não encontrado</p>"
  return 
};

// Inicializa uma string vazia para armazenar os resultados formatados.
let resultados = "";
let titulo = "";
let descricao = "";
let tags = ""

// Itera sobre cada item (dado) na lista de dados.
for (let dado of dados) {
  titulo = dado.titulo.toLowerCase()
  descricao = dado.descricao.toLowerCase()
  tags = dado.tags.toLowerCase()
  // Se titulo estiver incluso no campo_pesquisa
  if(titulo.includes(campo_pesquisa) || descricao.includes(campo_pesquisa) || tags.includes(campo_pesquisa)){
    // Concatena HTML para cada dado, formatando-o como um item de resultado.
    // O sinal de adição += é usado para adicionar o novo HTML à string 'resultados'.
    resultados += `
    <div class="item-resultado">
      <h2>
        <a href="#" target="_blank">${dado.titulo}</a>
      </h2>
      <p class="descricao-meta">${dado.descricao}</p>
      <a href="${dado.link}" target="_blank">Mais informações</a>
    </div>
`;

  }
};
if (!resultados){
  resultados = "<p>Não foi encontrado</p>"
};

  // Atribui o HTML formatado ao conteúdo interno da seção de resultados.
  section.innerHTML = resultados;
};

let campoPesquisa = document.getElementById("campo-pesquisa");

