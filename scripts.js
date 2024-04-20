document.addEventListener('DOMContentLoaded', function() {
    // Adiciona evento de rolagem suave para links âncora
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Adiciona validação básica ao formulário de contato
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
            alert('Por favor, preencha todos os campos.');
        } else {
            // Simula envio do formulário
            alert('Formulário enviado com sucesso!');
            nameInput.value = '';
            emailInput.value = '';
            messageInput.value = '';
        }
    });
});
