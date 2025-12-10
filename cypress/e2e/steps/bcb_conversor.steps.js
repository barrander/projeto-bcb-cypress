// Mapeamento dos steps do Gherkin para o código Cypress

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../pages/home.page';
import ConversorPage from '../../pages/conversor.page';

// -------------------------------------------------------------
// ETAPA 1: Acesso e Navegação
// -------------------------------------------------------------

Given('que acesso o portal do Banco Central', () => {
  HomePage.visit();
});

When(
  'eu clicar em "Ver todas as moedas >" na seção "Conversor de moedas"',
  () => {
    HomePage.clicarVerTodasAsMoedasNaSecaoConversor();
  }
);

Then('devo visualizar a página "Conversor de Moedas"', () => {
  ConversorPage.validarPaginaAberta();
});

// -------------------------------------------------------------
// ETAPA 2: Conversão (USD -> BRL)
// -------------------------------------------------------------

When('eu clico no botão "Inverter Moedas"', () => {
    ConversorPage.clicarInverter();
});

// Mapeamento da validação final.
Then('o resultado deve ser a conversão de Dólar (USD) para Real (BRL)', () => {
    ConversorPage.validarResultadoInversao();
});