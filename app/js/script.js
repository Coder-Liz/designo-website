const body = document.querySelector('body');
const main = document.querySelector('main');
const menuToggleButton = document.querySelector('.topnav__menu-toggle');
const btnOpen = document.querySelector('.topnav__open');
const btnClose = document.querySelector('.topnav__close');
const navContent = document.querySelector('.topnav__navigation');
const navOverlay = document.querySelector('.topnav__overlay');
const media = window.matchMedia('(width < 43.75em)');

function openMobileMenu() {
  menuToggleButton.setAttribute('aria-expanded', 'true');
  body.classList.add('noscroll');
  navContent.classList.add('is-open');
  navOverlay.classList.add('is-active');
  menuToggleButton.classList.add('is-active');
  navContent.removeAttribute('inert');
  navOverlay.setAttribute('aria-hidden', 'false');
  main.setAttribute('inert', '');
  btnClose.focus();
}

function closeMobileMenu() {
  menuToggleButton.setAttribute('aria-expanded', 'false');
  body.classList.remove('noscroll');
  menuToggleButton.classList.remove('is-active');
  navContent.classList.remove('is-open');
  navOverlay.classList.remove('is-active');
  navContent.setAttribute('inert', '');
  navOverlay.setAttribute('aria-hidden', 'true');
  main.removeAttribute('inert');
  btnOpen.focus();
}

function setupNav(e) {
  if (e.matches) {
    // Mobile
    navContent.setAttribute('inert', '');
    navOverlay.setAttribute('aria-hidden', 'true');
    navContent.classList.remove('is-open');
    navOverlay.classList.remove('is-active');
    main.removeAttribute('inert');
    menuToggleButton.classList.remove('is-active');
    menuToggleButton.setAttribute('aria-expanded', 'false');
  } else {
    // Desktop
    navContent.removeAttribute('inert');
    navOverlay.setAttribute('aria-hidden', 'true');
    navContent.classList.remove('is-open');
    navOverlay.classList.remove('is-active');
    main.removeAttribute('inert');
    body.classList.remove('noscroll');
    menuToggleButton.classList.remove('is-active');
    menuToggleButton.setAttribute('aria-expanded', 'false');
  }
}

setupNav(media);
btnOpen.addEventListener('click', openMobileMenu);
btnClose.addEventListener('click', closeMobileMenu);
navOverlay.addEventListener('click', closeMobileMenu);
media.addEventListener('change', setupNav);

// Optional: Debug activeElement on Tab
document.addEventListener('keyup', (e) => {
  if (e.key === 'Tab') {
    console.log(document.activeElement);
  }
});
