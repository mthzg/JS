fetch(
  "https://api.themoviedb.org/3/movie/100?api_key=db8a9810aeb4e2c5efc4a3fd217444bc"
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data.backdrop_path);

    titreFilm = document.querySelector(".trending1 h2");
    titreFilm.innerHTML = data.title

    image1 = document.querySelector(".trending1");
    image1.style.backgroundImage = "url(https://image.tmdb.org/t/p/original/"+data.backdrop_path+")";

  })
  .catch((error) => console.error("Error:", error));

/* image */
fetch(
  "https://api.themoviedb.org/3/movie/99?api_key=db8a9810aeb4e2c5efc4a3fd217444bc"
)
  .then((response) => response.json())
  .then((data) => 
  {
    titreFilm2 = document.querySelector(".trending2 h2");
    titreFilm2.innerHTML = data.title

    image2 = document.querySelector(".trending2");
    image2.style.backgroundImage = "url(https://image.tmdb.org/t/p/original/"+data.backdrop_path+")";
 })
  .catch((error) => console.error("Error:", error));

/* image3 */
fetch(
  "https://api.themoviedb.org/3/movie/98?api_key=db8a9810aeb4e2c5efc4a3fd217444bc"
)
  .then((response) => response.json())
  .then((data) => {
    titreFilm3 = document.querySelector(".trending3 h2");
    titreFilm3.innerHTML = data.title

    image3 = document.querySelector(".trending3");
    image3.style.backgroundImage = "url(https://image.tmdb.org/t/p/original/"+data.backdrop_path+")";

  })
  .catch((error) => console.error("Error:", error));
