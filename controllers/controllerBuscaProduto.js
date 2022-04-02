import { CarregaProdutoService } from "../services/CarregaProdutoService.js";

//Inicializa os elementos e chama a função carregaProdutos para carregar as informações na tela...
const inicializaElementos = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");

    const sectionProduto = document.querySelector("[data-sectionProduto]");
    const produtoTags = document.querySelector("[data-produtoTags]");

    sectionProduto.insertBefore(
        CarregaProdutoService.carregaProduto(id),
        produtoTags
    );

    carregaVitrineSimilares(id);
};

const carregaVitrineSimilares = async (id) => {
    const url = `http://localhost:3000/produtos/${id}`;
    const vitrineSimilares = document.querySelector("[data-vitrineSimilares]");
    const qualCards = "cardNormal";

    let categoria = "";

    await CarregaProdutoService.produtosService
        .listarProdutos(url)
        .then((dados) => {
            categoria = dados.categoria;
        });

    for (let i = 1; i < 5; i++) {
        vitrineSimilares.appendChild(
            CarregaProdutoService.carregaProdutos(categoria, i, qualCards)
        );
    }
};

inicializaElementos();
