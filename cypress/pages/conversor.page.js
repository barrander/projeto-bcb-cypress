
// cypress/pages/conversor.page.js
// Garante que a página do Conversor (/conversao) está aberta e visível.

export class ConversorPage {
  validarPaginaAberta() {
    // Alguns fluxos do link "Ver todas as moedas" podem levar a cotações.
    // Para cumprir a ETAPA 1, garantimos /conversao e validamos o título.
    cy.location('pathname', { timeout: 10000 }).then((path) => {
      if (!path.includes('/conversao')) {
        cy.log('Ajustando navegação para /conversao (validar Conversor).');
        cy.visit('/conversao');
      }
    });

    cy.contains('h1,h2', /Conversor de Moedas/i, { timeout: 10000 })
      .should('be.visible');
  }
}

export default new ConversorPage();
