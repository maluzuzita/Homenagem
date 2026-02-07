document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.querySelector('#input');
    if (!checkbox) {
        console.warn('Checkbox do switch não encontrado (id #input).');
        return;
    }

    const temaSalvo = localStorage.getItem('tema');
    const temaEscuro = temaSalvo === 'escuro';
    document.body.classList.toggle('tema-escuro', temaEscuro);
    checkbox.checked = temaEscuro;

    checkbox.addEventListener('change', () => {
        const ehEscuro = checkbox.checked;
        document.body.classList.toggle('tema-escuro', ehEscuro);
        localStorage.setItem('tema', ehEscuro ? 'escuro' : 'claro');
    });
});