'use strict';
const menuBtn = document.querySelector('.header__bottom-menu-btn'),
      menuContent = document.querySelector('.header__bottom-menu-wrap'),
      topContent = document.querySelector('.header__top');
menuBtn.addEventListener('click', function () {
    this.classList.toggle('active')
    menuContent.classList.toggle('active');
    topContent.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
})
document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && menuContent.classList.contains('active')) { 
          menuBtn.classList.remove('active')
          menuContent.classList.remove('active');
          document.body.classList.remove('no-scroll');
          topContent.classList.remove('active');
    }
});

