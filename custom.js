// show arrow slider 
const arrow = document.querySelectorAll(".arrow img");
const section_slider = document.querySelector(".slider");
section_slider.addEventListener("mouseenter",function () {
    for(let i of arrow){
        i.style.display="flex";
    }
});
section_slider.addEventListener("mouseleave",function () {
    for(let i of arrow){
        i.style.display="none";
    }
});


// heiiden slider 
const navbar = document.querySelector('.navbar_header');
window.onscroll=function () {
    if (window.scrollY < 120 ) {
      navbar.style.height="20%";
    }else{
        navbar.style.height="0";
        navbar.style.overflow="hidden";
    }
};

// slider
const slider = document.querySelector("#image_slider");
const rgiht_arrow = document.querySelector("#right_arrow_slider");
const left_arrow = document.querySelector("#left_arrow_slider");

let index_slider = 1;
left_arrow.addEventListener("click",function () {
         switch(index_slider){
                case 1:
                    slider.src="./image/slider2.jpg";
                    index_slider =2;
                    break;
                case 2:
                    slider.src="./image/slider3.jpg";
                    index_slider =3;
                    break;
                case 3:
                    slider.src="./image/slider1.jpg";
                    index_slider =1;
                    break;
            }
});
rgiht_arrow.addEventListener("click",function () {
    switch(index_slider){
           case 1:
               slider.src="./image/slider3.jpg";
               index_slider =3;
               break;
           case 3:
               slider.src="./image/slider2.jpg";
               index_slider =2;
               break;
           case 2:
               slider.src="./image/slider1.jpg";
               index_slider =1;
               break;
       }
});

window.addEventListener("load",function () {
    if (navigator.onLine) {
        console.log(true);
    } else {
        console.log(false);
    }
});