// menu 

let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {

    navbar.classList.toggle('active');
    menu.classList.toggle('move');
    cart.classList.remove('active');
    login.classList.remove('active');
}

// cart 
let cart = document.querySelector(".cart");

document.querySelector('#cart-icon').onclick = () => {
    cart.classList.toggle('active');
    navbar.classList.remove('active');
    menu.classList.remove('move');
    login.classList.remove('active');
}

// login form 
let login = document.querySelector(".login-form");

document.querySelector('#user-icon').onclick = () => {
    login.classList.toggle('active');
    cart.classList.remove('active');
    navbar.classList.remove('active');
    menu.classList.remove('move');

}

// change header background color and shadow on scroll

let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

// scroll top 
let scrolltop = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
    scrolltop.classList.toggle('active', window.scrollY > 0);
});

// on click on menu links removed menu 

window.onscroll = () => {
    navbar.classList.remove('active');
    menu.classList.remove('move');


}

// Scrollreve Animation 
const ScrollRevealOptions = {
    distance: "50px",
    origin: "left",
    duration: 1000,
}
const ScrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1300,
}

ScrollReveal().reveal(".home-text h1", {
    ...ScrollRevealOptions
})
ScrollReveal().reveal(".home-text p", {
    ...ScrollRevealOptions
})

ScrollReveal().reveal(".popular-content .box", {
    ...ScrollRevealOption,
    interval: 100,
})
ScrollReveal().reveal(".about .about-text", {
    ...ScrollRevealOption,
    interval: 100,
})
ScrollReveal().reveal(".products-content .box", {
    ...ScrollRevealOption,
    interval: 100,
})
ScrollReveal().reveal(".footer", {
    ...ScrollRevealOption,
    interval: 100,
})
