const botao = document.getElementById('botaoTopo');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        botao.classList.add('mostrar');
    } else {
        botao.classList.remove('mostrar');
    }
});

botao.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});