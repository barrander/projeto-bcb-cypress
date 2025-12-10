export class ConversorPage {
    // === 1. Seletores ===
    get inputValor() { return '#valor'; } 
    // Seletor estável baseado no atributo title do botão de inversão.
    get botaoInverter() { return 'button[title="Trocar moedas"]'; } 
    get resultadoConversao() { return '#resultadoConversao'; } 

    // === 2. Métodos ===
    
    validarPaginaAberta() {
        cy.log('Validando acesso à página: Foco na URL.');

        // 1. Validação da URL (Requisito de navegação)
        cy.url().should('include', '/conversao');
        
        // 2. Confirmação visual do TÍTULO (Verifica se a página carregou o cabeçalho)
        cy.contains('h1, h2, div', 'Conversor de Moedas', { timeout: 15000 }).should('exist');
    }

    clicarInverter() {
        cy.log('Aguardando 3s e clicando no botão "Trocar moedas" com clique forçado.');
        
        // 1. ESPERA ESTÁTICA: Necessária para garantir a renderização completa do formulário 
        // e superar problemas de 'display: none'.
        cy.wait(3000); 

        // 2. O clique forçado (ignora problemas de visibilidade parcial)
        cy.get(this.botaoInverter, { timeout: 15000 }).click({ force: true });
        cy.wait(1000); // Pausa para visualização da inversão
    }

    validarResultadoInversao() {
        cy.log('Validando a inversão para USD -> BRL usando o Painel de Resultados.');

        // 1. Valida que o Painel de Resultado está visível após a conversão.
        cy.get(this.resultadoConversao, { timeout: 10000 }).should('be.visible');

        // 2. Valida o texto que confirma a MOEDA DE ORIGEM: Dólar dos Estados Unidos (USD)
        cy.contains('Conversão de: Dólar dos Estados Unidos/USD (220)', { timeout: 10000 })
            .should('exist');
        
        // 3. Valida o texto que confirma a MOEDA DE DESTINO: Real (BRL)
        cy.contains('Para: Real/BRL (790)', { timeout: 10000 })
            .should('exist');

        cy.wait(1000); // Pausa para visualização final
        
        cy.log('Inversão de moedas USD -> BRL validada com sucesso no painel de resultados.');
    }
}

export default new ConversorPage();