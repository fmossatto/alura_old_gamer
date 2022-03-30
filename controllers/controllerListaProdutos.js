import { produtosService } from "../services/produtoService.js";

/*  Captura as tags de vitrine do html e chama a função responsável
    por carregar os dados...
*/
const inicializaElementos = () => {
  let vitrineLancamento = document.querySelector("[data-vitrineLancamentos]");
  let vitrineConsoles = document.querySelector("[data-vitrineConsoles]");
  let vitrineDiversos = document.querySelector("[data-vitrineDiversos]");

  for (let i = 1; i < 5; i++) {
    vitrineLancamento.appendChild(carregaProdutos("", i));
    vitrineConsoles.appendChild(carregaProdutos("consoles", i));
    vitrineDiversos.appendChild(carregaProdutos("outros", i));
  }
};

/*  carrega os produtos na vitrine de acordo com a categoria, caso a categoria
    for vazia pega os últimos produtos como lançamentos...
*/
const carregaProdutos = (categoria, index) => {
  let vitrineCard = document.createElement("div");

  produtosService.listarProdutos().then((dados) => {
    let produtos = [];

    dados.map((produto) => {
      if (produto.categoria == categoria || categoria == "")
        produtos.push(produto);
    });

    vitrineCard.innerHTML = criaModeloCard(
      produtos[produtos.length - index].imagem,
      produtos[produtos.length - index].nome,
      produtos[produtos.length - index].preco,
      produtos[produtos.length - index].id
    );

    //adiciona a classe responsável pela estilização na página principal...
    vitrineCard.classList.add("vitrine_card");
  });

  return vitrineCard;
};

//Cria o Modelo html para renderização das vitrinesCards....
const criaModeloCard = (imagem, nome, preco, id) => {
  let modeloCard = `
          <img class="vitrine_card_imagem" src="${imagem}"/>
          <p class="vitrine_card_nome">${nome}</p>
          <p class="vitrine_card_preco">R$ ${preco.toFixed(2)}</p>
          <button class="vitrine_card_botao">
              <a href="pages/produto.html?id=${id}">Veja o produto</a>
          </button>`;

  return modeloCard;
};

inicializaElementos();
