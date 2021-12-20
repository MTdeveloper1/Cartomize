


$(".stock").prepend('<p class="stock-alert">Stock disponible</p>')
$(".nostock").prepend('<p class="nostock-alert">Sin stock</p>')

var form = document.getElementById('formulario')

form.addEventListener('submit', function(e){
    e.preventDefault()
    var mail = document.getElementById('ingreso-mail').value;
    var mensaje = document.getElementById('ingreso-mensaje').value;
    alert('Pronto te enviamos un mensaje a ' + mail)

    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        mail:mail,
        mensaje:mensaje,
        userId: 1,  
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
.then((response) => response.json())
.then((json) => console.log(json));
})


