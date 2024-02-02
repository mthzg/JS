function recupToken(){
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjhhOTgxMGFlYjRlMmM1ZWZjNGEzZmQyMTc0NDRiYyIsInN1YiI6IjY1Yjc1YmJlZDU1YzNkMDE3Y2ZhYzBiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0XfH-ZZ0XcDH-KXR7ZINt7KhzuICXcbvlnaNrzc0aEM'
    }};
  fetch('https://api.themoviedb.org/3/authentication/token/new', options)
  .then(response => response.json())
  .then((data) => {
    console.log(data)
    let token = data.request_token;
    console.log(token);
   const auth = window.open("https://www.themoviedb.org/authenticate/" + token + "?redirect_to=http://127.0.0.1:5500/auth.html");
   setTimeout(() => {
     if (auth.closed === true || auth.closed === false) {
       console.log("closed")
       console.log(token,"test")
       const options2 = {
         method: 'POST',
         headers: {
           accept: 'application/json',
           'content-type': 'application/json',
           Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjhhOTgxMGFlYjRlMmM1ZWZjNGEzZmQyMTc0NDRiYyIsInN1YiI6IjY1Yjc1YmJlZDU1YzNkMDE3Y2ZhYzBiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0XfH-ZZ0XcDH-KXR7ZINt7KhzuICXcbvlnaNrzc0aEM"
          },
          body: JSON.stringify({request_token: token}),
        };
        fetch('http://api.themoviedb.org/3/authentication/session/new', options2)
        .then(respons => respons.json())
        .then((data) => {
          console.log(data)})
      }
    }, 5000);
  })
}

login = document.querySelector('.login').addEventListener('click', function (e) {
  recupToken();
});
