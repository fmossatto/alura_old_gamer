import { produtosService } from "../services/produtoService.js";

const inputFile = document.querySelector("[data-inputFile]");
const enviarInformacao = document.querySelector("[data-enviarInformacao]");
var id = "";

const inicializaElementos = () => {
    const urlParams = new URLSearchParams(window.location.search);
    id = urlParams.get("id");

    carregaDados();
};

const carregaDados = () => {
    const url = `https://json-server-for-alura-old-game.herokuapp.com/produtos/${id}`;

    produtosService.listarProdutos(url).then((dados) => {
        let imagem = document.querySelector("[data-imagemProduto]");
        let nome = document.querySelector("[data-produtoNome]");
        let categoria = document.querySelector("[data-produtoCategoria]");
        let preco = document.querySelector("[data-produtoPreco]");
        let descricao = document.querySelector("[data-produtoDescricao]");
        let caminhoImagem = document.querySelector("[data-caminhoImagem]");

        imagem.src = dados.imagem;
        caminhoImagem.textContent = dados.imagem;
        nome.value = dados.nome;
        categoria.value = dados.categoria;
        preco.value = dados.preco;
        descricao.value = dados.descricao;
    });
};

inputFile.addEventListener("change", (e) => {
    let imagem = document.querySelector("[data-imagemProduto]");
    let caminhoImagem = document.querySelector("[data-caminhoImagem]");

    const arquivo = inputFile.files[0];
    if (arquivo) {
        const reader = new FileReader();
        reader.onload = () => {
            const result = reader.result;
            imagem.src = result;
            caminhoImagem.textContent = inputFile.value;
        };
        reader.readAsDataURL(arquivo);
    }
});

enviarInformacao.addEventListener("click", (e) => {
    e.preventDefault();

    let url = `https://json-server-for-alura-old-game.herokuapp.com/produtos/${id}`;
    let nome = document.querySelector("[data-produtoNome]").value;
    let categoria = document.querySelector("[data-produtoCategoria]").value;
    let preco = parseInt(document.querySelector("[data-produtoPreco]").value);
    let descricao = document.querySelector("[data-produtoDescricao]").value;
    let caminhoImagem = document.querySelector("[data-caminhoImagem]").textContent;

    produtosService.editaProduto(url, nome, descricao, preco, caminhoImagem, categoria).then((dados) => {
        let mensagemModal = document.querySelector("[data-mensagemModal]");
        mensagemModal.classList.toggle("mensagemModal_ativo");
        setTimeout(() => {
            mensagemModal.classList.toggle("mensagemModal_ativo");
            console.log("oi");
            window.location.href = "../pages/produtos.html";
        }, 2500);
    });
});

inicializaElementos();
