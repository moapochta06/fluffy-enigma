let burger = document.querySelector('.burger');
let menu = document.querySelector('.menu');
let menulinks = document.querySelectorAll('.menu__content>a');

burger.addEventListener('click',

    function () {
        burger.classList.toggle('burger-active');

        menu.classList.toggle('menu-active');
    })

menulinks.forEach(function (el) {
    el.addEventListener('click', function () {

        burger.classList.remove('burger-active');

        menu.classList.remove('menu-active');

    })
})