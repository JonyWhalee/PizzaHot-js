let slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];
// solucionado no retorna mas undefined

let btnLeft = document.querySelector("#btn-left");
let btnRight = document. querySelector("#btn-right");
// esto esta bien

slider.insertAdjacentElement('afterbegin', sliderSectionLast);
// Solucionado

// El insertAdjacentElement de abajo, retorna un error en el elemento. Porque sliderSectionFirst y sliderSectionLast retorna undefined

function right(){
    let sliderSectionFirst = document.querySelectorAll("#slider__selection")[0];
    // LO ARREGLEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE. Bueno mas o menos / anda "mejor"
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.7s"
    setTimeout(()=>{
        slider.style.transition = "none"
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
        // AHORAAAAAA SIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII VAVAVA
    }, 700);
}
function left(){
    let sliderSection = document.querySelectorAll("#slider__selection");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.7s"
    setTimeout(()=>{
        slider.style.transition = "none"
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 700);
}

btnRight.addEventListener("click", ()=>{
    right();
});

btnLeft.addEventListener("click", ()=>{
    left();
});

setInterval(() => {
    right();
}, 5000);

