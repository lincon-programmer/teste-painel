var token = window.localStorage.getItem('jwt')
if(token == null){
    window.location.href = 'login.html'
}