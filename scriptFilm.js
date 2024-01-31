idFilm = Math.random()*200
lienApi = "https://api.themoviedb.org/3/movie/"+idFilm+"?api_key=db8a9810aeb4e2c5efc4a3fd217444bc"

fetch(lienApi)
.then(response => response.json())
.then(data => 
{
    console.log(data)
    
    titrePage = document.querySelector('title');
    titrePage.innerHTML = "Alhuile-Ciné - "+data.title

    titrePoster = document.querySelector('.poster h2')
    titrePoster.innerHTML = data.title

    imagePoster = document.querySelector('.poster img');
    imagePoster.setAttribute('src',"https://image.tmdb.org/t/p/original/"+data.backdrop_path);

    synopsis = document.querySelector('.synopsis p');
    synopsis.innerHTML = data.overview
    
    rating = document.querySelector('.rating h3')
    rating.innerHTML = data.vote_average+"/10"    
})
.catch(error => console.error('Error:', error));