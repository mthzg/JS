function recupToken() {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjhhOTgxMGFlYjRlMmM1ZWZjNGEzZmQyMTc0NDRiYyIsInN1YiI6IjY1Yjc1YmJlZDU1YzNkMDE3Y2ZhYzBiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0XfH-ZZ0XcDH-KXR7ZINt7KhzuICXcbvlnaNrzc0aEM'
      }
    };
    
    fetch('https://api.themoviedb.org/3/authentication/token/new', options)
      .then((response) => {
        window.open(response.headers.get('authentication-callback')+"?redirect_to=http://127.0.0.1:5500/auth.html")
      })
  }
  
login = document.querySelector('button').addEventListener('click', function (e) {
  recupToken();
});