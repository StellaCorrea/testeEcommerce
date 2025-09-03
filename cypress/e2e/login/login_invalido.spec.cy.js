describe("Fluxo de Login - Usuário com acesso inválido por meio de um nome de usuário e senha incorretas ao e-commerce", () => {
  it("Não deve autenticar o usuário e nem redirecionar para a página de produtos", () => {
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
  });
});
