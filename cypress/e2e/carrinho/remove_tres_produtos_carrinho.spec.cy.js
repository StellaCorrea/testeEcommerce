// ### ✅ Caso 9: Remover ps 3 produtos do carrinho
// - Ação: clicar em "Remove" no produto que está no carrinho.
// - Esperado: contador do carrinho some ou zere.

describe("Fluxo: Remover três produtos do carrinho de compras", () => {
  beforeEach(() => {
    cy.loginSauceDemo();
    cy.viewport(1280, 720);
  });

  it("✅ Caso 9: Adiciona e remove três produtos do carrinho", () => {
    const produtos = [
      "sauce-labs-backpack",
      "sauce-labs-bolt-t-shirt",
      "sauce-labs-bike-light",
    ];

    // 1. Adiciona os 3 produtos
    produtos.forEach((produto) => {
      cy.get(`[data-test="add-to-cart-${produto}"]`)
        .should("be.visible")
        .click();
      cy.wait(5000); // visualização
    });

    // 2. Verifica o contador do carrinho com valor 3
    cy.get('[data-test="shopping-cart-badge"]')
      .should("be.visible")
      .and("have.text", "3");

    cy.wait(5000); // visualização

    // 3. Remove os 3 produtos
    produtos.forEach((produto) => {
      cy.get(`[data-test="remove-${produto}"]`).should("be.visible").click();
    });

    // 4. Verifica que o carrinho está vazio
    cy.get('[data-test="shopping-cart-badge"]').should("not.exist");

    cy.wait(5000); // visualização
    cy.log("✅ Três produtos removidos com sucesso e carrinho vazio");

    cy.screenshot("remove_tres_produtos_carrinho");
  });
});
