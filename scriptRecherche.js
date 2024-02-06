function rechercheAPI(pageTrending,startEndVariable)
{
    varRecherche = document.querySelector('.barre-recherche').value
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjhhOTgxMGFlYjRlMmM1ZWZjNGEzZmQyMTc0NDRiYyIsInN1YiI6IjY1Yjc1YmJlZDU1YzNkMDE3Y2ZhYzBiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0XfH-ZZ0XcDH-KXR7ZINt7KhzuICXcbvlnaNrzc0aEM'
        }
      };
    fetch("https://api.themoviedb.org/3/search/movie?query="+varRecherche+"&page="+pageTrending, options)
        .then((response) => response.json())
        .then((data) => {
            for (let i = startEndVariable; i < startEndVariable+20; i++){
                filmActuel = i-startEndVariable
                affichageFilms(data.results[filmActuel]);
            }
        });
    }
    
    
function viderPage() {
    divResultats = document.querySelector('.resultats-recherche')
    divResultats.innerHTML = ""
}

function affichageFilms(film)
{
    divResultats = document.querySelector('.resultats-recherche')
    let voteInt = (Math.round(film.vote_average*10))/10
    divResultats.innerHTML = divResultats.innerHTML + `<a href="film.html?id=`+film.id+`" class="resultat a`+film.id+`"><img src="https://image.tmdb.org/t/p/original`+film.poster_path+`"><h2>`+film.title+`</h2><p>`+voteInt+`</p></a>`
}

function actualisationResultats() {
    viderPage()
    rechercheAPI(pageTrending,startEndVariable)
    let mainDiv = document.querySelector(".grid-general");
    mainDiv.onscroll = (e) => {
        let positionDuClient = document.documentElement.scrollTop+document.documentElement.clientHeight;
        let positionMaxPage = document.documentElement.scrollHeight;
        if (positionDuClient >= positionMaxPage) {
          startEndVariable += 20;
          pageTrending += 1;
          rechercheAPI(pageTrending,startEndVariable)
        }
      }    
}
    
let startEndVariable = 0;
let pageTrending = 1;
barreRecherche = document.querySelector('.barre-recherche');
barreRecherche.addEventListener('input', actualisationResultats);


    
    //                    const expireDate = new Date()
    //                    expireDate.setTime(expireDate.getTime() + 30000)
    //                    document.cookie = "idFilm="+film.id+";expires="+expireDate.toUTCString()+";";
    //                    window.location.href="film.html";
    
    
    /*function filmsCliquables(film)
    {
        let resultats = [];
        for (let i = 0; i <20; i++){
                        resultats.push(document.querySelector(".a"+film[i].id))
                        console.log(resultats[i])
                        resultats[i].addEventListener('click',function(e){
                            const expireDate = new Date()
                            expireDate.setTime(expireDate.getTime() + 30000)
                            document.cookie = "idFilm="+film[i].id+";expires="+expireDate.toUTCString()+";";
                            window.location.href="film.html";
                        })
                    }
    }*/
