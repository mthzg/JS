function rechercheAPI()
{
    varRecherche = barreRecherche.value
    fetch("https://api.themoviedb.org/3/search/movie?query="+varRecherche+"&api_key=db8a9810aeb4e2c5efc4a3fd217444bc")
        .then((response) => response.json())
        .then((data) => {
            divResultats = document.querySelector('.resultats-recherche')
            divResultats.innerHTML = ""
            for (let i = 0; i < 20; i++){
                affichageFilms(data.results[i],i);
            }
            setTimeout(filmsCliquables(data.results),1000)
        });
    }
    
function filmsCliquables(film)
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
}

function affichageFilms(film)
{
    //console.log(film)
    divResultats = document.querySelector('.resultats-recherche')
    let voteInt = (Math.round(film.vote_average*10))/10
    divResultats.innerHTML = divResultats.innerHTML + `<div class="resultat a`+film.id+`"><img src="https://image.tmdb.org/t/p/original`+film.poster_path+`"><h2>`+film.title+`</h2><p>`+voteInt+`</p></div>`
}


barreRecherche = document.querySelector('.barre-recherche');
barreRecherche.addEventListener('input', rechercheAPI)


//                    const expireDate = new Date()
//                    expireDate.setTime(expireDate.getTime() + 30000)
//                    document.cookie = "idFilm="+film.id+";expires="+expireDate.toUTCString()+";";
//                    window.location.href="film.html";