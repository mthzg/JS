function getCookie(cookieName,index) {
    cookieName = cookieName + "=";
    let cookiesArray = document.cookie.split('; ');
    let cookieNameLength = cookieName.length
    console.log(cookiesArray[index].substring(cookieNameLength))
    finalCookie = cookiesArray[index].substring(cookieNameLength)
    return finalCookie
  }

function changementProfilePicture(){
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: accessKey
      }
    };
    
    fetch('https://api.themoviedb.org/3/account/20953426?session_id='+session_id, options)
      .then(response => response.json())
      .then(data => {
        avatar = 'https://image.tmdb.org/t/p/original/'+data.avatar.tmdb.avatar_path
        headerProfilePicture = document.querySelector('.profile-picture')
        headerProfilePicture.setAttribute("src",avatar)
        lienConnexion = document.querySelector('.connexion')
        lienConnexion.setAttribute("href","index.html")
        lienConnexion.innerHTML = "Déconnexion"
      })
      .catch(err => console.error(err));
  }

let cookie = document.cookie
if (cookie === '') {
  console.log("Pas de session")
}
else {
  accessKey = getCookie('accessKey',0)
  session_id = getCookie('session_id',1)
}
  
changementProfilePicture()