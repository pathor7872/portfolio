// ===== Responsive Navbar =====

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// ===== Close Menu on Nav Link Click =====

document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

// ===== Active Navbar Link on Scroll =====

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar a');

window.onscroll = () => {

    let top = window.scrollY;

    sections.forEach(sec => {

        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){

            navLinks.forEach(link=>{
                link.classList.remove('active');
            });

            document.querySelector('.navbar a[href*=' + id + ']')
            .classList.add('active');
        }

    });

    // ===== Sticky Header =====

    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);

};

// ===== Smooth Scroll =====

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({

            behavior:'smooth'

        });

    });

});
