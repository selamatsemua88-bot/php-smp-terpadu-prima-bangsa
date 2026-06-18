// ==========================
// PROGRAM.JS
// SMP TERPADU PRIMA BANGSA
// ==========================

// Navbar berubah saat scroll
window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {
        nav.style.background = "#0066cc";
        nav.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
    } else {
        nav.style.background = "#0066cc";
        nav.style.boxShadow = "none";
    }
});

// Animasi card saat muncul
document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }

        });

    }, {
        threshold: 0.2
    });

    cards.forEach((card) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";
        card.style.transition = "0.8s";

        observer.observe(card);
    });

});

// Hover card
document.querySelectorAll(".card").forEach((card) => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px) scale(1.03)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });

});

// Tahun footer otomatis
document.addEventListener("DOMContentLoaded", () => {

    const footer = document.querySelector("footer p");

    if (footer) {
        footer.innerHTML =
            `© ${new Date().getFullYear()} SMP Terpadu Prima Bangsa`;
    }

});

// Tombol kembali ke atas
const btnTop = document.createElement("button");

btnTop.innerHTML = "⬆";
btnTop.id = "backToTop";

document.body.appendChild(btnTop);

btnTop.style.position = "fixed";
btnTop.style.bottom = "20px";
btnTop.style.right = "20px";
btnTop.style.width = "50px";
btnTop.style.height = "50px";
btnTop.style.border = "none";
btnTop.style.borderRadius = "50%";
btnTop.style.background = "#0066cc";
btnTop.style.color = "white";
btnTop.style.fontSize = "20px";
btnTop.style.cursor = "pointer";
btnTop.style.display = "none";
btnTop.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        btnTop.style.display = "block";
    } else {
        btnTop.style.display = "none";
    }

});

btnTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

console.log("Program SMP Terpadu Prima Bangsa berhasil dimuat.");