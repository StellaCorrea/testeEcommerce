
// ### ❌ Caso 3: Login com senha incorreta
// - **Usuário**: `standard_user`
// - **Senha**: `senhaerrada`
// - Esperado: exibir mensagem de erro de senha.


describe("Fluxo de Login - Usuário com acesso inválido por meio de uma senha incorreta", () => {
    it("Não deve autenticar o usuário e nem redirecionar para a página de produtos", () => {
      cy.visit("https://www.saucedemo.com");
      cy.wait(2000); // espera 2 segundos (2000 milissegundos)
      cy.get('[data-test="username"]').type("standard_user");
      cy.wait(2000); // espera 2 segundos (2000 milissegundos)
      cy.get('[data-test="password"]').type("senhaerrada");
      cy.wait(2000); // espera 2 segundos (2000 milissegundos)
      cy.get('[data-test="login-button"]').click();
      
      cy.wait(2000); // espera 2 segundos (2000 milissegundos)
      cy.get('[data-test="error"]', { timeout: 2000 }).should('be.visible')
        .and('contain', 'Username and password do not match')
    });
  });