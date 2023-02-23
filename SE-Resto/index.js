let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector("header .flex .navbar");

//Show menu
menu.onclick = () =>{
    menu.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

//Show SearchForm
let search = document.querySelector("#search-icon");
search.onclick = () =>{
    let search_form = document.querySelector("#search-form");
    search_form.classList.toggle('active');
};

//Hide SearchForm
let close_icon = document.querySelector("#close");
close_icon.onclick = () =>{
    let search_form = document.querySelector("#search-form");
    search_form.classList.remove('active');
};

//Swiper fuction
var swiper = new Swiper(".home-slider", {
    spaceBetween:30,
    centeredSlides:true,
    autoplay:{
        delay:2100,
        disableOnInteraction:false,
    },
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },
    loop:true
});

//Review Section
var swiper = new Swiper(".review-slider", {
    spaceBetween:30,
    centeredSlides:true,
    autoplay:{
        delay:2100,
        disableOnInteraction:false,
    },
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },
    loop:true,
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        640:{
            slidesPerView:2,
        },
         768:{
            slidesPerView:2,
        },
         1024:{
            slidesPerView:3,
        },
    }
});