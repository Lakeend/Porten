'use strict';
/* Menu */
const menuBtn = document.querySelector('.header__bottom-menu-btn'),
      menuContent = document.querySelector('.header__bottom-menu-wrap'),
      topContent = document.querySelector('.header__top');
menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('active');
    menuContent.classList.toggle('active');
    topContent.classList.toggle('active');
});

/* Menu END*/
