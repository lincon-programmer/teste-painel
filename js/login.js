var buttonLogin = document.getElementById('loginButton');
var email = document.getElementById('email');
var password = document.getElementById('password');;

buttonLogin.addEventListener('click', function(){
    email = email.value;
    password = password.value;

    var body = {
        email,
        password
    }

    fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log("Success:", data);
        window.localStorage.setItem('jwt', data.token);
        window.location.href = 'dashboard.html';
    })
    .catch((error) => {
        alert('invalid credentials')
        window.location.href = 'login.html';
        console.error("Error:", error);
    });
})

