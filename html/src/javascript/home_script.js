// home_script.js

document.addEventListener('DOMContentLoaded', function() {
    // 1. Recupera o nome completo salvo no localStorage no login.js
    const nomeSalvo = localStorage.getItem('usuarioNomeCompleto');

    // 2. Encontra o elemento <span> que criamos na home.html
    const spanNome = document.getElementById('usuario-nome');

    // 3. Verifica se o nome existe e injeta o primeiro nome na saudação
    if (nomeSalvo && spanNome) {
        const primeiroNome = nomeSalvo.split(' ')[0];
        spanNome.textContent = primeiroNome;
    }
});
