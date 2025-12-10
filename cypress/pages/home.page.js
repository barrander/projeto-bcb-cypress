// home.page.js: Define os métodos e seletores para a página inicial do BCB.

export class HomePage {
    
    visit() {
        // 1. Acessa a URL base definida no cypress.config.js.
        cy.visit('/');
        // 2. Garante layout desktop para consistência do teste.
        cy.viewport(1366, 768);
        
        // Pausa para visualização da navegação.
        cy.wait(1000); 
        
        // 3. Tratamento de Cookies: Tenta rejeitar o aviso se estiver visível.
        cy.get('#avisoCookie button, button:contains("Rejeitar cookies")', { timeout: 10000 })
            .should('exist') 
            .then(($btn) => {
                if ($btn.is(':visible')) {
                    cy.wrap($btn).contains('Rejeitar cookies').click();
                    cy.wait(500); // Pequena pausa após o clique.
                } else {
                    cy.log('Aviso de cookie não visível ou já rejeitado.');
                }
            });
    }

    clicarVerTodasAsMoedasNaSecaoConversor() {
        cy.log('Localizando e clicando em "Ver todas as moedas >"');
        
        // 1. Localiza a seção "Conversor de moedas", garante que está visível e rola a tela.
        cy.get('section, div', { timeout: 15000 })
            .filter(':visible')
            .contains(/Conversor de moedas/i)
            .scrollIntoView();

        // 2. Localiza e clica no link de navegação para o conversor.
        cy.contains('a.internal-link, a', /Ver todas as moedas/i)
            .should('exist') // Garante que o link está no DOM
            .click({ force: true }); // Clique forçado para evitar interrupções de renderização.
    }
}

export default new HomePage();