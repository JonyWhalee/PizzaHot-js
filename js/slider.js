let slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];
let btnLeft = document.querySelector("#btn-left");
let btnRight = document. querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);
// Solucionado

function right(){
    let sliderSectionFirst = document.querySelectorAll("#slider__selection")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 1s"
    setTimeout(()=>{
        slider.style.transition = "none"
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 1000);
}
// solucionado
function left(){
    let sliderSection = document.querySelectorAll("#slider__selection");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 1s"
    setTimeout(()=>{
        slider.style.transition = "none"
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 1000);
}

btnRight.addEventListener("click", ()=>{
    right();
});

btnLeft.addEventListener("click", ()=>{
    left();
});

setInterval(() => {
    right();
}, 7000);

