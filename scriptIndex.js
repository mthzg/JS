function fetchmovie (optionsimage,optionstitre) {
  let idFilm = Math.random()*200
  const lienApi = "https://api.themoviedb.org/3/movie/"+idFilm+"?api_key=db8a9810aeb4e2c5efc4a3fd217444bc"  
    fetch(lienApi)
    .then((response) => response.json())
    .then((data) => {
     let imagElement = document.querySelector(optionsimage);
      console.log(data.backdrop_path);
      imagElement.style.backgroundImage = "url(https://image.tmdb.org/t/p/original/"+data.backdrop_path+")";    
     let titrElement = document.querySelector(optionstitre);
      console.log(data.title);
      titrElement.textContent = data.title;
    })}
fetchmovie(".image-carousel1",".carousel-titre1")
fetchmovie(".image-carousel2",".carousel-titre2")
fetchmovie(".image-carousel3",".carousel-titre3")