// Efeito lanterna que segue o mouse
document.addEventListener('mousemove', (e) => {
    const flashlight = document.querySelector('.flashlight');
    flashlight.style.left = `${e.pageX}px`;
    flashlight.style.top = `${e.pageY}px`;
});

// Alternar tema claro/escuro
document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
});

// Efeito de digitação para outros elementos
function typeWriterEffect(element) {
    const text = element.textContent;
    element.textContent = '';
    
    let i = 0;
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, Math.random() * 100 + 50);
        }
    }
    type();
}

// Animações ao rolar a página
document.querySelectorAll('.manuscript-page').forEach((page, index) => {
    setTimeout(() => {
        page.style.opacity = 1;
        page.style.transform = 'translateY(0)';
    }, 300 * index);
});

// Efeitos para cards de projetos
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('glowing');
    });
    card.addEventListener('mouseleave', () => {
        card.classList.remove('glowing');
    });
});