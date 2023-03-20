import { CarregaProdutoService } from '../services/CarregaProdutoService.js';
import { produtosService } from '../services/produtoService.js';

const vitrineTodosProdutos = document.querySelector('[data-vitrineTodosProdutos]');

const inicializaElementos = async () => {
    const qualCards = 'cardEdicao';
    const url = 'https://my-json-server.typicode.com/fmossatto/alura_old_gamer_db/produtos/';
    let i = 0;

    await produtosService.listarProdutos(url).then((dados) => {
        dados.forEach(() => {
            vitrineTodosProdutos.appendChild(
                CarregaProdutoService.carregaProdutos('', i, qualCards)
            );
            i++;
        });
    });
};

//Verifica se o botão apertado corresponde a um botão de excluir, em seguida chama a função de exclusão...
vitrineTodosProdutos.addEventListener('click', (e) => {
    if (e.target.className == 'fa-solid fa-trash excluirProduto') {
        let vitrinePai = e.target.closest('[data-id]');
        let id = vitrinePai.dataset.id;
        removeProduto(id);
        vitrinePai.remove();
    }
});

//Verifica se o botão apertado corresponde a um botão de editar, em seguida envia o usuario para a pagina de edição...
vitrineTodosProdutos.addEventListener('click', (e) => {
    if (e.target.className == 'fa-solid fa-pencil editarProduto') {
        let vitrinePai = e.target.closest('[data-id]');
        let id = vitrinePai.dataset.id;
        window.location.href = `../pages/editar_produto.html?id=${id}`;
    }
});

const removeProduto = async (id) => {
    let url = `https://my-json-server.typicode.com/fmossatto/alura_old_gamer_db/produtos/${id}`;
    await produtosService.removeProduto(url);

    let mensagemModal = document.querySelector('[data-mensagemModal]');
    mensagemModal.classList.toggle('mensagemModal_ativo');
    setTimeout(() => {
        mensagemModal.classList.toggle('mensagemModal_ativo');
    }, 2500);
};

inicializaElementos();
