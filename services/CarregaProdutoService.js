import { produtosService } from "./produtoService.js";

/*  carrega os produtos na vitrine de acordo com a categoria, caso a categoria
    for vazia pega os últimos produtos como lançamentos...
*/

const carregaProduto = (id) => {
    const url = `https://json-server-for-alura-old-game.herokuapp.com/produtos/${id}`;
    let produtoContainer = document.createElement("div");

    produtosService.listarProdutos(url).then((dados) => {
        produtoContainer.innerHTML = criaModeloProduto(
            dados.imagem,
            dados.nome,
            dados.descricao,
            dados.preco
        );

        produtoContainer.classList.add("produto_container");
        carregaTags(dados.categoria);
    });

    return produtoContainer;
};

//cria os itens do menu categorias e carrega as informações...
const carregaTags = (categorias) => {
    const listaTags = document.querySelector("[data-produtoTagsLista]");

    let listaItem = document.createElement("li");
    let listaLink = document.createElement("a");

    listaLink.innerHTML = criaModeloLink(categorias);
    listaItem.appendChild(listaLink);
    listaItem.classList.add("produto_tags_itens");

    listaTags.appendChild(listaItem);
};

const carregaProdutos = (categoria, index, qualCard) => {
    let url = "https://json-server-for-alura-old-game.herokuapp.com/produtos/";
    let vitrineCard = document.createElement("div");

    produtosService.listarProdutos(url).then((dados) => {
        let produtos = [];

        dados.forEach((produto) => {
            if (produto.categoria == categoria || categoria == "")
                produtos.push(produto);
        });

        if (qualCard == "cardNormal") {
            vitrineCard.innerHTML = criaModeloCard(
                produtos[produtos.length - index].imagem,
                produtos[produtos.length - index].nome,
                produtos[produtos.length - index].preco,
                produtos[produtos.length - index].id,
                qualCard
            );
        } else if (qualCard == "cardEdicao") {
            vitrineCard.innerHTML = criaModeloCard(
                produtos[index].imagem,
                produtos[index].nome,
                produtos[index].preco,
                produtos[index].id,
                qualCard
            );
        }

        //adiciona a classe responsável pela estilização na página principal...
        vitrineCard.classList.add("vitrine_card");
    });

    return vitrineCard;
};

//#################################MODELOS####################################

//modelo para a criação dos links da sessão categorias...
const criaModeloLink = (texto) => {
    let modelo = `
    <a href="#" class="produto_tags_link">
        <i class="fa-solid fa-plus"></i> ${texto}
    </a>`;

    return modelo;
};

//modelo para criação do HTML das informações do produto...
const criaModeloProduto = (imagem, nome, descricao, preco) => {
    let modelo = `
        <div class="produto_foto">
            <img
                src="${imagem}"
                alt="Foto do produto"
                class="produto_foto_imagem"
            />
            </div>
            <div class="produto_detalhes">
                <h2 class="produto_detalhes_nome">
                    ${nome}
                </h2>
                <p class="produto_detalhes_descricao">
                    ${descricao}
                </p>
                <p class="produto_detalhes_preco">R$ ${preco.toFixed(2)}</p>
                <button class="produto_detalhes_comprar">
                    Compre agora
                </button>
            </div>`;

    return modelo;
};

//Cria o Modelo html para renderização das vitrinesCards....
const criaModeloCard = (imagem, nome, preco, id, qualCard) => {
    let modeloCard = ``;
    if (qualCard == "cardNormal") {
        modeloCard = `
          <img class="vitrine_card_imagem" src="${imagem}"/>
          <p class="vitrine_card_nome">${nome}</p>
          <p class="vitrine_card_preco">R$ ${preco.toFixed(2)}</p>
          <button class="vitrine_card_botao">
              <a href="../pages/produto.html?id=${id}">Veja o produto</a>
          </button>`;
    } else if (qualCard == "cardEdicao") {
        modeloCard = `
                <img
                    class="vitrine_card_imagem"
                    src="${imagem}"
                />
                <p class="vitrine_card_nome">
                    ${nome}
                </p>
                <p class="vitrine_card_preco">R$ ${preco}</p>
                <p class="vitrine_card_id">#${id}</p>
                <div class="vitrine_card_botoesAcao">
                    <a class="vitrine_card_excluir">
                        <i class="fa-solid fa-trash"></i>
                    </a>
                    <a class="vitrine_card_editar">
                        <i class="fa-solid fa-pencil"></i>
                    </a>
                </div>`;
    }

    return modeloCard;
};

export const CarregaProdutoService = {
    carregaProdutos,
    carregaProduto,
    produtosService,
};
