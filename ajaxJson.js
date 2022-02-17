//console.log('Correcto');

document.querySelector('#boton').addEventListener('click',traerDatos);

function traerDatos(){
    console.log('dentro de la funcion');

    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'catalogo.json', true);
    xhttp.send();

    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){
            //console.log(this.responseText);
             //document.querySelector('#respuesta').innerHTML = this.responseText;

             let datos = JSON.parse(this.responseText);
             //console.log(datos)
             let res = document.querySelector('#res');
             res.innerHTML='';


             for(let indice of datos){
                 //console.log(indice.titulo);
                 res.innerHTML += 
                 `
                 <tr>
                 <td>${indice.titulo}</td>
                 <td>${indice.Artista}</td>
                </tr>
                `
                    
             }
    }
}
}
