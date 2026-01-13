// ### ✅ Caso 8: Adicionar  3 produtos ao carrinho
// - Ação: clicar em "Add to cart" em três produtos.
// - Esperado: contador do carrinho deve exibir `3`.

describe("Flow: Add three products to the shopping cart", () => {
  beforeEach(() => {
    cy.loginSauceDemo();
  });

  it("✅ Case 8: Add product to the cart", () => {
    // Clica no botão "Add to cart" da mochila
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
      .should("be.visible")
      .click();
    cy.wait(2000); // espera 2 segundos (2000 milissegundos)

    // Add a Bolt T-Shirt
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')
      .should("be.visible")
      .click();

    cy.wait(1000); // Espera um segundo só pra dar tempo de animação

    // Add Onesie to the cart
    cy.get('[data-test="add-to-cart-sauce-labs-onesie"]')
      .should("be.visible")
      .click();

    // Validate cart badge displays '3'
    cy.get('[data-test="shopping-cart-badge"]', { timeout: 5000 })
      .should("be.visible")
      .and("have.text", "3");
    cy.wait(2000); // espera 2 segundos (2000 milissegundos)

    cy.log("Three products were successfully added to the cart");

    cy.screenshot("add-flow-cart-with-3-products");
  });
});
