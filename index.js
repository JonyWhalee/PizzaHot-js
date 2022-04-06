  let pizzeria = []
  class Pizzas{
    constructor(id, nombre, precio)
    {
      this.id = id
      this.nombre = nombre,
      this.precio = precio
    }
  }
  function nuevaPizza()
  {
    let idIngresado = parseInt(prompt("Ingrese el id de su pizza"))
    let nombreIngresado = prompt("Ingrese el nombre de tu pizza");
    let precioIngresado = parseInt(prompt("Ingresa el precio de tu pizza"));
    let nuevaPizza = new Pizzas(idIngresado,nombreIngresado, precioIngresado);
    pizzeria.push(nuevaPizza)
  }
  pizzeria.push(nuevaPizza);
  nuevaPizza();
  let productos = [
    {id:1, nombre:"Napolitana", precio: 1000},
    {id:2, nombre:"Hawaiana", precio: 1200},
    {id:3, nombre:"4 Quesos", precio: 1400},
    {id:4, nombre:"Pepperoni", precio: 1100},
    {id:5, nombre:"Jamon y Panceta", precio: 1300}

  ]
  let nombreIngresado = prompt("Ingresa un tipo de Pizza...")
  let productoEncontrado = productos.filter((producto)=>producto.nombre.indexOf(nombreIngresado)!==-1);
  console.log(productoEncontrado);
  pizzeria.push(productos);
  console.log(pizzeria);
  // Hola Franco, intente juntar este codigo con el que esta comentado arriba... mi idea era que el usuario al crear su "pizza" con el .push pueda encontrarla en los arrays... pero no me deja (limpie un  poco el codigo). Lo que yo hice fue poner a pizzeria.push(productos) y borrar las arrays de arriba (napo, hawa) pero nada :/