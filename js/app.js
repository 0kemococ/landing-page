/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const navbar = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNavbar() {
    for (section of sections) {
        list = document.createElement('li');
        list.innerHTML = `<li><a href="#${section.id}" data-nav="${section.id}" class="menu__link">${section.dataset.nav}</a></li>`;
        navbar.appendChild(list);
    };
}
buildNavbar();
// Add class 'active' to section when near top of viewport
window.onscroll = function selector() {
    document.querySelectorAll('section').forEach(function selector(active) {
        let activeLink = navbar.querySelector(`[data-nav=${active.id}]`);
        if(
            active.getBoundingClientRect().top <= 150 &&
            active.getBoundingClientRect().top >= -400
        ) {
            active.classList.add("your-active-class");
            activeLink.classList.add("active-link");
        } else {
            active.classList.remove("your-active-class");
            activeLink.classList.remove("active-link");
        }
    });
};

// Scroll to anchor ID using scrollTO event
navbar.addEventListener("click", (move) => {
    move.preventDefault();
    if (move.target.dataset.nav) {
      document
        .getElementById(`${move.target.dataset.nav}`)
        .scrollIntoView({ behavior: "smooth" });
    }
  });
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

// to the top of the page
function up() {
    document.body.scrollTo({top: 0, behavior: 'smooth'});
}
const upButton = document.querySelector('.up');

window.addEventListener('scroll', function() {
    if (window.pageYOffset < 20) {
        upButton.style.opacity = '0';
    } else {
        upButton.style.opacity = '1';
    }
});