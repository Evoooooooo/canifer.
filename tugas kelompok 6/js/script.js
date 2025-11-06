// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');

// ketika menu di clik
document.querySelector('#menu').
onclick = () => {
    navbarNav.classList.toggle('active');
};

// klik di luar side bar untuk menghilangkan nav
const hamburger = document.querySelector('#menu');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active')
    }
});

// slider
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function changeSlide() {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
}

setInterval(changeSlide, 3000); // Ganti gambar setiap 3 detik
