// ---- Theme Toggle Functionality ---- //
const themeToggleDesktop = document.getElementById("theme-toggle-desktop");
const themeToggleMobile = document.getElementById("theme-toggle-mobile");
const body = document.body;

// Check for saved theme preference or system preference
if (
  localStorage.getItem("theme") === "dark" ||
  (!localStorage.getItem("theme") &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  body.classList.add("dark-mode");
}

// Toggle theme on button click
function toggleTheme() {
  body.classList.toggle("dark-mode");
  localStorage.setItem(
    "theme",
    body.classList.contains("dark-mode") ? "dark" : "light"
  );
}

themeToggleDesktop.addEventListener("click", toggleTheme);
themeToggleMobile.addEventListener("click", toggleTheme);

// ---- Mobile Menu Toggle ---- //
function myMenuFunction() {
  var menu = document.getElementById("myNavMenu");
  var isOpen = menu.classList.contains("responsive");
  menu.classList.toggle("responsive");
  
  // Update aria-expanded
  const toggleIcon = document.querySelector('.mobile-menu-toggle');
  if (toggleIcon) {
    toggleIcon.setAttribute('aria-expanded', !isOpen);
  }
}

// ---- Enhanced Mobile Menu Toggle with Touch Support ---- //
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener('click', (e) => {
    e.preventDefault();
    myMenuFunction();
  });
  
  mobileMenuToggle.addEventListener('touchstart', (e) => {
    e.preventDefault();
    myMenuFunction();
  });
}

// ---- Nav Link Active State ---- //
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

// ---- Close Mobile Menu on Link Click ---- //
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    const menu = document.getElementById("myNavMenu");
    menu.classList.remove("responsive");
    
    // Update aria-expanded
    const toggleIcon = document.querySelector('.mobile-menu-toggle');
    if (toggleIcon) {
      toggleIcon.setAttribute('aria-expanded', 'false');
    }
  });
});

function updateActiveLink() {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - 90) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active-link");
    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("active-link");
    }
  });
}

window.addEventListener("scroll", updateActiveLink);
updateActiveLink();

// ---- Underline Animation for Nav Links ---- //
const navMenuList = document.querySelector(".nav_menu_list");
navLinks.forEach((link) => {
  link.addEventListener("mouseenter", function () {
    const rect = this.getBoundingClientRect();
    const parentRect = navMenuList.getBoundingClientRect();
    navMenuList.style.setProperty("--left", `${rect.left - parentRect.left}px`);
    navMenuList.style.setProperty("--width", `${rect.width}px`);
  });
});

navMenuList.addEventListener("mouseleave", () => {
  const activeLink = document.querySelector(".nav-link.active-link");
  if (activeLink) {
    const rect = activeLink.getBoundingClientRect();
    const parentRect = navMenuList.getBoundingClientRect();
    navMenuList.style.setProperty("--left", `${rect.left - parentRect.left}px`);
    navMenuList.style.setProperty("--width", `${rect.width}px`);
  } else {
    navMenuList.style.setProperty("--width", "0");
  }
});

// ---- Typed.js for Hero Section ---- //
var typed = new Typed(".typedText", {
  strings: [
    "Frontend Developer",
    "Web Designer",
    "Problem Solver",
    "Creative Coder",
  ],
  typeSpeed: 70,
  backSpeed: 50,
  backDelay: 1000,
  loop: true,
});

// ---- Form Submission Handling ---- //
const form = document.getElementById("contact-form");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(form);

  fetch(form.action, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        successMessage.classList.add("show");
        form.reset();
        setTimeout(() => {
          successMessage.classList.remove("show");
        }, 3000);
      } else {
        alert("There was an error sending your message. Please try again.");
      }
    })
    .catch((error) => {
      alert("There was an error sending your message. Please try again.");
      console.error("Error:", error);
    });
});

// ---- Scroll to Top on Page Load ---- //
window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});

// ---- Enhanced ScrollReveal Animations ---- //
window.addEventListener("load", () => {
  if (window.ScrollReveal) {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Main reveal from top
    const sr = ScrollReveal({
      origin: 'top',
      distance: prefersReduced ? '0px' : '80px',
      duration: prefersReduced ? 0 : 1200,
      delay: prefersReduced ? 0 : 200,
      easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      reset: !prefersReduced,
    });

    // Left reveal
    const srLeft = ScrollReveal({
      origin: 'left',
      distance: prefersReduced ? '0px' : '100px',
      duration: prefersReduced ? 0 : 1200,
      delay: prefersReduced ? 0 : 300,
      easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      reset: !prefersReduced,
    });

    // Right reveal
    const srRight = ScrollReveal({
      origin: 'right',
      distance: prefersReduced ? '0px' : '100px',
      duration: prefersReduced ? 0 : 1200,
      delay: prefersReduced ? 0 : 300,
      easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      reset: !prefersReduced,
    });

    // Scale reveal
    const srScale = ScrollReveal({
      origin: 'center',
      distance: '0px',
      duration: prefersReduced ? 0 : 1000,
      delay: prefersReduced ? 0 : 200,
      easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      scale: prefersReduced ? 1 : 0.8,
      reset: !prefersReduced,
    });

    // Hero Section - Staggered from top
    sr.reveal('.featured-text-card', { delay: 100 });
    sr.reveal('.featured-name', { delay: 300 });
    sr.reveal('.featured-text-info', { delay: 500 });
    sr.reveal('.featured-text-btn', { delay: 700, interval: 150 });
    sr.reveal('.social_icons .icon', { interval: 120, delay: 900 });
    sr.reveal('.scroll-btn', { delay: 1100 });

    // About Section - Left/Right alternating
    sr.reveal('#about .top-header', { delay: 100 });
    srLeft.reveal('.about-info', { delay: 200 });
    srRight.reveal('.skills-box', { delay: 300, interval: 200 });

    // Projects Section - Scale and stagger
    sr.reveal('#projects .top-header', { delay: 100 });
    srScale.reveal('.project-box', { interval: 250, delay: 200 });

    // Contact Section - Left/Right
    sr.reveal('#contact .top-header', { delay: 100 });
    srLeft.reveal('.contact-info', { delay: 200 });
    srRight.reveal('.form-control', { delay: 300 });

    // Footer - Staggered from bottom
    const srBottom = ScrollReveal({
      origin: 'bottom',
      distance: prefersReduced ? '0px' : '60px',
      duration: prefersReduced ? 0 : 1000,
      delay: prefersReduced ? 0 : 200,
      easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      reset: !prefersReduced,
    });
    
    srBottom.reveal('footer .top-footer', { delay: 100 });
    srBottom.reveal('footer .footer-menu .footer_menu_list', { interval: 100, delay: 200 });
    srBottom.reveal('footer .footer-social-icons .icon', { interval: 100, delay: 300 });
    srBottom.reveal('footer .bottom-footer', { delay: 400 });
  }
});

// ---- Parallax Effect for Hero Blobs ---- //
const heroBlobs = document.querySelectorAll(".hero-blob");
document.addEventListener("mousemove", (e) => {
  heroBlobs.forEach((blob, index) => {
    const intensity = index === 0 ? 0.02 : 0.015;
    const translateX = (e.clientX - window.innerWidth / 2) * intensity;
    const translateY = (e.clientY - window.innerHeight / 2) * intensity;
    blob.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
  });
});