# 🧪 Roteiro de Testes - SauceDemo

Este documento define os cenários de teste validados com Cypress para o site [https://www.saucedemo.com](https://www.saucedemo.com).

---

## 🔐 1. Login

### ✅ Caso 1: Login com credenciais válidas
- **Usuário**: `standard_user`
- **Senha**: `secret_sauce`
- Esperado: redirecionar para `/inventory.html` com a lista de produtos visível.

### ❌ Caso 2: Login com usuário inválido
- **Usuário**: `usuario_incorreto`
- **Senha**: `senhaqualquer`
- Esperado: exibir mensagem de erro de login.

### ❌ Caso 3: Login com senha incorreta
- **Usuário**: `standard_user`
- **Senha**: `senhaerrada`
- Esperado: exibir mensagem de erro de senha.

---

## 🛒 2. Carrinho de Compras

### ✅ Caso 4: Adicionar produto ao carrinho
- Ação: clicar em "Add to cart" no primeiro produto.
- Esperado: contador do carrinho deve exibir `1`.

### ✅ Caso 5: Remover produto do carrinho
- Ação: clicar em "Remove" no produto que está no carrinho.
- Esperado: contador do carrinho some ou zere.

---

## 🛍️ 3. Finalização da Compra

### ✅ Caso 6: Acesso ao Checkout
- Ação: clicar no ícone do carrinho e depois em "Checkout".
- Esperado: abrir página `/checkout-step-one.html`.

### ✅ Caso 7: Preenchimento dos dados e continuar
- Preencher: First Name, Last Name, Zip/Postal Code.
- Esperado: avançar para página `/checkout-step-two.html`.

### ✅ Caso 8: Finalizar compra
- Ação: clicar em "Finish"
- Esperado: exibir mensagem `Thank you for your order!`.

---

## 🔓 4. Logout

### ✅ Caso 9: Logout após login
- Ação: Abrir o menu lateral e clicar em "Logout"
- Esperado: voltar para a tela de login (`/`).
