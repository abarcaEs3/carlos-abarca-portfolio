// En caso de que JS falle o este desactivado, el contenido siguira siendo visible
document.documentElement.classList.add("js");

// ============================================
// Theme
// ============================================

const themeToggle = document.querySelector(".theme-toggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  document.body.classList.add("light-theme");
  themeToggle.textContent = "☾";
} else {
  themeToggle.textContent = "☼";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");

  const isLight = document.body.classList.contains("light-theme");

  themeToggle.textContent = isLight ? "☾" : "☼";

  localStorage.setItem("theme", isLight ? "light" : "dark");
});

// ============================================
// Navbar on scroll
// ============================================

const siteHeader = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    siteHeader.classList.add("scrolled");
  } else {
    siteHeader.classList.remove("scrolled");
  }
});

// ============================================
// Mobile menu
// ============================================

const menuToggle = document.querySelector(".menu-toggle");
const navbarLinks = document.querySelector(".navbar__links");

menuToggle.addEventListener("click", () => {
  const isOpen = navbarLinks.classList.toggle("is-open");

  menuToggle.classList.toggle("is-active", isOpen);

  menuToggle.setAttribute("aria-expanded", isOpen);
});

// Close mobile menu after selecting a link

navbarLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navbarLinks.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Scroll reveal
const revealElements = document.querySelectorAll(".reveal");

if (revealElements.length > 0) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -40px 0px",
    },
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
}
