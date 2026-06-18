// ==========================
// SMP TERPADU PRIMA BANGSA
// Home.js
// ==========================

// Navbar Scroll Effect
window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {
        nav.style.background = "#0066cc";
        nav.style.padding = "10px 50px";
        nav.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
    } else {
        nav.style.background = "#0066cc";
        nav.style.padding = "15px 50px";
        nav.style.boxShadow = "none";
    }
});

// Fade Animation Card
document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.classList.add("fade");
    });

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    }, {
        threshold: 0.2
    });

    cards.forEach(card => {
        observer.observe(card);
    });

});

// Kecilkan tulisan berita otomatis
document.addEventListener("DOMContentLoaded", () => {

    const paragraf = document.querySelectorAll(".card-content p");

    paragraf.forEach(item => {
        item.style.fontSize = "14px";
        item.style.lineHeight = "1.7";
    });

});

// Efek Hover Card
document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-10px) scale(1.03)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0) scale(1)";
        });

    });

});

// Tombol Back To Top
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
btnTop.style.fontSize = "22px";
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

// Footer Tahun Otomatis
document.addEventListener("DOMContentLoaded", () => {

    const footer = document.querySelector("footer p");

    if (footer) {
        footer.innerHTML =
            `© ${new Date().getFullYear()} SMP Terpadu Prima Bangsa`;
    }

});

console.log("Website SMP Terpadu Prima Bangsa berhasil dimuat.");