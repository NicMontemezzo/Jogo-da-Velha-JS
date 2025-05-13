# Jogo-da-Velha-JS

Um simples jogo da velha para 2 jogadores utlizando JavaScrip, CSS e HTML.

Instruções para o desafio:

Construa um Jogo da Velha (Tic-Tac-Toe) para dois jogadores utilizando apenas HTML, CSS e JavaScript sem bibliotecas externas. O jogo será jogado no navegador. Os jogadores a cada jogada irão alternar entre "X" e "O", e o jogo deve detectar vitórias, empates, exibir o placar e opção reiniciar.



Dica: Comite o código no github



Abaixo, apenas uma dicas e orientação para o desenvolvimento necessários, seguir os passos é opcional:



HTML
Criar o título do jogo visível na parte superior da página, com uma breve descrição (enunciado).
Exibir o placar do jogo, com dois contadores separados: um para o jogador X e outro para o jogador O.
Criar o tabuleiro com 9 células (3x3), cada uma com um ID único (de c0 a c8) para facilitar o acesso via getElementById.
Adicionar uma área de mensagem abaixo do tabuleiro, onde serão exibidas mensagens como "Vez de: X", "Jogador O venceu!" ou "Empate!".
Criar um botão de reiniciar partida, que limpa o tabuleiro sem zerar o placar.


CSS
Aplicar estilização:
Centralizar o conteúdo na tela;
Definir o tamanho e estilo das células;
Adicionar cores suaves e bordas para o tabuleiro;
Deixar o botão visível e clicável;
Destacar o texto e tornar a interface legível.


JavaScript
Utilizar getElementById para acessar os elementos HTML (células, mensagem, placar, botão).
Criar uma lógica de alternância de jogador entre "X" e "O".
Impedir que uma célula já marcada possa ser clicada novamente.
Verificar todas as combinações vencedoras possíveis (linhas, colunas e diagonais).
Exibir uma mensagem de vitória quando um jogador vencer.
Detectar e exibir mensagem de empate quando todas as células forem preenchidas sem um vencedor.
Atualizar o placar de vitórias para cada jogador após uma vitória.
Desabilitar as jogadas após o término da partida (vitória ou empate).
Implementar o botão "Reiniciar Jogo" que limpa o tabuleiro e recomeça a partida mantendo o placar.
