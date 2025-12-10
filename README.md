# 🇧🇷 Projeto Cypress BDD: Conversor de Moedas do Banco Central

## 🎯 Objetivo do Projeto

O objetivo deste projeto é automatizar testes de ponta a ponta (E2E) no portal do Banco Central do Brasil (BCB), especificamente na funcionalidade de **Conversor de Moedas**.

O teste segue a metodologia **Behavior-Driven Development (BDD)**, utilizando **Cypress** para a execução e **Cucumber** (via `cypress-cucumber-preprocessor`) para a estruturação dos cenários de negócio.

---

## 🧑‍💻 Grupo de Desenvolvimento

| Nome |
| :--- |
| **Anderson Victor Oliveira de Barros** |
| **Felipe Queiroz Pinto** |
| **João José Alves Neto** |

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos

* Node.js (versão LTS recomendada)
* NPM ou Yarn

### Instalação

1.  Clone o repositório.
2.  Instale as dependências:
    ```bash
    npm install
    # ou
    yarn install
    ```

### Execução dos Testes

1.  Abra o Cypress Test Runner:
    ```bash
    npx cypress open
    ```
2.  Selecione a opção **E2E Testing**.
3.  Escolha o arquivo `bcb_conversor.feature` para iniciar a execução.

---

## 📂 Estrutura do Projeto

O projeto segue o padrão **Page Object Model (POM)** para separação clara entre a lógica de negócio e os comandos de automação.

|- cypress/
      |- e2e/
        |- features/
          |- bcb_conversor.feature
	    |- steps/
          |- bcb_conversor.steps.js
      |- fixtures/
      |- pages/
        |- conversor.page.js
		|- home.page.js
      |- support/
        |- commands.js
        |- e2e.js
      |- cypress.config.js
      |- package-lock.json
      |- package.json
      |- README.md


## ✨ Cenários Automatizados

O teste garante que a funcionalidade principal de inversão funcione corretamente:

| Cenário | Ação | Resultado Esperado |
| :--- | :--- | :--- |
| **Acesso e Navegação** | Acessar o portal e navegar para a página de conversão. | URL correta (`/conversao`) e título visível. |
| **Conversão por Inversão** | Clicar no botão "Trocar moedas" (estado padrão: BRL $\to$ USD). | O Painel de Resultados deve confirmar a conversão de **Dólar (USD)** para **Real (BRL)**. |