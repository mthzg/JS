const login = document.querySelector(".login");
login.addEventListener('click', () => {

const options = {
    method: 'POST',
    headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        Authorization: 'Bearer eyJhdWQiOiJhOWI1MzgyMmUwNzlhMjA3OWEyNTU3YmY4YzE2YjFhOCIsInN1YiI6IjY1YjRmN2U3NThlZmQzMDE2M2NhM2E1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8jpbHJlS1LVUQ7D2ulav92LOTi88tzJGZZ7RlcwrA9c'
    },
};
        fetch('https://api.themoviedb.org/3/authentication/token/new/', options)
        .then(response => response.json())
        .then(data => {
            let request_token = data.request_token;
            console.log(request_token);
            let bool = data.success
            if (bool === true) {
                window.open("https://www.themoviedb.org/authenticate/"+request_token)
            }
            
        })
        .catch(err => console.error(err));
});

