let burger_nav = ()=>{
    let menu = document.querySelector(".menu-burger");
    let nav = document.querySelector(".nav-links");
    let nav_list = document.querySelectorAll(".nav-links li"); 
    // 
    menu.addEventListener("click", () =>{
        nav.classList.toggle("nav-active");
    // 
    nav_list.forEach((link, index) =>{
        if(link.style.animation){
            link.style.animation = "";
        }
        else{
            link.style.animation =  `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`;
        }
    //
    menu.classList.toggle(`toggle`) 
    })
});}
burger_nav();
// Fin burger_nav

// FreePizza




    // let width = window.innerWidth;
    // let height = window.innerHeight;
    // let newWidth = (Math.random() * width);
    // let newHeight = (Math.random() * height);

    // document.querySelector('#btnyes').style.position = 'absolute';
    // document.querySelector('#btnyes').style.left = newWidth + "px";
    // document.querySelector('#btnyes').style.top = newHeight + "px";


