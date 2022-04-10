import { produtosService } from "../services/produtoService.js";

const inputFile = document.querySelector("[data-inputFile]");
const imagemProduto = document.querySelector("[data-imagemProduto]");
const caminhoImagem = document.querySelector("[data-caminhoImagem]");
const produtoSemImagem = document.querySelector("[data-produtoSemImagem]");

const enviarInformacao = document.querySelector("[data-enviarInformacao]");
const produtoDescricao = document.querySelector("[data-produtoDescricao]");
const produtoPreco = document.querySelector("[data-produtoPreco]");
const produtoCategoria = document.querySelector("[data-produtoCategoria]");
const produtoNome = document.querySelector("[data-produtoNome]");

inputFile.addEventListener("change", (e) => {
    const formdata = new FormData();
    formdata.append("image", inputFile.files[0]);
    produtosService.enviaImgur(formdata).then((dados) => {
        imagemProduto.src = dados.data.link;
        caminhoImagem.textContent = dados.data.link;
        produtoSemImagem.classList.add("desativado");
    });
});

const buscaCategorias = () => {
    let url = "https://json-server-for-alura-old-game.herokuapp.com/categorias/";
    produtosService.listarProdutos(url).then((dados) => {
        dados.forEach((categoria) => {
            let option = document.createElement("option");
            option.value = categoria.categoria;
            option.textContent = categoria.categoria;
            option.classList.add("add_produto_categoria_option");
            produtoCategoria.appendChild(option);
        });
    });
};

enviarInformacao.addEventListener("submit", (e) => {
    e.preventDefault();

    let url = `https://json-server-for-alura-old-game.herokuapp.com/produtos/`;
    let nome = produtoNome.value;
    let descricao = produtoDescricao.value;
    let preco = parseInt(produtoPreco.value);
    let imagem = caminhoImagem.textContent;
    let categoria = produtoCategoria.value;

    let retorno = produtosService.enviarProdutos(url, nome, descricao, preco, imagem, categoria);
    retorno.then((dados) => {
        let mensagemModal = document.querySelector("[data-mensagemModal]");
        mensagemModal.classList.toggle("mensagemModal_ativo");
        limparCampos();
        setTimeout(() => {
            mensagemModal.classList.toggle("mensagemModal_ativo");
        }, 2500);
    });
});

buscaCategorias();

const limparCampos = () => {
    imagemProduto.src = "";
    produtoSemImagem.classList.remove("desativado");
    caminhoImagem.textContent = "";
    produtoDescricao.value = "";
    produtoPreco.value = 0.0;
    produtoCategoria.value = "";
    produtoNome.value = "";
};
