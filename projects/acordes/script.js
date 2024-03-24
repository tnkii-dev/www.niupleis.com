function toggleMenu() {
  sideMenu = document.getElementById('sideMenu');
  sideMenu.classList.toggle('show');
}

function isDesktop() {
  return window.innerWidth > 719;
}