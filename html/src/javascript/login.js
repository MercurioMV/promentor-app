// js/login.js (Conecta index.html ao onboarding.html)

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // 1. Coleta e salva o nome completo
        const nomeCompleto = document.getElementById('usuario').value;
        localStorage.setItem('usuarioNomeCompleto', nomeCompleto);

        // NOVO: 2. Coleta e salva o email
        const email = document.getElementById('email').value;
        localStorage.setItem('usuarioEmail', email);

        // 3. Redireciona para a tela de Onboarding/Escolha de Papel
        location.href = 'onboarding.html';
    });
});