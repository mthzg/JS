function changeCarouselMovieImage (optionsimage,lienImage,optionstitre,titre,lienId) {
  document.querySelector(optionsimage).addEventListener("click", function(e) {
  location.href = "http://127.0.0.1:5500/film.html?id="+lienId});
  let imageElement = document.querySelector(optionsimage);
  imageElement.setAttribute("src", "https://image.tmdb.org/t/p/original/"+lienImage);
  let titreElement = document.querySelector(optionstitre);
  titreElement.textContent = titre;
}
function changeTrendingMovieBackground (optionsimage,lienImage,optionstitre,titre,optionsDate,date, optionsLien, lienId) {
  let lienElement = document.querySelector(optionsLien);
  lienElement.setAttribute("href", "film.html?id="+lienId)
  let imageElement = document.querySelector(optionsimage);
  imageElement.style.backgroundImage = "url(https://image.tmdb.org/t/p/original/"+lienImage+")";
  let titreElement = document.querySelector(optionstitre);
  titreElement.textContent = titre;
  let dateElement = document.querySelector(optionsDate);
  dateElement.textContent = date;
}


function addDiv(startEndAddDiv) {
for (let i = startEndAddDiv; i < startEndAddDiv+20; i++) {
  divTrending = document.querySelector('.trending')
  HTMLToAdd = `<a href="index.html" class="trending-item trending`+(i+1)+`"><h2></h2><p></p></a>`
  divTrending.innerHTML = divTrending.innerHTML + HTMLToAdd
}};

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
    for (let i = 0; i < 3; i++) {
      let id = data.results[i].id;
      if (data.results[i].title === undefined){
        titre = data.results[i].name
      } 
      else {
        titre = data.results[i].title
      }
      changeCarouselMovieImage(".image-carousel"+(i+1),data.results[i].backdrop_path,".carousel-titre"+(i+1),titre,id);
    }});


    
function getTrending(page,startEndGetTrending) {
fetch(
  "https://api.themoviedb.org/3/trending/all/day?language=en-US&page="+page,options
  )
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    for (let i = startEndGetTrending; i < startEndGetTrending+20; i++) {
      let titreActuel = i-startEndGetTrending
      if (data.results[titreActuel].title === undefined){
        titre = data.results[titreActuel].name
      }
      else {
        titre = data.results[titreActuel].title
      }
      if (data.results[titreActuel].release_date === undefined){
        date = data.results[titreActuel].first_air_date
      }
      else {
        date = data.results[titreActuel].release_date
      }
      
      changeTrendingMovieBackground(".trending"+(i+1),data.results[titreActuel].backdrop_path,".trending"+(i+1)+" h2",titre,".trending"+(i+1)+" p",date,".trending"+(i+1),data.results[titreActuel].id);
    }
  });
};


let startEndVariable = 0;
let pageTrending = 1;
addDiv(startEndVariable);
getTrending(pageTrending,startEndVariable);
let mainDiv = document.querySelector(".grid-general");
mainDiv.onscroll = (e) => {
  let positionDuClient = document.documentElement.scrollTop+document.documentElement.clientHeight;
  let positionMaxPage = document.documentElement.scrollHeight-1;
  if (positionDuClient >= positionMaxPage) {
    startEndVariable += 20;
    pageTrending += 1;
    addDiv(startEndVariable);
    getTrending(pageTrending,startEndVariable);
    
  }
}


  /*let elements = [];
  
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