(function () {
  // меню

  var isMenuActive = false;

  var menu = document.querySelector('.nav-menu');
  var menuToggleBtn = document.querySelector('.page-header__toggle-btn');

  var toggleMenu = function() {
    if (isMenuActive) {
      menuToggleBtn.classList.remove('page-header__toggle-btn--close');
      menuToggleBtn.classList.add('page-header__toggle-btn--open');
      menu.classList.add('nav-menu--hidden');
    } else {
      console.log('open');
      menuToggleBtn.classList.remove('page-header__toggle-btn--open');
      menuToggleBtn.classList.add('page-header__toggle-btn--close');
      menu.classList.remove('nav-menu--hidden');
    }

    isMenuActive = !isMenuActive;
  };

  menu.classList.remove('nav-menu--no-js');
  menu.classList.add('nav-menu--hidden');
  menuToggleBtn.classList.remove('page-header__toggle-btn--no-js');
  menuToggleBtn.addEventListener('click', toggleMenu);

  // видео

  var videoControls = document.querySelector('.video__controls');
  if (videoControls) {
    videoControls.classList.remove('video__controls--no-js');
    videoControls.removeAttribute('hidden');
    document.querySelector('.video__video').removeAttribute('controls');
  }
})();
