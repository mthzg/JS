function recupToken(accessToken) {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: accessToken
      }
    };
    
    fetch('https://api.themoviedb.org/3/authentication/token/new', options)
      .then((response) => {
        window.open(response.headers.get('authentication-callback')+"?redirect_to=http://127.0.0.1:5500/auth.html")
      })
  }
  
login = document.querySelector('.connexion').addEventListener('click', function (e) {
  loginText = document.querySelector('.connexion').innerHTML;
  if (loginText === "Se connecter"){
  accessTokenInput = prompt("Veuillez entrer une clé d'accès :")
  accessTokenInput = 'Bearer '+ accessTokenInput
  document.cookie = "accessKey="+accessTokenInput+";";
  recupToken(accessTokenInput);}
  else {
    document.cookie = "accessKey=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "session_id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }
});