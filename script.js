document.addEventListener('DOMContentLoaded', () => {
    // Lógica para o formulário de contato via WhatsApp
    const waForm = document.getElementById('wa-form');
    
    if (waForm) {
        waForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('form-name').value;
            const problem = document.getElementById('form-problem').value;
            const phone = "5549999417778";
            
            // Monta a mensagem para URL
            const baseMsg = `Olá! Meu nome é ${name}. Gostaria de um orçamento para: ${problem}. Sou de Caçador/SC.`;
            const encodedMsg = encodeURIComponent(baseMsg);
            
            const waUrl = `https://wa.me/${phone}?text=${encodedMsg}`;
            
            // Abre em nova aba
            window.open(waUrl, '_blank');
        });
    }

    // Scroll Suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile Menu Toggle (Básico)
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '70px';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.backgroundColor = 'var(--bg)';
            navLinks.style.padding = '20px';
        });
    }
});