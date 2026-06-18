// ===============================
// NAVBAR SCROLL EFFECT
// ===============================
window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {
        nav.classList.add("active");
    } else {
        nav.classList.remove("active");
    }
});


// ===============================
// SMOOTH SCROLL (kalau pakai anchor #)
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


// ===============================
// HERO BUTTON ANIMASI
// ===============================
const btn = document.querySelector(".btn");

if (btn) {
    btn.addEventListener("mouseover", () => {
        btn.style.transform = "scale(1.1)";
        btn.style.transition = "0.3s";
    });

    btn.addEventListener("mouseout", () => {
        btn.style.transform = "scale(1)";
    });
}


// ===============================
// FADE IN SAAT SCROLL
// ===============================
const elements = document.querySelectorAll(".container, .info, .poster");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

elements.forEach(el => {
    el.classList.add("fade");
    observer.observe(el);
});