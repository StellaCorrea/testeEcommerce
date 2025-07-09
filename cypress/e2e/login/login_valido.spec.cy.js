describe('Fluxo de Login - Usuário com acesso válido ao e-commerce', () => {
    it('Deve autenticar e redirecionar para a página de produtos', () => {
      cy.visit('https://www.saucedemo.com/');
      cy.wait(2000) // espera 2 segundos (2000 milissegundos)
      cy.get('[data-test="username"]').type('standard_user')
      cy.wait(2000) // espera 2 segundos (2000 milissegundos)
      cy.get('[data-test="password"]').type('secret_sauce')
      cy.wait(2000) // espera 2 segundos (2000 milissegundos)
      cy.get('[data-test="login-button"]').click()
  
      // Aguarda a home carregar e verifica se o elemento esperado está visível
      cy.get('.app_logo', { timeout: 20000 }).should('be.visible')
      .then(() => {
        cy.log('✅ Elemento exibido com sucesso');
      });
  
    })
  })

  
