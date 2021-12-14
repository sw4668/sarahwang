// javascript
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav_link') //node list

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

nav.links.forEach(link => {
    link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
})
})

  