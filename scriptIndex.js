function fetchmovie (optionsimage,optionstitre, idFilm) {
  const lienApi = "https://api.themoviedb.org/3/movie/"+idFilm+"?api_key=db8a9810aeb4e2c5efc4a3fd217444bc"  
    fetch(lienApi)
    .then((response) => response.json())
    .then((data) => {
     let imagElement = document.querySelector(optionsimage);
      console.log(data.backdrop_path);
      imagElement.setAttribute("src", "https://image.tmdb.org/t/p/original/"+data.backdrop_path);
     let titrElement = document.querySelector(optionstitre);
      console.log(data.title);
      titrElement.textContent = data.title;
    })}

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjhhOTgxMGFlYjRlMmM1ZWZjNGEzZmQyMTc0NDRiYyIsInN1YiI6IjY1Yjc1YmJlZDU1YzNkMDE3Y2ZhYzBiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0XfH-ZZ0XcDH-KXR7ZINt7KhzuICXcbvlnaNrzc0aEM'
  }
};
fetch(
  "https://api.themoviedb.org/3/trending/all/day?language=en-US",options
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data.results[0])
    for (let i = 0; i < 3; i++) {
      fetchmovie(".image-carousel"+(i+1),".carousel-titre"+(i+1),data.results[i].id);
    }
  });