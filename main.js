init();

function init()
{
  // saludar();
  botonMenor();
  botonMayor();
  mostrarPizzas();

}

function saludar()
  {
    let nombre = prompt("Ingresa tu nombre");
    let myTytle = document.getElementById("title");
    myTytle.innerHTML = `Bueno dias ${nombre}, estas son las pizzas que estas buscando?`
  }

function botonMenor()
  {
    let btnMenor = document.createElement("button");
    btnMenor.innerHTML="Menor Precio"
    btnMenor.addEventListener("click", ()=>
    {
      ordenarMenor();
    });
    document.body.append(btnMenor);
  }

function botonMayor()
  {
    let btnMayor = document.createElement("button");
    btnMayor.innerHTML="Mayor Precio"
    btnMayor.addEventListener("click", ()=>
    {
      ordenarMayor();
    });
    document.body.append(btnMayor);
  }

function ordenarMenor()
{
  let ordenarMenor = pizzeria.sort((p1, p2) =>
  {
    if(p1.precio < p2.precio)
    {
      return -1;
    } 
    else
    {
      return 1;
    }
  });
  mostrarPizzas();
}

function ordenarMayor()
{
  let ordenarMayor = pizzeria.sort((p1, p2) =>
  {
    if(p1.precio > p2.precio)
    {
      return -1;
    } 
    else
    {
      return 1;
    }
  });
  mostrarPizzas();
}
function mostrarPizzas()
  {
    let nodoLista = document.getElementById ("listaPizzeria");
    if(!nodoLista)
    {
      nodoLista = document.createElement("ul");
      nodoLista.setAttribute("id", "listaPizzeria");
    }
    nodoLista.innerHTML = ""

    pizzeria.forEach(element => 
    {
      let nodoElemento = document.createElement("li");
      let nombre = `<h1>${element.nombre}</h1>
                    <img class="photo" src="${element.img}">
                    `;
    nodoElemento.innerHTML = `${nombre} <button onclick="decirPrecio('${element.precio}')"> Precio </button>`;
    nodoLista.appendChild(nodoElemento);  
    });
    document.body.append(nodoLista);
  }
  // decirPrecio();

  // Franco borre muchas veces el codigo... intente de varias formas de agregar un boton que al tocarlo me diga un precio de la pizza... pero me imprimia todos los precios. 
  // ahora me salta un error en el html o algo asi... capaz sea una boludes, pero esty bloqueado jajaja
  // Y por ultimo si tengo que sacar los prompt... agrego datos x inputs?








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
//       nodoElemento.innerHTML = `${element.nombre} <br><br> <img class="photo" src="${element.img}"> <br> <button id="precio"> Precio </button> <br><br>`;
//       nodoLista.appendChild(nodoElemento);  
//     });
//     document.body.append(nodoLista);
//   }

// let btn = document.querySelector("#btn-precio");
// btn.addEventListener("click", () =>mostrarPrecio());

// function mostrarPrecio()
// {
//   let precio = document.querySelector("#precio");
//   pizzeria.forEach(element => {
//     let nodoDiv = document.createElement("div");
//     nodoDiv.innerHTML = `${element.precio}`;
//     precio.appendChild(nodoDiv);
//   })
// }

// mostrarPrecio();



  

  // class Pizzas{
  //   constructor(id, nombre, precio)
  //   {
  //     this.id = id,
  //     this.nombre = nombre,
  //     this.precio = precio
  //   }
  // }
  // function nuevaPizza()
  // {
  //   let idIngresado = parseInt(prompt("Ingrese el id de su pizza"));
  //   let nombreIngresado = prompt("Ingrese el nombre de tu pizza");
  //   let precioIngresado = parseInt(prompt("Ingresa el precio de tu pizza"));
  //   let nuevaPizza = new Pizzas(idIngresado,nombreIngresado, precioIngresado);
  //   pizzeria.push(nuevaPizza)
  // }
  // nuevaPizza();
  // let productos = [
  //   {id:1, nombre:"Napolitana", precio: 1000},
  //   {id:2, nombre:"Hawaiana", precio: 1200},
  //   {id:3, nombre:"4 Quesos", precio: 1400},
  //   {id:4, nombre:"Pepperoni", precio: 1100},
  //   {id:5, nombre:"Jamon y Panceta", precio: 1300}
  // ]

  // pizzeria = pizzeria.concat(productos);
  // let nombreIngresado = prompt("Ingresa el tipo de pizza que esta buscando...");
  // let productoEncontrado = pizzeria.filter((producto)=>producto.nombre.indexOf(nombreIngresado)!==-1);
  // console.log(productoEncontrado);

  // init();
  // function init()
  // {
  //   mostrarOpciones();
  //   mensaje();
  // }
  // function mostrarOpciones()
  // {
  //   productoEncontrado.forEach((pizza) => {
  //     let myBtn = document.createElement("button");
  //     myBtn.setAttribute("class", "btn")
  //     myBtn.innerHTML = pizza.nombre;
  //     myBtn.addEventListener("click", ()=> alert(pizza.precio));
  //     document.body.appendChild(myBtn);
  //   });
  // }
  // function mensaje()
  // {
  //   let mensaje = document.createElement("p");
  //   mensaje.innerHTML = "Toca para saber el precio."
  //   document.body.appendChild(mensaje);
  // }
  