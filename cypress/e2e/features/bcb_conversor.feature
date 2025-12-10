
# language: pt
Funcionalidade: Acessar o conversor de moedas do Banco Central
  # Contexto: navega para a home do BCB (usando baseUrl configurado)
  Contexto:
    Dado que acesso o portal do Banco Central

  Cenário: ETAPA 1 — Acessar o conversor a partir da home
    # Ação: clica no link "Ver todas as moedas >" DENTRO da seção "Conversor de moedas"
    Quando eu clicar em "Ver todas as moedas >" na seção "Conversor de moedas"
    # Validação: garantir que a página "Conversor de Moedas" (/conversao) foi aberta
    Então devo visualizar a página "Conversor de Moedas"
