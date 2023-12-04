// Toogle navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Navbar and section Link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = ()=>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset+height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}

// remove nav on section selection or click

navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuIcon.classList.remove('bx-x');
      navbar.classList.remove('active');
    });
  });

// Scroll Reveal

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 60
})

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'})
ScrollReveal().reveal('.image, .services-container, .portfolio-box, .contact form, .social-media, .btn', {origin: 'bottom'})
ScrollReveal().reveal('.about-img, .home-content h1', {origin: 'left'})
ScrollReveal().reveal('.about h3, .home-content p, .about p', {origin: 'right',distance: '35px'})


// Typed Js

const typed = new Typed('.multiple-text',{
    strings: ['Web Desighner','Graphic Designer','App Developer'],
    typeSpeed: 40,
    backSpeed: 10,
    backDelay: 1000,
    loop: true
})
