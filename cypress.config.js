
// cypress.config.js
const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.bcb.gov.br',      // facilita cy.visit('/')
    specPattern: '**/*.feature',            // roda arquivos Gherkin
    defaultCommandTimeout: 15000,
    viewportWidth: 1366,
    viewportHeight: 768,
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());  // habilita o preprocessor BDD
      return config;
    },
  }
})