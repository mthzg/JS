let listeFilm = [];

function changeCarouselMovieImage (optionsimage,lienImage,optionstitre,titre) {
  let imageElement = document.querySelector(optionsimage);
  imageElement.setAttribute("src", "https://image.tmdb.org/t/p/original/"+lienImage);
  let titreElement = document.querySelector(optionstitre);
  titreElement.textContent = titre;
}
function changeTrendingMovieBackground (optionsimage,lienImage,optionstitre,titre,optionsDate,date) {
  let imageElement = document.querySelector(optionsimage);
  imageElement.style.backgroundImage = "url(https://image.tmdb.org/t/p/original/"+lienImage+")";
  let titreElement = document.querySelector(optionstitre);
  titreElement.textContent = titre;
  let dateElement = document.querySelector(optionsDate);
  dateElement.textContent = date;
}



for (let i = 0; i < 18; i++) {
  divTrending = document.querySelector('.trending')
  HTMLToAdd = `<div class="trending-item trending`+(i+1)+`"><h2></h2><p></p></div>`
  divTrending.innerHTML = divTrending.innerHTML + HTMLToAdd
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
      if (data.results[i].title === undefined){
        titre = data.results[i].name
      }
      else {
        titre = data.results[i].title
      }
      changeCarouselMovieImage(".image-carousel"+(i+1),data.results[i].backdrop_path,".carousel-titre"+(i+1),titre);
    }
    for (let i = 0; i < 18; i++) {
      if (data.results[i].title === undefined){
        titre = data.results[i].name
      }
      else {
        titre = data.results[i].title
      }
      if (data.results[i].release_date === undefined){
        date = data.results[i].first_air_date
      }
      else {
        date = data.results[i].release_date
      }
      
      listeFilm.push(data.results[i].id);
      changeTrendingMovieBackground(".trending"+(i+1),data.results[i].backdrop_path,".trending"+(i+1)+" h2",titre,".trending"+(i+1)+" p",date);
    }
  });
let elements = [];

  for (let i=0; i<18;i++){
  elements.push(document.querySelector('.trending'+(i+1)))
  elements[i].addEventListener('click', function (event) {
    const expireDate = new Date()
    expireDate.setTime(expireDate.getTime() + 30000)
    let className = elements[i].classList[1]
    className = className.substring(8);
    document.cookie = "idFilm="+listeFilm[className-1]+";expires="+expireDate.toUTCString()+";";
    window.location.href="film.html";
  });}





  /*
  element2 = document.querySelector('.trending1')
  element2.addEventListener('click', function (event) {
    let className = element2.classList[1]
    className = className.substring(8);
    //document.cookie = listeFilm[className-1];
    console.log(listeFilm[className-1], className)
  });
*/


  
  //window.onscroll = function() {
    //  if window.innerHeight > window.innerWidth
    //}
    
    
    
    
    
    
    
//function fetchmovie (optionsimage,optionstitre, idFilm) {
//  const lienApi = "https://api.themoviedb.org/3/movie/"+idFilm+"?api_key=db8a9810aeb4e2c5efc4a3fd217444bc"  
//    fetch(lienApi)
//    .then((response) => response.json())
//    .then((data) => {
//     let imageElement = document.querySelector(optionsimage);
//      imageElement.setAttribute("src", "https://image.tmdb.org/t/p/original/"+data.backdrop_path);
//     let titreElement = document.querySelector(optionstitre);
//      titreElement.textContent = data.title;
//    })}
    
//function fetchMovieBackground (optionsimage,optionstitre, idFilm) {
//const lienApi = "https://api.themoviedb.org/3/movie/"+idFilm+"?api_key=db8a9810aeb4e2c5efc4a3fd217444bc"  
//  fetch(lienApi)
//  .then((response) => response.json())
//  .then((data) => {
//    let imageElement = document.querySelector(optionsimage);
//    imageElement.style.backgroundImage = "url(https://image.tmdb.org/t/p/original/"+data.backdrop_path+")";
//    let titreElement = document.querySelector(optionstitre);
//    titreElement.textContent = data.title;
//  })}