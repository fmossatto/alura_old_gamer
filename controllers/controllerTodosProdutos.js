import { CarregaProdutoService } from "../services/CarregaProdutoService.js";

const inicializaElementos = () => {
    const vitrineTodosProdutos = document.querySelector(
        "[data-vitrineTodosProdutos]"
    );
    const qualCards = "cardEdicao";
    const url =
        "https://json-server-for-alura-old-game.herokuapp.com/produtos/";
    let i = 0;

    CarregaProdutoService.produtosService.listarProdutos(url).then((dados) => {
        dados.forEach(() => {
            vitrineTodosProdutos.appendChild(
                CarregaProdutoService.carregaProdutos("", i, qualCards)
            );
            i++;
        });
    });
};

inicializaElementos();
