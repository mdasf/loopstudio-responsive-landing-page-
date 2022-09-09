const navToggler = document.querySelector(".navbar-toggle");
const closeBtn = document.querySelector(".close");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
const mobileNav = document.querySelector(".mobile-nav");

[navToggler, closeBtn, ...mobileNavLinks].forEach((item) =>
  item.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
    mobileNav.classList.toggle("active");
  })
);
