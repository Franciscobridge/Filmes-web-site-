function fetchMovies() {
    const endPoint = "https://api.themoviedb.org/3/movie/popular?api_key=e5af3d978ca0bdc423355e5b3ed90466";
    
    fetch(endPoint)
    .then(res => res.json())
    .then(data => imprimirFilmes(data))
    .catch(error => console.error("Erro ao receber dados", error));
}

fetchMovies();
function imprimirFilmes(data){
    var filmes = data.results
    filmes.forEach(filme => {
        console.log(filme)
        const card = document.createElement('div')
        card.classList.add('card')
        
        const img = document.createElement("img")
        img.classList.add('imgFilme')
        img.src = "https://image.tmdb.org/t/p/w500" + filme.poster_path;
        img.alt = filme.title
        
        const textCard = document.createElement('div')
        textCard.classList.add('textCard')
        
        const title = document.createElement("h2")
        title.textContent = filme.title
        
        const descricao = document.createElement('p')
        descricao.classList.add('descricao')
        descricao.textContent = filme.overview
        
        const secaoFilmes = document.querySelector('#filmes')
        
        
        card.appendChild(img)
        card.appendChild(textCard)
        textCard.appendChild(title)
        textCard.appendChild(descricao)
        secaoFilmes.appendChild(card)
    })
    
}