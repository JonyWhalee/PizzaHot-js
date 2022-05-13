let cards = document.querySelector('#cards');
let items = document.getElementById('items'); 
let footer = document.getElementById('footer');
let templaceCard = document.querySelector('#template-card').content;
let templateFooter = document.getElementById('template-footer').content;
let templateCarrito = document.getElementById('template-carrito').content;
let fragment = document.createDocumentFragment();
let carrito = {}

document.addEventListener('DOMContentLoaded',()=>{
    fetchData();
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'));
        pintarCarrito();
    }
});
    
cards.addEventListener('click', pizza =>{
    addCarrito(pizza);
})


items.addEventListener('click', pizza =>{
    btnAccion(pizza);
})

let fetchData = async() =>{
    try{
        let res = await fetch('api.json');
        let data = await res.json();
        pintarCards(data);
    } catch (error){
        console.log(error);
    }
}
let pintarCards = data =>{
    data.forEach(pizzas => {
        templaceCard.querySelector('#title-card').textContent = pizzas.nombre;
        templaceCard.querySelector('#precio-card').textContent = pizzas.precio;
        templaceCard.querySelector('.card-img-top').setAttribute("src", pizzas.img);
        templaceCard.querySelector('.btn-dark').dataset.id = pizzas.id;

        let clone = templaceCard.cloneNode(true);
            fragment.appendChild(clone);
        });
        cards.appendChild(fragment);
    }

let addCarrito = pizza =>{

    if(pizza.target.classList.contains('btn-dark')){
        setCarrito(pizza.target.parentElement);
        Toastify({
            text:`Agregaste una 🍕🍕 al carrito!`,
            duration: 2000,
        }).showToast();
    }
    pizza.stopPropagation();
}

let setCarrito = objeto =>{
    let producto ={
        id: objeto.querySelector('.btn-dark').dataset.id,
        title:objeto.querySelector('#title-card').textContent,
        precio:objeto.querySelector('#precio-card').textContent,
        cantidad: 1
    }
    if(carrito.hasOwnProperty(producto.id)){
        producto.cantidad = carrito[producto.id].cantidad +1;
    }

    carrito[producto.id] = {...producto};
    pintarCarrito();
} 
let pintarCarrito = ()=>{
    items.innerHTML = '';
    Object.values(carrito).forEach(pizza =>{
        templateCarrito.querySelector('th').textContent = pizza.id;
        templateCarrito.querySelectorAll('td')[0].textContent = pizza.title;
        templateCarrito.querySelectorAll('td')[1].textContent = pizza.cantidad;
        templateCarrito.querySelector('.btn-info').dataset.id = pizza.id;
        templateCarrito.querySelector('.btn-danger').dataset.id = pizza.id;
        templateCarrito.querySelector('span').textContent = pizza.cantidad * pizza.precio
        
        let clone = templateCarrito.cloneNode(true);
        fragment.appendChild(clone);
    })
    items.appendChild(fragment);
    pintarFooter();

    localStorage.setItem('carrito', JSON.stringify(carrito));
}
let pintarFooter = ()=>{
    footer.innerHTML = '';
    if(Object.keys(carrito).length  === 0){
        footer.innerHTML = `
        <th scope="row" colspan="5" class="text-bug">Carrito vacío - Empiece a comprar!</th>`
        return
    }

    let nCantidad = Object.values(carrito).reduce((acc, {cantidad})=> acc + cantidad, 0);
    let nPrecio = Object.values(carrito).reduce((acc, {cantidad, precio})=> acc + cantidad * precio, 0);

    templateFooter.querySelectorAll('td')[0].textContent = nCantidad;
    templateFooter.querySelector('span').textContent = nPrecio;
    
    let clone = templateFooter.cloneNode(true);
    fragment.appendChild(clone);
    footer.appendChild(fragment);
    
    let btnVaciarCarrito = document.getElementById('vaciar-carrito')
    btnVaciarCarrito.addEventListener('click', ()=>{
        carrito = {};
        pintarCarrito();
        Toastify({
            text:`Vaciaste el carrito!`,
            duration: 3000,
        }).showToast();
    })
}

let btnAccion = pizza=>{
    // aumentar producto
    if (pizza.target.classList.contains('btn-info')){ 
        let producto = carrito[pizza.target.dataset.id];
        producto.cantidad++;
        carrito[pizza.target.dataset.id] = {...producto};
        pintarCarrito();
    }
    // reducir producto
    if (pizza.target.classList.contains('btn-danger')){
        let producto = carrito[pizza.target.dataset.id];
        producto.cantidad--;
        if(producto.cantidad === 0){
            delete carrito[pizza.target.dataset.id]
        }
        pintarCarrito();
    }
    pizza.stopPropagation();
}

init();

function init(){ 
    mensaje();
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
                        text:`No lo puedo creer, eres de "${localidad}" 😍😍`,
                        duration: 3000,
                    }).showToast();
                }
                else{
                    Toastify({
                        text:`No me dijiste de donde eres... 🥺🥺`,
                        duration: 3000,
                    }).showToast();
                }
            }, 1000)
        
        localStorage.setItem('localidadUsuario', localidad); 
    })()
}
(()=>{
    let localidadUsuario = localStorage.getItem('localidadUsuario');
    if (localidadUsuario === null){
        saludar();
    }
})();

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