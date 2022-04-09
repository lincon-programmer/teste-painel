var nome = document.getElementById('name');
var email = document.getElementById('email');;
var password = document.getElementById('password');;
var confPassword = document.getElementById('confPass');;
var phone = document.getElementById('phone');
var token = window.localStorage.getItem('jwt')

function buttonRegister(){
    nome = nome.value;
    email = email.value;
    password = password.value;
    confPass = confPass.value;
    phone = phone.value;

    var obj = {
        nome,
        email,
        password,
        confPassword,
        phone
    }

    fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Authorization": token
    },
    body: JSON.stringify(obj),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log("Success:", data);
        window.location.href = 'listUsers.html';
    })
    .catch((error) => {
        console.error("Error:", error);
        window.location.href = 'listUsers.html';
    });
}