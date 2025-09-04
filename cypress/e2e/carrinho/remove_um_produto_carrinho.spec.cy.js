// ### ✅ Caso 7: Remover produto do carrinho
// - Ação: clicar em "Remove" no produto que está no carrinho.
// - Esperado: contador do carrinho some ou zere.

describe("Fluxo remover um produto ao carrinho de Compras", () => {
  beforeEach(() => {
    cy.loginSauceDemo();
  });

it("✅ Caso 7: Remove um produto do carrinho", () => {
    // 1. Adiciona o produto
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
      .should("be.visible")
      .click();

    cy.wait(2000); // apenas para visualização

    // 2. Verifica o contador do carrinho
    cy.get('[data-test="shopping-cart-badge"]', { timeout: 5000 })
      .should("be.visible")
      .and("have.text", "1");

    // 3. Remove o produto
    cy.get('[data-test="remove-sauce-labs-backpack"]')
      .should("be.visible")
      .click();

    // 4. Verifica que o carrinho está vazio
    cy.get('[data-test="shopping-cart-badge"]').should("not.exist");

    cy.wait(2000); // para captura visual
    cy.log("✅ Produto removido e carrinho vazio");
  });
});
