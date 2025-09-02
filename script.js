/* SCROLL TO TOP ON PAGE LOAD */
window.addEventListener("load", () => {
  window.scrollTo(0, 0); // Force scroll to top
  // Ensure Home link is active
  document.querySelectorAll(".nav-link").forEach(link => link.classList.remove("active-link"));
  document.querySelector(".nav-link[href='#home']").classList.add("active-link");
});

/* FORM SUBMISSION HANDLING */
const contactForm = document.getElementById("contact-form");
const successMessage = document.getElementById("success-message");

contactForm.addEventListener("submit", (e) => {
  // Allow form to submit to iframe
  setTimeout(() => {
    // Clear form
    contactForm.reset();
    // Show success message
    successMessage.classList.add("show");
    // Hide success message after 5 seconds
    setTimeout(() => {
      successMessage.classList.remove("show");
    }, 5000);
  }, 100); // Small delay to ensure submission starts
});

/* NAVIGATION BAR FUNCTION */
function myMenuFunction() {
  const menuBtn = document.getElementById("myNavMenu");
  menuBtn.classList.toggle("responsive");
}

/* CLOSE MOBILE MENU ON LINK CLICK */
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    const menuBtn = document.getElementById("myNavMenu");
    menuBtn.classList.remove("responsive");
  });
});

/* ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING */
window.onscroll = function () {
  headerShadow();
};

function headerShadow() {
  const navHeader = document.getElementById("header");
  if (
    document.body.scrollTop > 50 ||
    document.documentElement.scrollTop > 50
  ) {
    navHeader.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.15)";
    navHeader.style.height = "60px";
  } else {
    navHeader.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
  }
}

/* TYPING EFFECT */
const typingEffect = new Typed(".typedText", {
  strings: ["Designer", "Developer", "Innovator"],
  loop: true,
  typeSpeed: 120,
  backSpeed: 80,
  backDelay: 1500,
  startDelay: 500,
});

/* SCROLL REVEAL ANIMATION */
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 200,
  reset: true,
});

/* HOME */
sr.reveal(".featured-box", { delay: 100 });
sr.reveal(".featured-text-card", { delay: 100 });
sr.reveal(".featured-name", { delay: 300 });
sr.reveal(".featured-text-info", { delay: 400 });
sr.reveal(".featured-text-btn", { delay: 400 });
sr.reveal(".social_icons", { delay: 500 });

/* PROJECT BOX */
sr.reveal(".project-box", { interval: 200 });

/* HEADINGS */
sr.reveal(".top-header", { delay: 100 });

/* SCROLL REVEAL LEFT_RIGHT ANIMATION */
const srLeft = ScrollReveal({
  origin: "left",
  distance: "60px",
  duration: 2000,
  delay: 200,
  reset: true,
});

srLeft.reveal(".about-info", { delay: 300 });
srLeft.reveal(".contact-info", { delay: 300 });

const srRight = ScrollReveal({
  origin: "right",
  distance: "60px",
  duration: 2000,
  delay: 200,
  reset: true,
});

srRight.reveal(".skills-box", { delay: 300 });
srRight.reveal(".form-control", { delay: 300 });

/* CHANGE ACTIVE LINK */
const sections = document.querySelectorAll("section[id]");
function scrollActive() {
  const scrollY = window.scrollY;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 80,
      sectionId = current.getAttribute("id");
    const link = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      link.classList.add("active-link");
      // Update underline position and width
      const linkRect = link.getBoundingClientRect();
      const navMenuRect = document.querySelector(".nav_menu_list").getBoundingClientRect();
      document.querySelector(".nav_menu_list").style.setProperty("--left", `${linkRect.left - navMenuRect.left + 12}px`);
      document.querySelector(".nav_menu_list").style.setProperty("--width", `${linkRect.width - 24}px`);
    } else {
      link.classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/* NAVIGATION UNDERLINE EFFECT */
const navMenuList = document.querySelector(".nav_menu_list");

function updateUnderline() {
  const activeLink = document.querySelector(".nav-link.active-link") || navLinks[0];
  const linkRect = activeLink.getBoundingClientRect();
  const navMenuRect = navMenuList.getBoundingClientRect();
  navMenuList.style.setProperty("--left", `${linkRect.left - navMenuRect.left + 12}px`);
  navMenuList.style.setProperty("--width", `${linkRect.width - 24}px`);
}

navLinks.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    const linkRect = link.getBoundingClientRect();
    const navMenuRect = navMenuList.getBoundingClientRect();
    navMenuList.style.setProperty("--left", `${linkRect.left - navMenuRect.left + 12}px`);
    navMenuList.style.setProperty("--width", `${linkRect.width - 24}px`);
  });
});

navMenuList.addEventListener("mouseleave", updateUnderline);

// Initialize underline on page load
window.addEventListener("load", updateUnderline);
window.addEventListener("resize", updateUnderline);

/* DARK MODE TOGGLE */
const themeToggleMobile = document.getElementById("theme-toggle-mobile");
const themeToggleDesktop = document.getElementById("theme-toggle-desktop");

// Check for saved theme in localStorage
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

// Toggle dark mode on button click for both mobile and desktop
const toggleTheme = (e) => {
  e.preventDefault(); // Prevent default touch behavior
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
};

themeToggleMobile.addEventListener("click", toggleTheme);
themeToggleMobile.addEventListener("touchstart", toggleTheme);
themeToggleDesktop.addEventListener("click", toggleTheme);
themeToggleDesktop.addEventListener("touchstart", toggleTheme);