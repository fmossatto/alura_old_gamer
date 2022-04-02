const listarProdutos = (url) => {
    return fetch(url).then((resposta) => {
        return resposta.json();
    });
};

export const produtosService = {
    listarProdutos,
};
