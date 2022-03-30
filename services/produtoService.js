const listarProdutos = () => {
  return fetch("http://localhost:3000/produtos").then((resposta) => {
    return resposta.json();
  });
};

export const produtosService = {
  listarProdutos,
};
