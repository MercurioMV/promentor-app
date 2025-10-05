// js/onboarding_script.js (Gerencia a transição e a conexão final)

document.addEventListener('DOMContentLoaded', function() {

    const stepRole = document.getElementById('step-role');
    const stepSuccess = document.getElementById('step-success');
    const continueRoleButton = document.getElementById('continue-role');
    const startJourneyButton = document.getElementById('start-journey');

    // Recupera o nome e o email
    const nomeCompleto = localStorage.getItem('usuarioNomeCompleto') || "Usuário";
    const email = localStorage.getItem('usuarioEmail') || "email@exemplo.com";

    const primeiroNome = nomeCompleto.split(' ')[0];

    // Atualiza os elementos de saudação
    document.getElementById('welcome-name').textContent = primeiroNome;
    document.getElementById('final-name').textContent = nomeCompleto;

    // NOVO: Atualiza o elemento do email
    const finalEmailElement = document.getElementById('final-email');
    if (finalEmailElement) {
        finalEmailElement.textContent = email;
    }


    // Ação: Botão Finalizar Cadastro (Transição interna para Sucesso)
    if (continueRoleButton) {
        continueRoleButton.addEventListener('click', () => {
            stepRole.classList.remove('active');
            stepRole.classList.add('hidden');
            stepSuccess.classList.remove('hidden');
            stepSuccess.classList.add('active');
        });
    }

    // Ação: Botão Pronto para começar (Conexão final com a Dashboard)
    if (startJourneyButton) {
        startJourneyButton.addEventListener('click', () => {
            location.href = 'home.html';
        });
    }
});