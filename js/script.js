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
function closeModal() {
    menuBtn.classList.remove('active')
    menuContent.classList.remove('active');
    document.body.classList.remove('no-scroll');
    topContent.classList.remove('active');
}
document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && menuContent.classList.contains('active')) { 
        closeModal();
    }
});
document.addEventListener('click', (e) => {
   const modal = doument.querySelectorAll('.active);
   modal.forEach(item => {
      if(e.target !== item || e.target !== item.children) {
    closeModal();
   }                                
   });
});
