
// ### ❌ Caso 4: Login sem inserir  senha no campo senha
// - **Usuário**: `standard_user`
// - **Senha**: ``
// - Esperado: exibir mensagem informando que o usuário deve preencher o campo senha

describe("Fluxo de Login - Usuário com acesso inválido por meio de um campo ausente (campo senha)", () => {
    it("Não deve autenticar o usuário e nem redirecionar para a página de produtos", () => {
      cy.visit("https://www.saucedemo.com");
      cy.wait(2000); // espera 2 segundos (2000 milissegundos)
      cy.get('[data-test="username"]').type("standard_user");
      // não interagir com campo senha
      cy.wait(2000); // espera 2 segundos (2000 milissegundos)
      cy.get('[data-test="login-button"]').click();
      
      cy.wait(2000); // espera 2 segundos (2000 milissegundos)
      cy.get('[data-test="error"]', { timeout: 2000 }).should('be.visible')
        .and('contain', 'Epic sadface: Password is required')


     //AQUI EU TROUXE O ELEMENTO COMPLETO CASO DUVIDAS
    //   <div class="error-message-container error"><h3 data-test="error"><button class="error-button" data-test="error-button">
    //   <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" class="svg-inline--fa fa-times fa-w-11 " role="img" 
    //   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor"
    //    d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.
    //    19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2
    //     12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
    //     </button>Epic sadface: Password is required</h3></div>

        });
  });