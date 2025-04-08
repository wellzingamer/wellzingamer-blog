// Função para adicionar animação ao header quando o usuário rolar a página
window.onscroll = function() {
    let header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#000';
    } else {
        header.style.backgroundColor = 'transparent';
    }
};

// Animação suave para as imagens dos artigos
document.addEventListener('DOMContentLoaded', () => {
    const articleCards = document.querySelectorAll('.article-card');
    
    articleCards.forEach(card => {
        card.classList.add('fade-in');
    });

    // Adiciona a animação quando a imagem entrar na viewport
    window.addEventListener('scroll', () => {
        articleCards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight;

            if (cardPosition < screenPosition) {
                card.classList.add('fade-in-visible');
            }
        });
    });
});
