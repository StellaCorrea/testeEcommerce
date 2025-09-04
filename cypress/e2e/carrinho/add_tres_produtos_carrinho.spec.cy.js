// ### ✅ Caso 8: Adicionar  3 produtos ao carrinho
// - Ação: clicar em "Add to cart" em três produtos.
// - Esperado: contador do carrinho deve exibir `3`.

describe("Fluxo add três produtos ao carrinho de Compras", () => {
  beforeEach(() => {
    cy.loginSauceDemo();
  });

  it("✅ Caso 8: Adicionar produto ao carrinho", () => {
    // Clica no botão "Add to cart" da mochila
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
      .should("be.visible")
      .click();
      cy.wait(2000); // espera 2 segundos (2000 milissegundos)

      // Adiciona a Bolt T-Shirt
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')
      .should('be.visible')
      .click();

    cy.wait(1000); // Espera um segundo só pra dar tempo de animação

    // Adiciona o Onesie
    cy.get('[data-test="add-to-cart-sauce-labs-onesie"]')
      .should('be.visible')
      .click();


    // Aguarda até que o contador do carrinho apareça com "3"
    cy.get('[data-test="shopping-cart-badge"]', { timeout: 5000 })
      .should("be.visible")
      .and("have.text", "3");
      cy.wait(2000); // espera 2 segundos (2000 milissegundos)

    cy.log("Produtos adicionados ao carrinho com sucesso");

    cy.screenshot('add_tres_produtos_carrinho'); 

  });
});