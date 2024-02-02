idFilm = document.cookie
console.log(idFilm);
idFilm = idFilm.substring(7);
console.log(idFilm);
lienApi = "https://api.themoviedb.org/3/movie/"+idFilm+"?api_key=db8a9810aeb4e2c5efc4a3fd217444bc"

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

x = 0
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOWI1MzgyMmUwNzlhMjA3OWEyNTU3YmY4YzE2YjFhOCIsInN1YiI6IjY1YjRmN2U3NThlZmQzMDE2M2NhM2E1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8jpbHJlS1LVUQ7D2ulav92LOTi88tzJGZZ7RlcwrA9c'
    }
  };
  fetch('https://api.themoviedb.org/3/movie/866398/reviews?language=en-US&page=1', options)
  .then(response => response.json())
  .then((data) => {
    console.log(data)
    console.log(data.results[x].author_details.username)
    console.log(data.results[x].author_details.avatar_path)
    console.log(data.results[x].created_at)
    console.log(data.results[x].content)
  })

for (let i = 0; i < 6 || i == undefined; i++) {
    divComm = document.querySelector('.zone-commentaires')
    HTMLToAdd = `<div class="commentaire com`+(i+1)+`">
    <img class="pp`+(i+1)+`" src="" alt="profile-picture">
    <h3  class="user"`+(i+1)+`></h3>
    <p class="texte"`+(i+1)+`></p>
    </div>`
    divComm.innerHTML = divComm.innerHTML + HTMLToAdd
    pp = document.querySelector('.pp'+[i])
    user = document.querySelector('.user'+[i])
    com = document.querySelector('.texte'+[i])
    com.innerHTML = data.results[i].content
  }
  