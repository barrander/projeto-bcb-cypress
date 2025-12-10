
// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../pages/home.page';
import ConversorPage from '../../pages/conversor.page';

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
