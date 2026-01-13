// ### ✅ Caso 7: Remover produto do carrinho
// - Ação: clicar em "Remove" no produto que está no carrinho.
// - Esperado: contador do carrinho some ou zere.

describe("Flow: Remove one products from the shopping cart", () => {
  beforeEach(() => {
    cy.loginSauceDemo();
  });

it("✅ Case 7: Remove one product from the shopping cart", () => {
    // 1. add one product
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
      .should("be.visible")
      .click();


    // 2. Validate cart badge displays '1'
    cy.get('[data-test="shopping-cart-badge"]', { timeout: 5000 })
      .should("be.visible")
      .and("have.text", "1");

    // 3. Remove the product
    cy.get('[data-test="remove-sauce-labs-backpack"]')
      .should("be.visible")
      .click();

    // 4. Validate cart is empty
    cy.get('[data-test="shopping-cart-badge"]').should("not.exist");

    cy.wait(2000); // para captura visual
    cy.log("✅ Product was successfully removed and the cart is empty");
  });
});
