const menu = document.getElementById('burger-menu');
const menuOpen = document.getElementById('burger-menu-open');

if (menuOpen && menu) {
  menuOpen.addEventListener('click', function () {
    const isOpen = menu.getAttribute('data-open');
    if (isOpen === null) {
      menu.setAttribute('data-open', '');
    } else {
      menu.removeAttribute('data-open');
    }
  });
}
