  let pizzeria = []
  class Pizzas{
    constructor(id, nombre, precio)
    {
      this.id = id,
      this.nombre = nombre,
      this.precio = precio
    }
  }
  function nuevaPizza()
  {
    let idIngresado = parseInt(prompt("Ingrese el id de su pizza"));
    let nombreIngresado = prompt("Ingrese el nombre de tu pizza");
    let precioIngresado = parseInt(prompt("Ingresa el precio de tu pizza"));
    let nuevaPizza = new Pizzas(idIngresado,nombreIngresado, precioIngresado);
    pizzeria.push(nuevaPizza)
  }
  nuevaPizza();
  let productos = [
    {id:1, nombre:"Napolitana", precio: 1000},
    {id:2, nombre:"Hawaiana", precio: 1200},
    {id:3, nombre:"4 Quesos", precio: 1400},
    {id:4, nombre:"Pepperoni", precio: 1100},
    {id:5, nombre:"Jamon y Panceta", precio: 1300}
  ]

  pizzeria = pizzeria.concat(productos);
  let nombreIngresado = prompt("Ingresa el tipo de pizza que esta buscando...");
  let productoEncontrado = pizzeria.filter((producto)=>producto.nombre.indexOf(nombreIngresado)!==-1);
  console.log(productoEncontrado);

  init();

  function init()
  {
    saludar();
    mostraropciones();
    mensaje();
  }
  function saludar()
  {
    let nombre = prompt("Ingresa tu nombre");
    let myTytle = document.getElementById("title");
    myTytle.innerHTML = `Bueno dias ${nombre}, estas son las pizzas que estas buscando?`
  }
  function mostraropciones()
  {
    productoEncontrado.forEach((pizza) => {
      let myBtn = document.createElement("button");
      myBtn.setAttribute("class", "btn")
      myBtn.innerHTML = pizza.nombre;
      document.body.appendChild(myBtn);
    });
  }
  function mensaje()
  {
    let mensaje = document.createElement("p");
    mensaje.innerHTML = "Elegir una Pizza:"
    document.body.appendChild(mensaje);
  }
  