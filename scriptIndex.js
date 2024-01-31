function fetchmovie (optionsimage,optionstitre, idFilm) {
  const lienApi = "https://api.themoviedb.org/3/movie/"+idFilm+"?api_key=db8a9810aeb4e2c5efc4a3fd217444bc"  
    fetch(lienApi)
    .then((response) => response.json())
    .then((data) => {
     let imagElement = document.querySelector(optionsimage);
      imagElement.setAttribute("src", "https://image.tmdb.org/t/p/original/"+data.backdrop_path);
     let titrElement = document.querySelector(optionstitre);
      titrElement.textContent = data.title;
    })}

function fetchMovieBackground (optionsimage,optionstitre, idFilm) {
const lienApi = "https://api.themoviedb.org/3/movie/"+idFilm+"?api_key=db8a9810aeb4e2c5efc4a3fd217444bc"  
  fetch(lienApi)
  .then((response) => response.json())
  .then((data) => {
    let imagElement = document.querySelector(optionsimage);
    imagElement.style.backgroundImage = "url(https://image.tmdb.org/t/p/original/"+data.backdrop_path+")";
    let titrElement = document.querySelector(optionstitre);
    titrElement.textContent = data.title;
  })}



const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjhhOTgxMGFlYjRlMmM1ZWZjNGEzZmQyMTc0NDRiYyIsInN1YiI6IjY1Yjc1YmJlZDU1YzNkMDE3Y2ZhYzBiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0XfH-ZZ0XcDH-KXR7ZINt7KhzuICXcbvlnaNrzc0aEM'
  }
};
for (let i = 0; i < 15; i++) {
divTrending = document.querySelector('.trending')
test = `<div class="trending-item trending`+(i+1)+`"><h2></h2></div>`
divTrending.innerHTML = divTrending.innerHTML + test
}



fetch(
  "https://api.themoviedb.org/3/trending/all/day?language=en-US",options
)
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < 3; i++) {
      fetchmovie(".image-carousel"+(i+1),".carousel-titre"+(i+1),data.results[i].id);
    }
    for (let i = 0; i < 15; i++) {
      fetchMovieBackground(".trending"+(i+1),".trending"+(i+1)+" h2",data.results[i].id);
    }
  });