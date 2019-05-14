function toggleMenu() {
  document.querySelector('.menu').classList.toggle('display-element')
};

document.querySelector('#mobile-menu').addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenu()
});