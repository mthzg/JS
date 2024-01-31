fetch(
  "https://api.themoviedb.org/3/movie/100?api_key=db8a9810aeb4e2c5efc4a3fd217444bc"
)
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

/* image */
fetch(
  "https://api.themoviedb.org/3/movie/99?api_key=db8a9810aeb4e2c5efc4a3fd217444bc"
)
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

/* image3 */
fetch(
  "https://api.themoviedb.org/3/movie/98?api_key=db8a9810aeb4e2c5efc4a3fd217444bc"
)
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
