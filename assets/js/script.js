  // Alternar entre seções
function loadSection(sectionId) {
    document.querySelectorAll('#game-screen section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// Efeito de digitação (opcional)
const heroTitle = document.querySelector('.tavern-sign h1');
const text = "";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        heroTitle.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}

typeWriter();