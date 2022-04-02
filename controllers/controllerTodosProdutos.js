import { CarregaProdutoService } from "../services/CarregaProdutoService.js";

const inicializaElementos = () => {
    const vitrineTodosProdutos = document.querySelector(
        "[data-vitrineTodosProdutos]"
    );
    const qualCards = "cardEdicao";
    const url = "http://localhost:3000/produtos/";
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
