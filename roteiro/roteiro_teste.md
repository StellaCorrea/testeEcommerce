# 🧪 Roteiro de Testes - SauceDemo

Este documento define os cenários de teste validados com Cypress para o site [https://www.saucedemo.com](https://www.saucedemo.com).

---
## EXECUÇÃO TESTE INDIVIDUAIS 

- npx cypress run --spec "cypress/e2e/login/login_sem_inserir_campo_senha.cy.js" 


## 🔐 1. Login

### ✅ Caso 1: Login com credenciais válidas
- **Usuário**: `standard_user`
- **Senha**: `secret_sauce`
- Esperado: redirecionar para `/inventory.html` com a lista de produtos visível.
- Caso 1 ✅

### ❌ Caso 2: Login com usuário inválido
- **Usuário**: `usuario_incorreto`
- **Senha**: `senhaqualquer`
- Esperado: exibir mensagem de erro de login.

- Caso 2 ✅

### ❌ Caso 3: Login com senha incorreta
- **Usuário**: `standard_user`
- **Senha**: `senhaerrada`
- Esperado: exibir mensagem de erro de senha.

- Caso 3 ✅

### ❌ Caso 4: Login sem inserir  senha no campo senha
- **Usuário**: `standard_user`
- **Senha**: ``
- Esperado: exibir mensagem informando que o usuário deve preencher o campo senha

- Caso 4 ✅

### ❌ Caso 5: Login sem inserir nome de usuário no campo username
- **Usuário**: ``
- **Senha**: `secret_sauce`
- Esperado: exibir mensagem informando que o usuário deve preencher o campo username
---
- Caso 5 ✅

## 🛒 2. Carrinho de Compras

### ✅ Caso 6: Adicionar produto ao carrinho
- Ação: clicar em "Add to cart" no primeiro produto.
- Esperado: contador do carrinho deve exibir `1`.

- Caso 6 ✅

### ✅ Caso 7: Remover produto do carrinho
- Ação: clicar em "Remove" no produto que está no carrinho.
- Esperado: contador do carrinho some ou zere.

- Caso 7 ✅

### ✅ Caso 8: Adicionar  3 produtos ao carrinho
- Ação: clicar em "Add to cart" em três produtos.
- Esperado: contador do carrinho deve exibir `3`.

- Caso 8 ✅

### ✅ Caso 9: Remover ps 3 produtos do carrinho
- Ação: clicar em "Remove" no produto que está no carrinho.
- Esperado: contador do carrinho some ou zere.


---

## 🛍️ 3. Finalização da Compra

### ✅ Caso 9: Acesso ao Checkout
- Ação: clicar no ícone do carrinho e depois em "Checkout".
- Esperado: abrir página `/checkout-step-one.html`.

### ✅ Caso 10: Preenchimento dos dados e continuar
- Preencher: First Name, Last Name, Zip/Postal Code.
- Esperado: avançar para página `/checkout-step-two.html`.

### ✅ Caso 11: Finalizar compra
- Ação: clicar em "Finish"
- Esperado: exibir mensagem `Thank you for your order!`.

---

## 🔓 4. Logout

### ✅ Caso 12: Logout após login
- Ação: Abrir o menu lateral e clicar em "Logout"
- Esperado: voltar para a tela de login (`/`).
