// ### ✅ Caso 9: Remover ps 3 produtos do carrinho
// - Ação: clicar em "Remove" no produto que está no carrinho.
// - Esperado: contador do carrinho some ou zere.

describe("Flow: Remove three products from the shopping cart", () => {
  beforeEach(() => {
    cy.loginSauceDemo();
    cy.viewport(1280, 720);
  });

  it("✅ Case 9: Add and remove three products from the cart", () => {
    const products = [
      "sauce-labs-backpack",
      "sauce-labs-bolt-t-shirt",
      "sauce-labs-bike-light",
    ];

    // 1. Add three products
    produtos.forEach((products) => {
      cy.get(`[data-test="add-to-cart-${products}"]`)
        .should("be.visible")
        .click();
    });

    // 2. Validate cart badge shows 3 items
    cy.get('[data-test="shopping-cart-badge"]')
      .should("be.visible")
      .and("have.text", "3");

    // Visual Evidence: cart with products
    cy.screenshot("cart-with-3-products");

    // 3. Remove all the three products
    produtos.forEach((products) => {
      cy.get(`[data-test="remove-${products}"]`).should("be.visible").click();
    });

    // 4. Validate if the carts is empty
    cy.get('[data-test="shopping-cart-badge"]').should("not.exist");

    cy.log("✅ Three products were successfully removed and the cart is empty");

    // Visual evidence: empty cart screenshot
    cy.screenshot("cart-empty");
  });
});
