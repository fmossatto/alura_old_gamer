import { CarregaProdutoService } from "../services/CarregaProdutoService.js";
import { produtosService } from "../services/produtoService.js";

const vitrineTodosProdutos = document.querySelector("[data-vitrineTodosProdutos]");

const inicializaElementos = async () => {
    const qualCards = "cardEdicao";
    const url = "https://json-server-for-alura-old-game.herokuapp.com/produtos/";
    let i = 0;

    await CarregaProdutoService.produtosService.listarProdutos(url).then((dados) => {
        dados.forEach(() => {
            vitrineTodosProdutos.appendChild(CarregaProdutoService.carregaProdutos("", i, qualCards));
            i++;
        });
    });
};

vitrineTodosProdutos.addEventListener("click", (e) => {
    if (e.target.className == "fa-solid fa-trash excluirProduto") {
        let vitrinePai = e.target.closest("[data-id]");
        let id = vitrinePai.dataset.id;
        removeProduto(id);
    }
});

const removeProduto = async (id) => {
    let url = `https://json-server-for-alura-old-game.herokuapp.com/produtos/${id}`;
    await produtosService.removeProduto(url);
    window.location.href = "../pages/produtos.html";
};

inicializaElementos();
