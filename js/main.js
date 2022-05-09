init();

function init()
{
    saludar();
    mensaje();
    // botonMenor();
    // botonMayor();
    // mostrarPizzas();

}

function saludar(){
    (async ()=>{ 
        let {value:localidad} = await swal.fire({
            title:'Bienvenido!',
            text:'Selecciona tu localidad',
            icon:'question',
            color:'white',
            confirmButtonText: 'Seleccionar',
            background: '#242422',
            confirmButtonColor:'#83A8B8',
            padding:'1rem',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            stopKeydownPropagation: true,
            input: 'text',
            inputPlaceholder:'Nombre de tu Localidad',
            inputValue:''})
            setTimeout(()=>{
                if(localidad){
                    Toastify({
                        text:`Eres de ${localidad} 😍`,
                        duration: 3000,
                    }).showToast();
                }
                else{
                    Toastify({
                        text:`No me dijiste tu localidad 🥺`,
                        duration: 3000,
                    }).showToast();
                }
            }, 1000)
    })()
}

function mensaje(){
    let typed = new Typed('.typed', {
            stringsElement: '#cadena-text',
            typeSpeed: 75,
            startDelay: 300, 
            backSpeed: 75,
            smartBackspace: true,
            shuffle: false,
            backDelay: 1500,
            loop: true,
            loopCount: false,
            showCursor:true,
            cursorChar:'|',
            contentType: 'html'
    });

}








// let  url = `https://fedeperin-harry-potter-api.herokuapp.com/personajes`;

//     fetch(url)
//     .then((pizza)=>pizza.json())
//     .then((x)=>{
//         mostrarX(x);
//     });
// function mostrarX(x){
//     let nodo = document.querySelector("#")
//     pizza.forEach(element => {
//         let div = document.createElement("div");
//         div.innerHTML = `<img src=${element.imagen}> <br> ${element.personaje}`
//         nodo.appendChild(div);
//     });

// }
// let url = 'https://jsonplaceholder.typicode.com/users';

//     fetch(url)
//     .then((res)=>res.json())
//     .then((data)=>{
//         mostrarDatos(data);
//     });

//     function mostrarDatos(data)
//     {
//         let nodo = document.querySelector("#usuarios");
//         data.forEach(element=>{
//             const div = document.createElement("div");
//             div.innerHTML=`<p>${element.name}</p><br><br>${element.email}`
//             nodo.appendChild(div);
//         });
//     }

// function mostrarInputs()
//     {
//         saludar();
//     }

// function botonMenor()
//   {
//     let btnMenor = document.createElement("button");
//     btnMenor.innerHTML="Menor Precio"
//     btnMenor.addEventListener("click", ()=>
//     {
//       ordenarMenor();
//     });
//     document.body.append(btnMenor);
//   }

// function botonMayor() 
//   {
//     let btnMayor = document.createElement("button");
//     btnMayor.innerHTML="Mayor Precio"
//     btnMayor.addEventListener("click", ()=>
//     {
//       ordenarMayor();
//     });
//     document.body.append(btnMayor);
//   }

// function ordenarMenor()
// {
//   let ordenarMenor = pizzeria.sort((p1, p2) =>
//   {
//     if(p1.precio < p2.precio)
//     {
//       return -1;
//     } 
//     else
//     {
//       return 1;
//     }
//   });
//   mostrarPizzas();
// }

// function ordenarMayor()
// {
//   let ordenarMayor = pizzeria.sort((p1, p2) =>
//   {
//     if(p1.precio > p2.precio)
//     {
//       return -1;
//     } 
//     else 
//     {
//       return 1;
//     }
//   });
//   mostrarPizzas();
// }

// function mostrarPizzas()
//   {
//     let nodoLista = document.getElementById ("listaPizzeria");
//     if(!nodoLista)
//     {
//       nodoLista = document.createElement("ul");
//       nodoLista.setAttribute("id", "listaPizzeria");
//     }
//     nodoLista.innerHTML = ""

//     pizzeria.forEach(element => 
//     {
//       let nodoElemento = document.createElement("li");
//       let nombre = `<h1>${element.nombre}</h1>
//                     <img class="photo" src="${element.img}">
//                     `;
//     nodoElemento.innerHTML = ` ${nombre} <button id="x-${element.id}" onclick='functionX(this);'> Precio </button>`;
//     nodoLista.appendChild(nodoElemento);  
//     });
//     document.body.append(nodoLista);
//   }
// function functionX (element)
//   {
//   let elementId = element.getAttribute('id').match(/\d+/g).join('')
//   let id = Number(elementId)
//   let precio = pizzeria.find(pizza => pizza.id == id).precio
//         element.innerHTML = `Este es el precio : $${precio}`
//   }
