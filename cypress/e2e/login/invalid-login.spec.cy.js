// ### ❌ Caso 2: Login com usuário inválido
// - **Usuário**: `usuario_incorreto`
// - **Senha**: `senhaqualquer`
// - Esperado: exibir mensagem de erro de login.

describe("Login Flow - User with invalid access using incorrect username and password on the e-commerce", () => {
  it("Should not authenticate the user or redirect to the products page", () => {
    cy.visit("https://www.saucedemo.com");
    cy.wait(2000); // espera 2 segundos (2000 milissegundos)
    cy.get('[data-test="username"]').type("usuario_incorreto");
    cy.wait(2000); // espera 2 segundos (2000 milissegundos)
    cy.get('[data-test="password"]').type("senhaqualquer");
    cy.wait(2000); // espera 2 segundos (2000 milissegundos)
    cy.get('[data-test="login-button"]').click();
    cy.wait(2000); // espera 2 segundos (2000 milissegundos)
    cy.get('[data-test="error"]')
      .should("be.visible")
      .and("contain", "Username and password do not match");
    cy.log("Mensagem de erro validada com sucesso");

    cy.screenshot("login_invalido");
  });
});