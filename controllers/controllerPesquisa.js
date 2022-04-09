import { CarregaProdutoService } from "../services/CarregaProdutoService.js";

const inputPesquisa = document.querySelector("[data-headerPesquisa]");
const resultadoPesquisa = document.querySelector("[data-pesquisaResultado]");
const pesquisaResponsivo = document.querySelector("[data-pesquisaResponsivo]");
const containerPesquisa = document.querySelector("[data-containerPesquisa]");
const fecharPesquisa = document.querySelector("[data-fecharPesquisa]");

inputPesquisa.addEventListener("keyup", () => {
    if (inputPesquisa.value) {
        resultadoPesquisa.innerHTML = "";
        resultadoPesquisa.classList.add("ativo");
        resultadoPesquisa.appendChild(CarregaProdutoService.carregaPesquisa(inputPesquisa.value));
    } else if (!inputPesquisa.value) {
        resultadoPesquisa.classList.remove("ativo");
    }
});

pesquisaResponsivo.addEventListener("click", (e) => {
    containerPesquisa.classList.add("header_pesquisa_container_ativo");
    fecharPesquisa.style.display = "flex";
});

fecharPesquisa.addEventListener("click", () => {
    inputPesquisa.value = "";
    containerPesquisa.classList.remove("header_pesquisa_container_ativo");
    resultadoPesquisa.classList.remove("ativo");
    fecharPesquisa.style.display = "none";
});
