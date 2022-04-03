import { CarregaProdutoService } from "../services/CarregaProdutoService.js";

/*  Captura as tags de vitrine do html e chama a função responsável
    por carregar os dados...
*/
const inicializaElementos = async () => {
    const vitrineLancamento = document.querySelector(
        "[data-vitrineLancamentos]"
    );
    const vitrineConsoles = document.querySelector("[data-vitrineConsoles]");
    const vitrineControles = document.querySelector("[data-vitrineControles]");
    const vitrineDiversos = document.querySelector("[data-vitrineDiversos]");
    const qualCards = "cardNormal";

    for (let i = 1; i < 5; i++) {
        vitrineLancamento.appendChild(
            await CarregaProdutoService.carregaProdutos("", i, qualCards)
        );
        vitrineConsoles.appendChild(
            await CarregaProdutoService.carregaProdutos(
                "consoles",
                i,
                qualCards
            )
        );
        vitrineControles.appendChild(
            await CarregaProdutoService.carregaProdutos(
                "controles",
                i,
                qualCards
            )
        );
        vitrineDiversos.appendChild(
            await CarregaProdutoService.carregaProdutos("outros", i, qualCards)
        );
    }
};

inicializaElementos();
