document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Lógica do Menu Mobile
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        const links = document.querySelectorAll('.nav-links a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                menuBtn.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // 2. Lógica de Animação ao Rolar (Intersection Observer)
    // Esta é a parte que faz o site parecer "vivo"
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Uma vez que animou, paramos de observar esse elemento para poupar performance
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15 // Dispara quando 15% do elemento estiver visível
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // 3. Lógica do Formulário de Contato
    const waForm = document.getElementById('wa-form');
    if (waForm) {
        waForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('form-name').value;
            const problem = document.getElementById('form-problem').value;
            const phone = "5549999417778";
            
            const message = `Olá! Meu nome é ${name}. Gostaria de um orçamento para: ${problem}. Sou de Caçador/SC.`;
            const encodedMsg = encodeURIComponent(message);
            window.open(`https://wa.me/${phone}?text=${encodedMsg}`, '_blank');
        });
    }

    // 4. Scroll Suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId !== "#") {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const headerOffset = 80;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            }
        });
    });
});