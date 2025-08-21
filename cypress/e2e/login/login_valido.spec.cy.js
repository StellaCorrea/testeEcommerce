
  describe('Fluxo de Login - Usuário com acesso válido ao e-commerce', () => {
    it('Deve autenticar e redirecionar para a página de produtos', () => {
      cy.visit('https://www.saucedemo.com', {
        timeout: 120000 // espera até 2 minutos para a página carregar
      })
  
      // Delays manuais entre as ações (opcional para debug visual)
      cy.wait(2000)
      cy.get('[data-test="username"]').type('standard_user')
  
      cy.wait(2000)
      cy.get('[data-test="password"]').type('secret_sauce')
  
      cy.wait(2000)
      cy.get('[data-test="login-button"]').click()
  
      // Verificação de redirecionamento e elemento visível
      cy.get('.app_logo', { timeout: 20000 }).should('be.visible')
        .then(() => {
          cy.log('✅ Elemento exibido com sucesso');
        })
    })
  })
  
  
