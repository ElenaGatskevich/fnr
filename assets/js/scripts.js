document.addEventListener("DOMContentLoaded", (function () {

        Fancybox.bind("[data-fancybox]");
        Fancybox.bind('[data-fancybox="notification"]', {
            mainClass: "notification__container",
        });
    }

));
const social=document.getElementsByClassName('header__social')[0];

const search=document.querySelectorAll('.search__input');
search.forEach(el=>el.addEventListener('click',function (el) {
    this.closest('div').classList.add('open');
    social.classList.add('hidden');


},false));
const searchButton=document.querySelectorAll('.search__close');
searchButton.forEach(el=>el.addEventListener('click',function (el) {
    this.closest('.search').classList.remove('open');
    social.classList.remove('hidden');
},false));

const searchMobile=document.querySelectorAll('.search_mobile__button');
searchMobile.forEach(el=>el.addEventListener('click',function (el) {
    this.closest('.search').classList.add('open');



},false));

const mobileClose=document.querySelectorAll('.mobile__close');
mobileClose.forEach(el=>el.addEventListener('click',function (el) {
    const mobileBurger=document.getElementsByClassName('header__checkbox')[0];
    mobileBurger.checked=0;
},false));
