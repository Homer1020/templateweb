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

/**
 * Material Input
 */
 class MaterialInputs {
  constructor(selector = '.material-input input') {
    this.materialInputs = Array.from(document.querySelectorAll(selector));
    this.events();
  }
  events() {
    this.materialInputs.forEach(input => {
      input.addEventListener('input', () => {
        if(input.value !== '') {
          input.classList.add('non-empty');
        }else {
          input.classList.remove('non-empty');
        }
      });
    });
  }
}

new MaterialInputs();

/**
 * Slider
 */
$('#whychoseus').owlCarousel({
  loop:true,
  margin:20,
  nav:true,
  navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
  dots: false,
  responsive:{
      0:{
          items:1,
          stagePadding: 50
      },
      600:{
          items:2
      },
      1000:{
          items:4
      }
  }
});