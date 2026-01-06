# 🧪 Testes Automatizados com Cypress - SauceDemo

Este projeto contém testes end-to-end (E2E) utilizando [Cypress](https://www.cypress.io/) para validar o fluxo de autenticação e funcionalidades principais do site de demonstração [SauceDemo](https://www.saucedemo.com/).

---

## 🚀 Objetivo do Projeto

Praticar automação de testes front-end com Cypress em um ambiente real de e-commerce, validando funcionalidades como:

- Login (sucesso e falha)
- Adição de produtos ao carrinho
- Finalização de compra
- Logout

---

## 🛠️ Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Cypress v13.6.4](https://docs.cypress.io/)
  [Mochawesome](https://github.com/adamgruber/mochawesome)
- Git Bash

## 📊 Relatórios de Testes

Este projeto utiliza o **Mochawesome** como gerador de relatórios para os testes automatizados com Cypress.

Os testes são configurados para gerar relatórios no formato **JSON**, que posteriormente podem ser consolidados em um **relatório HTML interativo**, facilitando a análise dos resultados.

### 🔧 Ferramentas de Relatório

- [Mochawesome](https://github.com/adamgruber/mochawesome)
- [mochawesome-merge](https://github.com/antontelesh/mochawesome-merge)
- [mochawesome-report-generator (marge)](https://github.com/adamgruber/mochawesome-report-generator)


## 🔐 Ambiente de Testes

- **Site**: [https://www.saucedemo.com](https://www.saucedemo.com/)
- **Usuário de teste**:
  - `standard_user`
  - Senha: `secret_sauce`