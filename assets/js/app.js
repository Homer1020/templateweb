/**
 * Toggle Navbar
 */
const $navbar = document.getElementById('navbar')
const $toggleNavbar = document.getElementById('toggle-navbar')
const $navbarClose = document.getElementById('navbar-close')

const handleToggleNavbarVisibility = e => {
  $navbar.classList.toggle('show')
}

if($toggleNavbar) {
  $toggleNavbar.addEventListener('click', handleToggleNavbarVisibility)
  $navbarClose.addEventListener('click', handleToggleNavbarVisibility)
}