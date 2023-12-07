const toggleButton = document.querySelector(".burger");
const resNavLinks = document.querySelector(".res-nav-links");
const navbar = document.querySelector(".navbar");

toggleButton.addEventListener("click", function () {
    toggleButton.classList.toggle("active");
    resNavLinks.classList.toggle("active");
});

let lastScrollTop = 0;


window.addEventListener("scroll", function () {
    const scrollTop = window.scrollY;

    if (scrollTop > 300) {
        if (scrollTop > lastScrollTop) {
            navbar.classList.remove("active");
        } else {
            navbar.classList.add("active");
        }
    } else {
        // When at the top, always set the navbar as active
        navbar.classList.add("active");
    }

    lastScrollTop = scrollTop;
});


