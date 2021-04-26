const iconMenu = document.querySelector('.menu-icon');
// const headerLogo = document.querySelector('.header-logo');
if (iconMenu){
    const menuBody = document.querySelector('.menu-body');
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle ('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        // headerLogo.classList.toggle('_active');
    });
}