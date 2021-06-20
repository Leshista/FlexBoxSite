let header = document.querySelector('.header');
let toggleBtn = document.querySelector('.hamburger-menu');

toggleBtn.addEventListener('click', function () {
    header.classList.toggle('header-open');
});