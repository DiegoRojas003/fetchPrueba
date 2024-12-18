const titulo=document.getElementById("titulo");
const imgjs=document.getElementById("img");
const body=document.getElementById("table_body");
const botonPersonajes=document.getElementById("boton");
const botonConsultar= document.getElementById("boton-personaje");
const botonLimpiar= document.getElementById("boton-clear");
var contador=0;

async function solicitarTitulo() {
    titulo.innerText=`Bienvenidos al consumo de la API de rick and morty`;
}

async function GetDataJson(API) {
    const respuesta = await fetch(API);
    if (!respuesta.ok) {

    }
    const json = await respuesta.json();
    console.log(json);
    console.log(json.results[0].name);

    let textBox = document.getElementById("floatingTextarea2");
    let url=json.results[0].url;
    let srcImg=json.results[0].image;
    

    document.getElementById("img").src=`${srcImg}`;
}

const displayData = (personajes)=>{
    body.innerText="";
    personajes.forEach(element =>{
        body.innerHTML += `
        <tr>
            <td>${element.id}</td>
            <td>${element.name}</td>
            <td>${element.status}</td>
            <td>${element.species}</td>
        </tr>
        `
    })
    return body
}
async function llenar_tabla() {
    contador+=1;
    const API3 = `https://rickandmortyapi.com/api/character/?page=${contador}`;
    const respuesta = await fetch(API3);
    const data = await respuesta.json();
    displayData(data.results);
    GetDataJson(API3);
}
function limpiar(){
    document.getElementById("img").src=``;
    body.innerText=``;
    
}
botonPersonajes.addEventListener("click",llenar_tabla)
botonLimpiar.addEventListener("click",limpiar)
