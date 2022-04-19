init();

function init()
{
  mensaje();
  botonMenor();
  botonMayor();
  mostrarPizzas();

}
let lugar = " ";

function opcionId3()
  {
    lugar = "llevarse el pedido. Genial!!";
  }
function opcionId4()
  {
    lugar = "comen aqui. Buenisimo acompañenme...";
  }

function saludar()
  {
    let nombreIngresado = document.getElementById("id1").value;
    let myTytle = document.getElementById("title");  
    myTytle.innerHTML = `Buenos dias ${nombreIngresado}, asi que van a ${lugar}`
  }
  
function mostrarInputs()
  {
    saludar();
  }

function mensaje()
  {
    let mensaje = document.createElement("p");
    mensaje.innerHTML = "Acá tienes todas las opcciones del dia de hoy!"
    document.body.appendChild(mensaje);
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
    nodoElemento.innerHTML = ` ${nombre} <button id="x-${element.id}" onclick='functionX(this);'> Precio </button>`;
    nodoLista.appendChild(nodoElemento);  
    });
    document.body.append(nodoLista);
  }

  function functionX (element)
  {
  let elementId = element.getAttribute('id').match(/\d+/g).join('')
  let id = Number(elementId)
  let precio = pizzeria.find(pizza => pizza.id == id).precio
        element.innerHTML = `Este es el precio : $${precio}`
  }
