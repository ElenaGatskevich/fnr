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
const social = document.querySelectorAll('.header__social');

const search = document.querySelectorAll('.search__input');
search.forEach(el => el.addEventListener('click', function (el) {
    this.closest('.search').classList.add('open');
    social.forEach(function (el) {
        el.classList.add('hidden');
    }, false);
}, false));


const searchButton = document.querySelectorAll('.search__close');
searchButton.forEach(el => el.addEventListener('click', function (el) {
    this.closest('.search').classList.remove('open');
    social.forEach(function (el) {
        el.classList.remove('hidden');
    }, false);
}, false));

const searchMobile = document.querySelectorAll('.search_mobile__button');
searchMobile.forEach(el => el.addEventListener('click', function (el) {
    this.closest('.search').classList.add('open');
}, false));

const searchBig = document.querySelectorAll('.search__input_big');
searchBig.forEach(el => el.addEventListener('click', function (el) {
    this.closest('.search__wrap').classList.add('open');
}, false));

const searchCloseBig = document.querySelectorAll('.search__close_big');
searchCloseBig.forEach(el => el.addEventListener('click', function (el) {
    this.closest('.search__wrap').classList.remove('open');
    searchBig.forEach( function (el) {
        el.value='';
    }, false);
}, false));

const mobileClose = document.querySelectorAll('.mobile__close');
mobileClose.forEach(el => el.addEventListener('click', function (el) {
    const mobileBurger = document.querySelectorAll('.header__checkbox');
    mobileBurger.checked = 0;
    mobileBurger.forEach(function (el) {
        el.checked = 0;
    }, false);
}, false));



const tabsButtons = document.querySelectorAll('.tab');


tabsButtons.forEach(el => {
   el.addEventListener('click', () => {
        const prevActiveItem = document.querySelector('.tabs__item.tabs__item_active');
        const prevActiveButton = document.querySelector('.tab.tab_active');

        if (prevActiveButton) {
               console.log(el.parentNode.closest('.tabs__item_active'));
            if(el.parentNode.closest('.tabs__item_active')){
                const child=el.parentNode.closest('.tabs__item_active').querySelectorAll('.tab');

              child.forEach(el=>{
                  el.classList.remove('tab_active');
              });
                const nextActiveItemId = `#${el.getAttribute('data-tab')}`;

                const nextActiveItem = document.querySelector(nextActiveItemId);

                el.classList.add('tab_active');

                nextActiveItem.classList.add('tabs__item_active');
            }
            else{
                prevActiveButton.classList.remove('tab_active');
            }

        }

        if (prevActiveItem) {
            if(el.parentNode.closest('.tabs__item_active')){

                    const child=el.parentNode.closest('.tabs__item_active').querySelectorAll('.tabs__item');

                    child.forEach(el=>{
                        el.classList.remove('tabs__item_active');
                    });
                    const nextActiveItemId = `#${el.getAttribute('data-tab')}`;

                    const nextActiveItem = document.querySelector(nextActiveItemId);

                    el.classList.add('tab_active');

                    nextActiveItem.classList.add('tabs__item_active');

            }
            else{
                prevActiveItem.classList.remove('tabs__item_active');
            }

        }

        const nextActiveItemId = `#${el.getAttribute('data-tab')}`;

        const nextActiveItem = document.querySelector(nextActiveItemId);

        el.classList.add('tab_active');

        nextActiveItem.classList.add('tabs__item_active');
    });
});



const massivInput = document.querySelectorAll('.edit__input');
const btnSubmit = document.querySelector('.edit__save');

let allInputsFilled = false;

massivInput.forEach(element => {
    element.addEventListener('input', () => {
        allInputsFilled = true;
        massivInput.forEach(input => {
            if (!input.value) {
                allInputsFilled = false;
            }
        });
        if (allInputsFilled) {
            btnSubmit.disabled = false;
        }
    });
});

const comment = document.querySelectorAll('.answer__text');
const commentClose = document.querySelectorAll('.answer__close');
comment.forEach(el => el.addEventListener('click', function (el) {
  this.closest('.answer').classList.toggle('open');
}, false));
commentClose.forEach(el => el.addEventListener('click', function (el) {
    this.closest('.answer').classList.toggle('open');
}, false));
