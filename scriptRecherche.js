function rechercheAPI()
{
    varRecherche = barreRecherche.value
    fetch("https://api.themoviedb.org/3/search/movie?query="+varRecherche+"&api_key=db8a9810aeb4e2c5efc4a3fd217444bc")
        .then((response) => response.json())
        .then((data) => {
            divResultats = document.querySelector('.resultats-recherche')
            divResultats.innerHTML = ""
            for (let i = 0; i < 20; i++){
                affichageFilms(data.results[i]);
            }
        });
}

barreRecherche = document.querySelector('.barre-recherche');
barreRecherche.addEventListener('input', rechercheAPI)


function affichageFilms(film)
{
    divResultats = document.querySelector('.resultats-recherche')
    divResultats.innerHTML = divResultats.innerHTML + `<div class="trending-item trending"><h2>`+film.title+`</h2></div>`
}