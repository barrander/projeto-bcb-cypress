
// cypress/support/e2e.js

// Hook global: antes de cada teste, tentar fechar o banner de cookies.
// Racional: manter testes isolados e evitarbeforeEach(() => {// Racional: manter testes isolados e evitar overlay que atrapalhe cliques.
  const fecharCookies = () => {
    cy.get('body', { timeout: 10000 }).then(($body) => {
      // Procura botões visíveis cujo texto contenha uma das labels comuns do banner
      const labels = ['Aceitar cookies', 'Rejeitar cookies', 'Gerenciar cookies'];
      let clicked = false;

      labels.forEach((label) => {
        const btn = $body.find('button:visible').filter((i, el) => {
          const text = (el.innerText || '').toLowerCase();
          return text.includes(label.toLowerCase());
        });

        if (btn.length && !clicked) {
          // wrap volta ao fluxo do Cypress; overlays/anim podem exigir force
          cy.wrap(btn.first()).click({ force: true });
          clicked = true;
        }
      });
    });
  };

  fecharCookies();
// Boas práticas: seletores contextuais e evitar "force" quando possível. [1](https://docs.cypress.io/app/core-concepts/best-practices)
