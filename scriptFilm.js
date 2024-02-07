const parametresRecherche = new URLSearchParams(window.location.search);
idFilm = parametresRecherche.get('id');
lienApi = "https://api.themoviedb.org/3/movie/"+idFilm+"?api_key=db8a9810aeb4e2c5efc4a3fd217444bc"

function getCookie(cookieName,index) {
  cookieName = cookieName + "=";
  let cookiesArray = document.cookie.split('; ');
  let cookieNameLength = cookieName.length
  console.log(cookiesArray[index].substring(cookieNameLength))
  finalCookie = cookiesArray[index].substring(cookieNameLength)
  return finalCookie
}

let cookie = document.cookie
if (cookie === '') {
  console.log("Pas de session")
}
else {
  accessKey = getCookie('accessKey',0)
  session_id = getCookie('session_id',1)
}


fetch(lienApi)
.then(response => response.json())
.then(data => 
{
  console.log(data)
  
  titrePage = document.querySelector('title');
    titrePage.innerHTML = "Alhuile-Ciné - "+data.title
    
    titrePoster = document.querySelector('.poster h2')
    titrePoster.innerHTML = data.title
    
    imagePoster = document.querySelector('.poster');
    imagePoster.style.backgroundImage = "url(https://image.tmdb.org/t/p/original/"+data.backdrop_path+")";
    
    synopsis = document.querySelector('.synopsis p');
    synopsis.innerHTML = data.overview
    
    rating = document.querySelector('.rating h3')
    let voteInt = (Math.round(data.vote_average*10))/10;
    rating.innerHTML = voteInt+" / 10"
  })
  .catch(error => console.error('Error:', error));

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: accessKey
  }
};
fetch('https://api.themoviedb.org/3/movie/'+idFilm+'/reviews?language=en-US&page=1', options)
.then(response => response.json())
.then((data) => {
  console.log(data)
  for (let i = 0; i < data.total_results; i++) {
    const url = "https://media.themoviedb.org/t/p/w300_and_h300_face/"
    const divComm = document.querySelector(".zone-commentaires")
    let username = data.results[i].author_details.name
    let content = data.results[i].content
    let avatar = data.results[i].author_details.avatar_path
    let date = data.results[i].created_at
    let truncateddate = date.substring(0, 10)
    let truncatedContent = content.substring(0, 900)
    let defaultimg = "default-avatar.png"
    if (avatar === null) {
      avatar = defaultimg
    }
    else {
      avatar = url+avatar
    }
    if (username === ""){
      username = data.results[i].author_details.username
      if (username === "") {
        username = "Anonyme"
      }
    }
    HTMLToAdd = 
      `<div class="commentaire com">
        <h3>`+username+`<p>`+truncateddate+`</p></h3>
        <p class="texte">`+truncatedContent+`</p>
        <img class="pp" src="`+avatar+`" alt="">
      </div>`
    divComm.innerHTML = divComm.innerHTML + HTMLToAdd 
  }})

function addRating() {
  ratingSelected = document.querySelector('select option:checked');
  rating = ratingSelected.value
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: accessKey
    },
    body: '{"value":'+rating+'}'
  };
  fetch('https://api.themoviedb.org/3/movie/790462/rating?session_id='+session_id, options)
  .then(response => response.json())
  .then(response => {
    if(response.success === true) {
      alert("La note a bien été publiée");
    }
    else {
      alert("La note n'a pas pu être publiée");
    }
})
  .catch(err => alert("La note n'a pas pu être publiée"));
}

bouton = document.querySelector(".submit");
bouton.addEventListener("click", addRating);





  /*console.log("checkpoint")
let commentaire = document.querySelector('.user-comm-content')
let content = commentaire.textContent
const divComm = document.querySelector('zone-commentaires')
  document.querySelector(".submit").addEventListener("click", function() {
    HTMLToAdd =
    `<div class="commentaire com">
      <h3>`+"lul"+`<p>`+"lul"+`</p></h3>
      <p class="texte">`+content+`</p>
      <img class="pp" src="``" alt="">
    </div>`
    console.log(divComm)
    divComm.innerHTML = divComm.innerHTML + HTMLToAdd
  }); 
  
  //idFilm = document.cookie
  //console.log(idFilm);
  //idFilm = idFilm.substring(7);
  //console.log(idFilm);*/