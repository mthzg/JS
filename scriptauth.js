function getCookie(cookieName,index) {
  cookieName = cookieName + "=";
  let cookiesArray = document.cookie.split('; ');
  cookieNameLength = cookieName.length
  finalCookie = cookiesArray[index].substring(cookieNameLength)
  return finalCookie
}

function getSessionId(accessKey){
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
    Authorization: accessKey
  }
};
fetch('https://api.themoviedb.org/3/authentication/session/new?request_token='+tokenDeSession, options)
.then(response => response.json())
.then(data => updateCookie(data.session_id))}

function updateCookie(session_id) {
  document.cookie = "session_id="+session_id;
}

accessKey = getCookie('accessKey',0);

const parametresRecherche = new URLSearchParams(window.location.search);
tokenDeSession = parametresRecherche.get('request_token');
getSessionId(accessKey)


function updateprofile (username,pp) {
    console.log("update profile username = ",username)
    console.log("update profile pp path = ",pp)
    if (pp === null) {pp = "logo.png"}}

function getsessiondetails(session_id,accessKey) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: accessKey
    }
  };
  fetch('https://api.themoviedb.org/3/account/'+session_id, options)
  .then(response => response.json())
  .then((data) => {
    console.log("test session details",data)
    updateprofile(data.username,data.avatar.tmdb.avatar_path)})}









//$ old
/*function recupToken(){
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
   timer = setInterval(() => {
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
          console.log(data)
          let id = data.session_id
          console.log(id)
          if (data.success === true) {
            clearInterval(timer)
            const options3 = {
              method: 'GET',
              headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOWI1MzgyMmUwNzlhMjA3OWEyNTU3YmY4YzE2YjFhOCIsInN1YiI6IjY1YjRmN2U3NThlZmQzMDE2M2NhM2E1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8jpbHJlS1LVUQ7D2ulav92LOTi88tzJGZZ7RlcwrA9c'
              }
            };
            fetch('https://api.themoviedb.org/3/account/'+id, options3)
            .then(response => response.json())
            .then((data) => {
              console.log(data)
              let username = data.username
              console.log(username)
            })
          }
        })
      }
    }, 5000);
  })
}*/

const parametresRecherche = new URLSearchParams(window.location.search);
tokenDeSession = parametresRecherche.get('request_token');
getSessionId(accessKey)
getsessiondetails(session_id,accessKey)









  
//! working ->
/*
const parametresRecherche = new URLSearchParams(window.location.search);
tokenDeSession = parametresRecherche.get('request_token');
console.log(tokenDeSession)

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjhhOTgxMGFlYjRlMmM1ZWZjNGEzZmQyMTc0NDRiYyIsInN1YiI6IjY1Yjc1YmJlZDU1YzNkMDE3Y2ZhYzBiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0XfH-ZZ0XcDH-KXR7ZINt7KhzuICXcbvlnaNrzc0aEM'
  }
};
fetch('https://api.themoviedb.org/3/authentication/session/new?request_token='+tokenDeSession, options)
  .then(response => response.json())
  .then(response => 
    fetch('https://api.themoviedb.org/3/account/'+response.session_id, options)
    .then(response => response.json())
    .then(response => console.log(response))
  )
  */