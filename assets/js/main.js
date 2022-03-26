/*================ SHOW MENU ================*/

function showMenu(menuId, toggleId) {
  var menuEl = document.getElementById(menuId),
    toggleEl = document.getElementById(toggleId);

  toggleEl.addEventListener('click', function () {
    menuEl.classList.add('show-menu');
  });
}

showMenu('nav-menu', 'nav-toggle');

/*================ MENU HIDDEN  ================*/
var navClose = document.querySelector('#nav-close');
var navMenu = document.querySelector('#nav-menu');
navClose.addEventListener('click', function () {
  navMenu.classList.remove('show-menu');
});

/*================ REMOVE MENU MOBILE ================*/
var navLink = document.querySelectorAll('.nav__link');
var activeLinkClass = 'active-link';

function linkAction(event) {
  event.stopPropagation();
  const activeLink = this;
  var navMenu = document.getElementById('nav-menu');
  // When we click on each nav__link, we remote the show-menu class
  navMenu.classList.remove('show-menu');

  navLink.forEach(function (n) {
    n === activeLink ? n.classList.add(activeLinkClass) : n.classList.remove(activeLinkClass);
  });
}

navLink.forEach(function (n) {
  n.addEventListener('click', linkAction);
});
