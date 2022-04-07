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
    /*fetch("https://api.imgur.com/3/image/", {
        method: "post",
        headers: {
            Authorization: "Client-ID 14766a5be4d6795",
        },
        body: formdata,
    })
        .then((dados) => dados.json())
        .then((dados) => {
            imagemProduto.src = dados.data.link;
            caminhoImagem.textContent = dados.data.link;
            produtoSemImagem.classList.add("desativado");
        });*/
    /*if (arquivo) {
        const reader = new FileReader();
        reader.onload = () => {
           let result = reader.result;
            imagemProduto.src = result;
            caminhoImagem.textContent = inputFile.value;

            produtoSemImagem.classList.add("desativado");
        };
        reader.readAsDataURL(arquivo);
    }*/
});

enviarInformacao.addEventListener("click", (e) => {
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

const limparCampos = () => {
    imagemProduto.src = "";
    produtoSemImagem.classList.remove("desativado");
    caminhoImagem.textContent = "";
    produtoDescricao.value = "";
    produtoPreco.value = 0.0;
    produtoCategoria.value = "";
    produtoNome.value = "";
};
