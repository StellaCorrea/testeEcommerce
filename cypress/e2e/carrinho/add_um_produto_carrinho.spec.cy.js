// ###  Caso 6: Adicionar produto ao carrinho
// - Ação: clicar em "Add to cart" no primeiro produto.
// - Esperado: contador do carrinho deve exibir `1`.
describe("Flow: Add a product to the shopping cart ", () => {
  beforeEach(() => {
    cy.loginSauceDemo();
  });

  it("✅ Case 6: Add one product to the cart", () => {
    // Clica no botão "Add to cart" da mochila
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
      .should("be.visible")
      .click();
    cy.wait(2000); // espera 2 segundos (2000 milissegundos)

    // Wait until the cart badge displays ‘1’
    cy.get('[data-test="shopping-cart-badge"]', { timeout: 5000 })
      .should("be.visible")
      .and("have.text", "1");
    cy.wait(2000); // espera 2 segundos (2000 milissegundos)

    cy.log("Product successfully added to the cart");
    cy.screenshot("cart-with-1-product");
  });
});
