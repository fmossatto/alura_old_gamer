import { CarregaProdutoService } from "../services/CarregaProdutoService.js";

/*  Captura as tags de vitrine do html e chama a função responsável
    por carregar os dados...
*/
const inicializaElementos = () => {
    const vitrineLancamento = document.querySelector(
        "[data-vitrineLancamentos]"
    );
    const vitrineConsoles = document.querySelector("[data-vitrineConsoles]");
    const vitrineControles = document.querySelector("[data-vitrineControles]");
    const vitrineDiversos = document.querySelector("[data-vitrineDiversos]");
    const qualCards = "cardNormal";

    for (let i = 1; i < 5; i++) {
        vitrineLancamento.appendChild(
            CarregaProdutoService.carregaProdutos("", i, qualCards)
        );
        vitrineConsoles.appendChild(
            CarregaProdutoService.carregaProdutos("consoles", i, qualCards)
        );
        vitrineControles.appendChild(
            CarregaProdutoService.carregaProdutos("controles", i, qualCards)
        );
        vitrineDiversos.appendChild(
            CarregaProdutoService.carregaProdutos("outros", i, qualCards)
        );
    }
};

inicializaElementos();
