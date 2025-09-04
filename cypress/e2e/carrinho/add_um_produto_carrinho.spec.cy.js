// ###  Caso 6: Adicionar produto ao carrinho
// - Ação: clicar em "Add to cart" no primeiro produto.
// - Esperado: contador do carrinho deve exibir `1`.
describe("Fluxo add um produto ao carrinho de Compras", () => {
  beforeEach(() => {
    cy.loginSauceDemo();
  });

  it("✅ Caso 4: Adicionar produto ao carrinho", () => {
    // Clica no botão "Add to cart" da mochila
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
      .should("be.visible")
      .click();
      cy.wait(2000); // espera 2 segundos (2000 milissegundos)

    // Aguarda até que o contador do carrinho apareça com "1"
    cy.get('[data-test="shopping-cart-badge"]', { timeout: 5000 })
      .should("be.visible")
      .and("have.text", "1");
      cy.wait(2000); // espera 2 segundos (2000 milissegundos)

    cy.log("Produto adicionado ao carrinho com sucesso");
  });
});