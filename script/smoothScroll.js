document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os links da nav que começam com #
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Impede o comportamento padrão (teleporte)
            
            const targetId = this.getAttribute('href'); // Pega o href, ex: #home-principal
            const targetElement = document.querySelector(targetId); // Encontra o elemento alvo
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth', // Rolagem suave
                    block: 'start' // Alinha ao topo da seção
                });
            }
        });
    });
});