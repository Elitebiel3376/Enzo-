'document.addEventListener('DOMContentLoaded', function() {
    const categoryButton = document.getElementById('category-button');
    const categoryList = document.getElementById('category-list');
    const movieGrid = document.getElementById('movie-grid');

    // Exibir/ocultar lista de categorias ao clicar no botão
    categoryButton.addEventListener('click', function() {
        categoryList.style.display = categoryList.style.display === 'block' ? 'none' : 'block';
    });

    // Simulação de dados de filmes (para teste)
    const movies = [
        // Filmes de Ação
        { title: 'Filme 1 de Ação', category: 'Ação', poster: 'posters/action/poster1.jpg' },
        { title: 'Filme 2 de Ação', category: 'Ação', poster: 'posters/action/poster2.jpg' },
        { title: 'Filme 3 de Ação', category: 'Ação', poster: 'posters/action/poster3.jpg' },
        // Adicione mais 35 filmes de Ação...
        { title: 'Filme 4 de Ação', category: 'Ação', poster: 'posters/action/poster4.jpg' },
        { title: 'Filme 5 de Ação', category: 'Ação', poster: 'posters/action/poster5.jpg' },
        { title: 'Filme 6 de Ação', category: 'Ação', poster: 'posters/action/poster6.jpg' },
        { title: 'Filme 7 de Ação', category: 'Ação', poster: 'posters/action/poster7.jpg' },
        { title: 'Filme 8 de Ação', category: 'Ação', poster: 'posters/action/poster8.jpg' },
        { title: 'Filme 9 de Ação', category: 'Ação', poster: 'posters/action/poster9.jpg' },
        { title: 'Filme 10 de Ação', category: 'Ação', poster: 'posters/action/poster10.jpg' },
        { title: 'Filme 11 de Ação', category: 'Ação', poster: 'posters/action/poster11.jpg' },
        { title: 'Filme 12 de Ação', category: 'Ação', poster: 'posters/action/poster12.jpg' },
        { title: 'Filme 13 de Ação', category: 'Ação', poster: 'posters/action/poster13.jpg' },
        { title: 'Filme 14 de Ação', category: 'Ação', poster: 'posters/action/poster14.jpg' },
        { title: 'Filme 15 de Ação', category: 'Ação', poster: 'posters/action/poster15.jpg' },
        { title: 'Filme 16 de Ação', category: 'Ação', poster: 'posters/action/poster16.jpg' },
        { title: 'Filme 17 de Ação', category: 'Ação', poster: 'posters/action/poster17.jpg' },
        { title: 'Filme 18 de Ação', category: 'Ação', poster: 'posters/action/poster18.jpg' },
        { title: 'Filme 19 de Ação', category: 'Ação', poster: 'posters/action/poster19.jpg' },
        { title: 'Filme 20 de Ação', category: 'Ação', poster: 'posters/action/poster20.jpg' },
        { title: 'Filme 21 de Ação', category: 'Ação', poster: 'posters/action/poster21.jpg' },
        { title: 'Filme 22 de Ação', category: 'Ação', poster: 'posters/action/poster22.jpg' },
        { title: 'Filme 23 de Ação', category: 'Ação', poster: 'posters/action/poster23.jpg' },
        { title: 'Filme 24 de Ação', category: 'Ação', poster: 'posters/action/poster24.jpg' },
        { title: 'Filme 25 de Ação', category: 'Ação', poster: 'posters/action/poster25.jpg' },
        { title: 'Filme 26 de Ação', category: 'Ação', poster: 'posters/action/poster26.jpg' },
        { title: 'Filme 27 de Ação', category: 'Ação', poster: 'posters/action/poster27.jpg' },
        { title: 'Filme 28 de Ação', category: 'Ação', poster: 'posters/action/poster28.jpg' },
        { title: 'Filme 29 de Ação', category: 'Ação', poster: 'posters/action/poster29.jpg' },
        { title: 'Filme 30 de Ação', category: 'Ação', poster: 'posters/action/poster30.jpg' },
        { title: 'Filme 31 de Ação', category: 'Ação', poster: 'posters/action/poster31.jpg' },
        { title: 'Filme 32 de Ação', category: 'Ação', poster: 'posters/action/poster32.jpg' },
        { title: 'Filme 33 de Ação', category: 'Ação', poster: 'posters/action/poster33.jpg' },
        { title: 'Filme 34 de Ação', category: 'Ação', poster: 'posters/action/poster34.jpg' },
        { title: 'Filme 35 de Ação', category: 'Ação', poster: 'posters/action/poster35.jpg' },

        // Filmes de Comédia
        { title: 'Filme 1 de Comédia', category: 'Comédia', poster: 'posters/comedy/poster1.jpg' },
        { title: 'Filme 2 de Comédia', category: 'Comédia', poster: 'posters/comedy/poster2.jpg' },
        { title: 'Filme 3 de Comédia', category: 'Comédia', poster: 'posters/comedy/poster3.jpg' },
        // Adicione mais 35 filmes de Comédia...
        { title: 'Filme 4 de Comédia', category: 'Comédia', poster: 'posters/comedy/poster4.jpg' },
        { title: 'Filme 5 de Comédia', category: 'Comédia', poster: 'posters/comedy/poster5.jpg' },
        { title: 'Filme 6 de Comédia', category: 'Comédia', poster: 'posters/comedy/poster6.jpg' },
        { title: 'Filme 7 de Comédia', category: 'Comédia', poster: '