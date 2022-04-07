import { CarregaProdutoService } from "../services/CarregaProdutoService.js";
import { produtosService } from "../services/produtoService.js";

const inputPesquisa = document.querySelector("[data-headerPesquisa]");
const resultadoPesquisa = document.querySelector("[data-pesquisaResultado]");

console.log(resultadoPesquisa);

/*  Captura as tags de vitrine do html e chama a função responsável
    por carregar os dados...
*/
const inicializaElementos = () => {
    const vitrineLancamento = document.querySelector("[data-vitrineLancamentos]");
    const vitrineConsoles = document.querySelector("[data-vitrineConsoles]");
    const vitrineControles = document.querySelector("[data-vitrineControles]");
    const vitrineDiversos = document.querySelector("[data-vitrineDiversos]");
    const qualCards = "cardNormal";

    for (let i = 1; i < 5; i++) {
        vitrineLancamento.appendChild(CarregaProdutoService.carregaProdutos("", i, qualCards));
        vitrineConsoles.appendChild(CarregaProdutoService.carregaProdutos("consoles", i, qualCards));
        vitrineControles.appendChild(CarregaProdutoService.carregaProdutos("controles", i, qualCards));
        vitrineDiversos.appendChild(CarregaProdutoService.carregaProdutos("outros", i, qualCards));
    }
};

inputPesquisa.addEventListener("keyup", () => {
    if (inputPesquisa.value) {
        resultadoPesquisa.innerHTML = "";
        resultadoPesquisa.classList.add("ativo");
        resultadoPesquisa.appendChild(CarregaProdutoService.carregaPesquisa(inputPesquisa.value));
    } else if (!inputPesquisa.value) {
        resultadoPesquisa.classList.remove("ativo");
    }
});

inicializaElementos();
