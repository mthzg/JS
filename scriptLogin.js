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
  accessTokenInput = prompt("Veuillez entrer une clé d'accès :")
  accessTokenInput = 'Bearer '+ accessTokenInput
  document.cookie = "accessKey="+accessTokenInput+";";
  recupToken(accessTokenInput);
});