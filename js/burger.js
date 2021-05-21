const burgerBtn = document.querySelector('.humburger-menu')
const menu = document.querySelector('.menu')

const toggleMenu = () => {
  menu.classList.toggle('menu-active')
  burgerBtn.classList.toggle('humburger-menu-active')
}

const closeMenu = ()  => {
  menu.classList.remove('menu-active')
  burgerBtn.classList.remove('humburger-menu-active')
}

burgerBtn.addEventListener('click', toggleMenu)
menu.addEventListener('click', (event) => {
  const target = event.target;

  if (target.classList.contains('menu-list__link')) {
    closeMenu();
  }
})