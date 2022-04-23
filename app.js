let burger_nav = ()=>{
    let menu = document.querySelector(".menu-burger");
    let nav = document.querySelector(".nav-links");
    menu.addEventListener("click", () =>{
        nav.classList.toggle("nav-active");
    });
}
burger_nav();