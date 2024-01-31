
function changeMovie (optionsimage,lienImage,optionstitre,titre) {
  let imagElement = document.querySelector(optionsimage);
  imagElement.setAttribute("src", "https://image.tmdb.org/t/p/original/"+lienImage);
  let titrElement = document.querySelector(optionstitre);
  titrElement.textContent = titre;
}
function changeMovieBackground (optionsimage,lienImage,optionstitre, titre) {
  let imagElement = document.querySelector(optionsimage);
  imagElement.style.backgroundImage = "url(https://image.tmdb.org/t/p/original/"+lienImage+")";
  let titrElement = document.querySelector(optionstitre);
  titrElement.textContent = titre;
}



for (let i = 0; i < 18; i++) {
  divTrending = document.querySelector('.trending')
  test = `<div class="trending-item trending`+(i+1)+`"><h2></h2></div>`
  divTrending.innerHTML = divTrending.innerHTML + test
}

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
    console.log(data)
    for (let i = 0; i < 3; i++) {
      changeMovie(".image-carousel"+(i+1),data.results[i].backdrop_path,".carousel-titre"+(i+1),data.results[i].title);
    }
    for (let i = 0; i < 18; i++) {
      if (data.results[i].title === undefined){
        titre = data.results[i].name
      }
      else {
        titre = data.results[i].title
      }
      changeMovieBackground(".trending"+(i+1),data.results[i].backdrop_path,".trending"+(i+1)+" h2",titre);
    }
  });
  
  
  
  
  
  //window.onscroll = function() {
    //  if window.innerHeight > window.innerWidth
    //}
    
    
    
    
    
    
    
//function fetchmovie (optionsimage,optionstitre, idFilm) {
//  const lienApi = "https://api.themoviedb.org/3/movie/"+idFilm+"?api_key=db8a9810aeb4e2c5efc4a3fd217444bc"  
//    fetch(lienApi)
//    .then((response) => response.json())
//    .then((data) => {
//     let imagElement = document.querySelector(optionsimage);
//      imagElement.setAttribute("src", "https://image.tmdb.org/t/p/original/"+data.backdrop_path);
//     let titrElement = document.querySelector(optionstitre);
//      titrElement.textContent = data.title;
//    })}
    
//function fetchMovieBackground (optionsimage,optionstitre, idFilm) {
//const lienApi = "https://api.themoviedb.org/3/movie/"+idFilm+"?api_key=db8a9810aeb4e2c5efc4a3fd217444bc"  
//  fetch(lienApi)
//  .then((response) => response.json())
//  .then((data) => {
//    let imagElement = document.querySelector(optionsimage);
//    imagElement.style.backgroundImage = "url(https://image.tmdb.org/t/p/original/"+data.backdrop_path+")";
//    let titrElement = document.querySelector(optionstitre);
//    titrElement.textContent = data.title;
//  })}