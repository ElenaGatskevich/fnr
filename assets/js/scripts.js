document.addEventListener("DOMContentLoaded", (function () {

        Fancybox.bind("[data-fancybox]");
        Fancybox.bind('[data-fancybox="notification"]', {
            mainClass: "notification__container",
        });
        Fancybox.bind('[data-fancybox="notification__mobile"]', {
            mainClass: "notification__container",
        });
    }

));
const social=document.querySelectorAll('.header__social');

const search=document.querySelectorAll('.search__input');
search.forEach(el=>el.addEventListener('click',function (el) {
    this.closest('div').classList.add('open');
    social.forEach(function (el) {
       el.classList.add('hidden');



    },false);


},false));
const searchButton=document.querySelectorAll('.search__close');
searchButton.forEach(el=>el.addEventListener('click',function (el) {
    this.closest('.search').classList.remove('open');
    social.forEach(function (el) {
        el.classList.remove('hidden');



    },false);
},false));

const searchMobile=document.querySelectorAll('.search_mobile__button');
searchMobile.forEach(el=>el.addEventListener('click',function (el) {
    this.closest('.search').classList.add('open');



},false));

const mobileClose=document.querySelectorAll('.mobile__close');
mobileClose.forEach(el=>el.addEventListener('click',function (el) {
    const mobileBurger=document.querySelectorAll('.header__checkbox');
    mobileBurger.checked=0;
    mobileBurger.forEach(function (el) {
        el.checked=0;



    },false);
},false));
function headfunc(val1,val2) {
    return this;
}
