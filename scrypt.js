// Função para adicionar animações suaves ao rolar a página
document.addEventListener('DOMContentLoaded', () => {
    const articles = document.querySelectorAll('.article');

    // Verifica a posição dos artigos e aplica animação ao rolar a página
    function animateOnScroll() {
        const scrollPosition = window.scrollY + window.innerHeight;

        articles.forEach(article => {
            const articlePosition = article.offsetTop + article.offsetHeight;
            if (scrollPosition > articlePosition) {
                article.classList.add('visible');
            }
        });
    }

    // Adiciona classe para animação de fade-in nos artigos
    window.addEventListener('scroll', animateOnScroll);

    // Inicializa a animação ao carregar
    animateOnScroll();
});
