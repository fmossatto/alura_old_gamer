const inputFile = document.querySelector("[data-inputFile]");
const imagemProduto = document.querySelector("[data-imagemProduto]");
const caminhoImagem = document.querySelector("[data-caminhoImagem]");
const produtoSemImagem = document.querySelector("[data-produtoSemImagem]");
import { produtosService } from "../services/produtoService.js";

const enviarInformacao = document.querySelector("[data-enviarInformacao]");
const produtoDescricao = document.querySelector("[data-produtoDescricao]");
const produtoPreco = document.querySelector("[data-produtoPreco]");
const produtoCategoria = document.querySelector("[data-produtoCategoria]");
const produtoNome = document.querySelector("[data-produtoNome]");

inputFile.addEventListener("change", (e) => {
    const arquivo = inputFile.files[0];
    if (arquivo) {
        const reader = new FileReader();
        reader.onload = () => {
            const result = reader.result;
            imagemProduto.src = result;
            caminhoImagem.textContent = inputFile.value;

            produtoSemImagem.classList.add("desativado");
        };
        reader.readAsDataURL(arquivo);
    }
});

enviarInformacao.addEventListener("click", (e) => {
    e.preventDefault();

    let url = `https://json-server-for-alura-old-game.herokuapp.com/produtos/`;
    let nome = produtoNome.value;
    let descricao = produtoDescricao.value;
    let preco = parseInt(produtoPreco.value);
    let imagem = null;
    let categoria = produtoCategoria.value;

    let retorno = produtosService.enviarProdutos(
        url,
        nome,
        descricao,
        preco,
        imagem,
        categoria
    );

    console.log(retorno);
});
