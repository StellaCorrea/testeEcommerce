# 🚀 Setup Cypress com Git Bash

## 📁 Passos iniciais

1. Vá até a pasta desejada e abra o Git Bash.
2. Inicie o repositório Git:

git init

## Inicie o projeto Node.js:


npm init

## Ou, para pular as perguntas:


npm init --yes


## Instale o Cypress na versão desejada:


npm install cypress@13.6.4 --save-dev

## Após a instalação, abra o Cypress:


npx cypress open

## 🔍 Verificar a versão do Cypress

npx cypress --version


## Estrutura criada após rodar npx cypress open
## O Cypress cria automaticamente:

cypress/ → diretório principal dos testes

cypress.config.js (ou cypress.json em versões antigas)

## Pastas padrão dentro de cypress/:
fixtures/ → Armazena dados como .json, mocks, etc.

integration/ (em versões mais antigas) → Arquivos de teste.

Nas versões novas, os testes vão em cypress/e2e/

plugins/ → Configurações de plugins (em versões antigas)

support/ → Arquivos auxiliares, comandos customizados etc.

## 🧪 Executando testes Cypress
## ▶️ Rodar teste via terminal (modo headless)

npx cypress run --spec "cypress/e2e/api/listar_poules_canceladas.cy.js"


## Para rodar testes limpos:

npm run test:clean

## Rodar tudo limpo + relatório:

npm run test:report