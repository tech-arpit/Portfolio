let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.nav-bar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Function to activate the nav link based on scroll position
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector(`header nav a[href*='${id}']`).classList.add('active');
            });
        }
    });
};

// Function to toggle the menu icon and navbar for mobile view
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
document.addEventListener("DOMContentLoaded", function() {
    const homeImg = document.querySelector('.home-img');
    setTimeout(() => {
      homeImg.classList.add('visible');
    }, 500); // Adjust the delay as needed
  });
  document.addEventListener("DOMContentLoaded", function() {
    const homeImg = document.querySelector('.home-img');
    const homeContentElements = document.querySelectorAll('.home-content .animate');

    setTimeout(() => {
      homeImg.classList.add('visible');
    }, 500); // Adjust the delay as needed

    homeContentElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('visible');
      }, 500 + index * 200); // Adjust the delay as needed
    });
  });

