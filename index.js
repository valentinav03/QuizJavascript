//referenciar los elementos del DOM
const input = document.getElementById('input')
const celdas = document.getElementsByName('departamento') 
const button = document.getElementById('button')
//traer datos desde una API
let url = "https://www.datos.gov.co/resource/ccvq-rp9s.json"

button.addEventListener('click', traerDatos.value)

function traerDatos() {
fetch(url)
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error))
//Mostrar los datos en la tabla
const mostrarData = (data) => {
    console.log(data)
     let body = ''
     for(let i=0; i<10; i++){
        body += `<tr><td>${data[i].fechaobservacion}</td><td>${data[i].valorobservado}</td><td>${data[i].nombreestacion}</td><td>${data[i].departamento}</td><td>${data[i].municipio}</td></tr>`
    }

    document.getElementById('data').innerHTML = body
}
}

