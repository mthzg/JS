/*
idFilm = Math.random()*200
//idFilm = 201
lienApi = "https://api.themoviedb.org/3/movie/"+idFilm+"?api_key=db8a9810aeb4e2c5efc4a3fd217444bc"

fetch(lienApi)
  .then((response) => response.json())
  .then((data) => {
    image1 = document.querySelector(".trending1");
    console.log(data.backdrop_path);
    image1.setAttribute(
      "src",
      "https://image.tmdb.org/t/p/original/" + data.backdrop_path
    );
  })
  .catch((error) => console.error("Error:", error));

idFilm = Math.random()*200
//idFilm = 201
lienApi = "https://api.themoviedb.org/3/movie/"+idFilm+"?api_key=db8a9810aeb4e2c5efc4a3fd217444bc"

fetch(lienApi)
  .then((response) => response.json())
  .then((data) => {
    image2 = document.querySelector(".trending2");
    console.log(data.backdrop_path);
    image2.setAttribute(
      "src",
      "https://image.tmdb.org/t/p/original/" + data.backdrop_path
    );
  })
  .catch((error) => console.error("Error:", error));

idFilm = Math.random()*200
//idFilm = 201
lienApi = "https://api.themoviedb.org/3/movie/"+idFilm+"?api_key=db8a9810aeb4e2c5efc4a3fd217444bc"

fetch(lienApi)
  .then((response) => response.json())
  .then((data) => {
    image3 = document.querySelector(".trending3");
    console.log(data.backdrop_path);
    image3.setAttribute(
      "src",
      "https://image.tmdb.org/t/p/original/" + data.backdrop_path
    );
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