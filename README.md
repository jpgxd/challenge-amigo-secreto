# Challenge - Amigo Secreto

Uma aplicação web para sorteio de amigo secreto desenvolvida como parte do programa ONE (Oracle Next Education) em parceria com a Alura.

![Challenge Amigo Secreto](https://github.com/user-attachments/assets/b517b816-e0b2-402f-a00d-7b48c3c767af)

### Tópicos 

[Sobre o projeto](#Sobre-o-projeto) 

[Objetivo do Challenge](#Objetivo-do-Challenge)

[Funcionalidades implementadas](#Funcionalidades-implementadas)

[Tecnologias utilizadas](#Tecnologias-utilizadas)

[Como executar o projeto](#Como-executar-o-projeto)

[Como usar](#Como-usar)

[Estrutura do código](#Estrutura-do-código)

[Aprendizados](#Aprendizados)

[Autor](#Autor)

[Agradecimentos](#Agradecimentos)

## Sobre o projeto

Este projeto foi desenvolvido como solução para o Challenge "Amigo Secreto" proposto pela ONE em parceria com a Alura. O desafio utiliza a metodologia Challenge-Based Learning (desenvolvida pela Apple) e tem como objetivo praticar conceitos fundamentais de lógica de programação.

A aplicação consiste em um sistema simples que permite adicionar nomes de participantes e realizar sorteios aleatórios para brincadeiras de amigo secreto, com uma interface amigável e intuitiva.

## Objetivo do Challenge

O propósito deste desafio é aplicar conceitos fundamentais de lógica de programação como:
- Variáveis
- Condicionais
- Funções
- Listas (arrays)
- Loops de repetição

O HTML e CSS foram fornecidos pela plataforma, permitindo o foco total no desenvolvimento da lógica de programação com JavaScript.

## Funcionalidades implementadas

- Adicionar nomes de participantes através de um campo de texto
- Validar entradas para evitar nomes vazios
- Visualizar a lista completa de participantes adicionados
- Sortear aleatoriamente um participante ao clicar no botão
- Exibir o resultado do sorteio na tela

## Tecnologias utilizadas

- HTML5 (fornecido pelo desafio)
- CSS3 (fornecido pelo desafio)
- JavaScript vanilla

## Como executar o projeto

Instalação

1. Clone o repositório:
   ```
   git clone https://github.com/jpgxd/challenge-amigo-secreto.git
   ```

2. Navegue até o diretório do projeto:
   ```
   cd challenge-amigo-secreto
   ```

3. Abra o arquivo `index.html` em seu navegador preferido.

## Como usar

### Adicionando participantes

1. Digite o nome do participante no campo de texto
2. Clique no botão "Adicionar" ou pressione Enter
3. O nome será adicionado à lista abaixo do campo de texto

![Adicionando um nome a Lista](https://github.com/user-attachments/assets/f1c800ee-9267-4ce8-b234-09e3c6caed96)

![Nome adicionado a lista](https://github.com/user-attachments/assets/48e05af9-873a-4a33-97e9-895f0911563b)

### Realizando o sorteio

1. Certifique-se de que há pelo menos um participante na lista
2. Clique no botão "Sortear amigo"
3. O nome sorteado será exibido abaixo da lista de participantes

![resultado do sorteio](https://github.com/user-attachments/assets/00306cc3-4e4f-4002-888d-8772582becef)


## Estrutura do código

O projeto está organizado em três arquivos principais:

- `index.html`: Estrutura da página web (fornecido pelo desafio)
- `style.css`: Estilização da interface (fornecido pelo desafio) 
- `app.js`: Implementação da lógica de funcionamento (desenvolvido como solução ao desafio)

### Principais funções implementadas

- `adicionarAmigo()`: Valida e adiciona um novo participante à lista
- `atualizarListaAmigos()`: Atualiza a interface com a lista atual de participantes
- `sortearAmigo()`: Realiza o sorteio aleatório entre os participantes

## Aprendizados

Este projeto permitiu a prática dos seguintes conceitos fundamentais de programação:
- Manipulação de variáveis para armazenar dados dinâmicos
- Uso de condicionais para validação de entradas
- Criação de funções para modularizar e organizar o código
- Manipulação de arrays para gerenciar coleções de dados
- Geração de números aleatórios para implementar o sorteio
- Manipulação do DOM para interagir com elementos HTML

## Autor

| [<img loading="lazy" src="https://avatars.githubusercontent.com/u/7022842?v=4" width=115><br><sub>Jean Pierre T, Gomes</sub>](https://github.com/jpgxd) |
| :---: |

## Agradecimentos

- Oracle Next Education (ONE) e Alura pela oportunidade de aprendizado
- À comunidade do ONE | G8 BR pelo apoio e suporte
