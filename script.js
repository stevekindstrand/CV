const toggleButton = document.querySelector(".toggle-button");
const navbarLinks = document.querySelector(".navbar-links");

toggleButton.addEventListener("click", (e) => {
    e.preventDefault();
    navbarLinks.classList.toggle("active");
});

navbarLinks.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
});