
// cypress/pages/home.page.js
// Page Object da home do BCB com seleção resiliente da seção visível
// e clique no link "Ver todas as moedas". [1](https://docs.cypress.io/app/core-concepts/best-practices)

export class HomePage {
  visit() {
    // BaseUrl definida no cypress.config.js => https://www.bcb.gov.br
    cy.visit('/');
    // Garantir layout desktop (evita blocos mobile ocultos)
    cy.viewport(1366, 768);
  }

  clicarVerTodasAsMoedasNaSecaoConversor() {
    // Estratégia:
    // 1) Coletar um CONJUNTO de nós ('section' e 'div')
    // 2) Filtrar apenas os VISÍVEIS (evita 'd-none')
    // 3) Procurar a seção que contém "Conversor de moedas"
    // 4) Dentro dela, clicar no link "Ver todas as moedas" com fallback leve
    cy.get('section, div', { timeout: 15000 }) // conjunto amplo
      .filter(':visible')                      // só visíveis
      .contains(/Conversor de moedas/i)        // restringe por texto (case-insensitive)
      .scrollIntoView()                        // traz para a viewport
      .within(() => {
        // Localiza o link/botão pelo texto e tenta um clique "natural"
        cy.contains('a, button', /Ver todas as moedas/i, { matchCase: false })
          .should('be.visible')                // garante visibilidade do alvo
          .click({ scrollBehavior: 'center' }); // fallback leve (centraliza e clica)

        // --- ÚLTIMO RECURSO (deixe comentado) ---
        // Se, em ambientes específicos, o overlay/tooltip ainda bloquear,
        // habilite o clique forçado abaixo. Evitar quando possível! [1](https://docs.cypress.io/app/core-concepts/best-practices)
        // cy.contains('a, button', /Ver todas as moedas/i, { matchCase: false })
        //   .click({ force: true });
      });
  }
}

export default new HomePage();
