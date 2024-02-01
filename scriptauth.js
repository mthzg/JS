async function test() {
    const login = document.querySelector(".login");
    login.addEventListener('click', async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOWI1MzgyMmUwNzlhMjA3OWEyNTU3YmY4YzE2YjFhOCIsInN1YiI6IjY1YjRmN2U3NThlZmQzMDE2M2NhM2E1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8jpbHJlS1LVUQ7D2ulav92LOTi88tzJGZZ7RlcwrA9c'
        }
      };
      try {
        const response = await fetch('https://api.themoviedb.org/3/authentication/token/new', options);
        const data = await response.json();
        let request_token = data.request_token;
        console.log(request_token);
        let bool = data.success;
        if (bool === true) {
          window.open("https://www.themoviedb.org/authenticate/" + request_token + "?redirect_to=http://127.0.0.1:5500/auth.html");
          return request_token;
        }
      } catch (err) {
        console.error(err);
      }
    });
  }
  
  async function createSession(request_token) {
    const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOWI1MzgyMmUwNzlhMjA3OWEyNTU3YmY4YzE2YjFhOCIsInN1YiI6IjY1YjRmN2U3NThlZmQzMDE2M2NhM2E1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8jpbHJlS1LVUQ7D2ulav92LOTi88tzJGZZ7RlcwrA9c'
        },
        body: JSON.stringify({request_token: '6bc047b88f669d1fb86574f06381005d93d3517a'})
      };
      
      fetch('https://api.themoviedb.org/3/authentication/session/new', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    }
  
  test();
  setInterval(async () => {
    const request_token = await test();
    await createSession(request_token);
  }, 5000);