# language: pt

Funcionalidade: Testes Completos no Conversor de Moedas do Banco Central

  # Contexto: Executa os passos de pré-condição antes de CADA Cenário.
  Contexto: Acesso à Página do Conversor
    Dado que acesso o portal do Banco Central
    E eu clicar em "Ver todas as moedas >" na seção "Conversor de moedas"
    E devo visualizar a página "Conversor de Moedas"

  Cenario: Validação do Acesso à Página
    # Valida se a navegação inicial para a página de conversão foi bem-sucedida.
    Então devo visualizar a página "Conversor de Moedas"

  Cenario: Conversão de Real para Dólar usando Inversão
    # O teste inverte o estado padrão (BRL -> USD) para o estado final (USD -> BRL).
    
    Quando eu clico no botão "Inverter Moedas"
    Então o resultado deve ser a conversão de Dólar (USD) para Real (BRL)