# alura_old_gamer :computer:

## Repositório criado para participação da 3ª edição do Alura Challenge focado em front end.

O challenge consiste em realizar 4 desafios divido em 4 semanas.

:calendar: Semana 01 - :white_check_mark:
Criar a página principal do projeto apenas usando HTML e CSS, e implementando também o design responsivo para celular e tablets.

:calendar: Semana 02 - :white_check_mark:
Criar a página de login, criar a página de descrição do produto contendo os detalhes do produto e produtos similares, criar a página para adicionar novos produtos além de criar a página para listar todos os produtos cadastrados. Todas as páginas devem conter um design responsivo para celulares e tablets.

:calendar: Semana 03 e 04 - :white_check_mark:
Focada em javascript, as duas últimas semanas tem o desafio de popular as páginas com dados dinâmicos, buscando as informações de alguma fonte externa, ficando a critério do participante escolher entre back ends reais ou fakes (como o json server). Os últimos desafios tem como proposta também a validação dos formulários contidos nas páginas.

# O Caminho até agora :chart_with_upwards_trend:

## Semana 01

A proposta era criar uma página de e-commerce tomando como base o projeto disponibilizado pela Alura no Figma - [Link do Projeto](https://www.figma.com/file/itJpWbvHxSUcUeMPy1lmof/AluraGeek)

tomei a liberdade de mudar o layout do projeto mas sem comprometer o princípio - modificiando especialmente os seguintes elementos:

-   Mudei o layout dos produtos;
-   Mudei a disposição de como os produtos serão aprensetados;
-   Mudei o rodapé das páginas;
-   Criei um logo diferente;
-   usei imagens diferente das disponibilizadas;

## Semana 02

Assim como na semana 01, também mudei um pouco o layout proposto pelo desafio.

* Mudei o layout da página que lista todos os produtos, adicionando alguns elementos visuais;

* Adicionei a sessão de tags na página do produto, ilustrando as categorias do produto em destaque;

* Adicionei um efeito de zoom na imagem do produto, para melhor visualização;

* Quanto as funcionalidades das páginas, segui o proposto pelo desafiio;

## Semana 03 e 04
Na semana 03 e 04 foi proposto a implementação das mecânicas de busca, listagem e comportamento dos produtos exibidos, assim como validação dos formulários.

* Foi feito o deploy do json-server no Heroku com uma base pré cadastrada, responsável por popular a página numa intereção inicial. O deploy aceita pesquisas, inserções, atualizações e exclusões. (Obs: como o Heroku tem a característica de inativar o serviço após um tempo sem interação, sempre que uma nova interação for feita após a inativação o serviço demorará um pouquinho para carregar e por conta dessa inativação a base de dados volta ao estado inicial.)

* Foi optado por utilizar a API pública do site [imgur](https://imgur.com/) para armazenamento das imagens, ao escolher a imagem no formulário de cadastrado é feito um upoload na base do imgur e retornado o link da imagem.

* Foi criado uma sessão na página de detalhes do produto que apresenta produtos similares, levando em consideração a categoria do objeto detalhado.

* Foi implementado a lógica para a barra de pesquisa, que faz a busca pelo nome do objeto.

* E assim como as demais semanas, foi tomada a liberdade de mudar o layout e o design da página, mas sempre seguinte o conceito básico proposto.

  
# Considerações Finais :exclamation:
Ao fim dessa jornada de aprendizado posso dizer que estou satisfeito com o resultado, apesar de ser uma página simples foi adquirido muito conhecimento que com certeza levarei para projetos futuros.

[Link da página no vercel](https://alura-old-gamer.vercel.app/)
