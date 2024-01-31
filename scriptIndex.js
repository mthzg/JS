/*
idFilm = Math.random()*200
//idFilm = 201
lienApi = "https://api.themoviedb.org/3/movie/"+idFilm+"?api_key=db8a9810aeb4e2c5efc4a3fd217444bc"

fetch(lienApi)
  .then((response) => response.json())
  .then((data) => {
    console.log(data.backdrop_path);

    titreFilm = document.querySelector(".trending1 h2");
    titreFilm.innerHTML = data.title

    image1 = document.querySelector(".trending1");
    image1.style.backgroundImage = "url(https://image.tmdb.org/t/p/original/"+data.backdrop_path+")";

  })
  .catch((error) => console.error("Error:", error));

idFilm = Math.random()*200
//idFilm = 201
lienApi = "https://api.themoviedb.org/3/movie/"+idFilm+"?api_key=db8a9810aeb4e2c5efc4a3fd217444bc"

fetch(lienApi)
  .then((response) => response.json())
  .then((data) => 
  {
    titreFilm2 = document.querySelector(".trending2 h2");
    titreFilm2.innerHTML = data.title

    image2 = document.querySelector(".trending2");
    image2.style.backgroundImage = "url(https://image.tmdb.org/t/p/original/"+data.backdrop_path+")";
 })
  .catch((error) => console.error("Error:", error));

idFilm = Math.random()*200
//idFilm = 201
lienApi = "https://api.themoviedb.org/3/movie/"+idFilm+"?api_key=db8a9810aeb4e2c5efc4a3fd217444bc"

fetch(lienApi)
  .then((response) => response.json())
  .then((data) => {
    titreFilm3 = document.querySelector(".trending3 h2");
    titreFilm3.innerHTML = data.title

    image3 = document.querySelector(".trending3");
    image3.style.backgroundImage = "url(https://image.tmdb.org/t/p/original/"+data.backdrop_path+")";

  })
  .catch((error) => console.error("Error:", error));


  */


function fetchmovie (name, options) {
  idFilm = Math.random()*200
  lienApi = "https://api.themoviedb.org/3/movie/"+idFilm+"?api_key=db8a9810aeb4e2c5efc4a3fd217444bc"  
    fetch(lienApi)
    .then((response) => response.json())
    .then((data) => {
      name = document.querySelector(options);
      console.log(data.backdrop_path);
      name.setAttribute(
        "src",
        "https://image.tmdb.org/t/p/original/" + data.backdrop_path
      );
    })}


test = ".trending1"
fetchmovie(image1,test)