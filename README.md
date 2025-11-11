# Projeto de Testes de UI com Cypress - S206

Este projeto contém os testes automatizados desenvolvidos para a disciplina de Qualidade de Software (S206)

## Sobre o Projeto

O objetivo deste projeto é demonstrar a aplicação de conhecimentos em testes de interface de usuário (UI) utilizando a ferramenta Cypress. Foram desenvolvidos 6 casos de teste para o site **DemoQA**, uma plataforma completa para praticar automação. Os testes incluem cenários positivos (submissão de formulário, busca bem-sucedida) e negativos (validação de e-mail, busca sem resultados).

O projeto está configurado para gerar um relatório de testes utilizando o `Mochawesome Reporter`.

## Pré-requisitos
[Node.js](https://nodejs.org/) e o [npm](https://www.npmjs.com/) (que vem com o Node.js) instalados 

## Instalação

1.  Clone este repositório 
2.  Navegue até o diretório do projeto
3.  Instale todas as dependências do projeto
    ```bash
    npm install
    ```

## Como Executar o Projeto

Para executar os testes, utilize os seguintes comandos no terminal, a partir da raiz do projeto

### Executar os testes 

Este comando executará todos os testes em segundo plano (sem abrir o navegador) e é ideal para CI

```bash
npm run cypress:run
```


### Abrir o Cypress Test Runner (Modo Interativo)

Este comando abrirá a interface gráfica do Cypress, onde você pode ver os testes sendo executados em tempo real e depurá-los.

```bash
npx cypress open
```

## Obtendo o Relatório de Testes

Após executar os testes com o comando `npm run cypress:run`, o relatório HTML será gerado automaticamente.

Você pode encontrar o relatório no seguinte diretório:

```
/cypress/reports/html/index.html
```

Basta abrir o arquivo `index.html` em seu navegador para visualizar um resumo detalhado da execução dos testes, incluindo screenshots para os testes que falharam.