var token = window.localStorage.getItem('jwt')
var tbody = document.getElementById('tbodyData')
if(token == null){
    window.location.href = 'login.html'
}


function usuario(){
    var input, filter, table, tr, td, i;
    input = document.getElementById("filtrar-tabela");
    filter = input.value.toUpperCase();
    table = document.getElementById("userTable");
    tr = table.getElementsByTagName("tbody")[0].rows;
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
        }       
    }
}

function testEvent(id){
    swal({
        title: "Você tem certeza?",
        text: "Depois de removido esse usuário não terá mais acesso ao painel!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            window.location.reload();
            fetch(`${BASE_URL}/users/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
            })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);                
            })
            .catch((error) => {
                console.error("Error:", error);
            });
        } else {
          swal("Usuário seguro!.");
        }
      });
}

fetch(`${BASE_URL}/users`, {
method: "GET",
headers: {
    "Content-Type": "application/json",
    "Authorization": token
}
})
.then((response) => response.json())
.then((data) => {
    data.map(ret=>{
        let row = tbody.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);

        cell1.innerHTML = ret.nome;
        cell2.innerHTML = ret.email;
        cell3.innerHTML = ret.phone;
        cell4.innerHTML = ret.password;
        cell5.innerHTML = `<td><button type="button" class="btn btn-danger" onclick="testEvent('${ret._id}')">Remover Usuário</button></td>`;
    })
    
})
.catch((error) => {
    console.error("Error:", error);
});

function addUser(){
    window.location.href = "registerUser.html";
}