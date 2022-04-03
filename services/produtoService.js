const listarProdutos = (url) => {
    return fetch(url).then((resposta) => {
        return resposta.json();
    });
};

const enviarProdutos = (url, nome, descricao, preco, imagem, categoria) => {
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nome: nome,
            descricao: descricao,
            preco: preco,
            imagem: imagem,
            categoria: categoria,
        }),
    }).then((resposta) => {
        if (resposta.ok) {
            return resposta.body;
        }
        throw new Error(
            "Erro ao tentar cadastrar as informações, favor verificar"
        );
    });
};

export const produtosService = {
    listarProdutos,
    enviarProdutos,
};
