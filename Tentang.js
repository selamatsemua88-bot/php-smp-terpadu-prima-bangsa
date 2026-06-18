// ==========================
// TENTANG.JS
// SMP TERPADU PRIMA BANGSA
// ==========================

// Navbar saat scroll
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

// Animasi card
document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";
        card.style.transition = "all 0.8s ease";
    });

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }

        });

    }, {
        threshold: 0.2
    });

    cards.forEach(card => observer.observe(card));

});

// Hover Card
document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px) scale(1.03)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0) scale(1)";
    });

});

// Footer tahun otomatis
document.addEventListener("DOMContentLoaded", () => {

    const footer = document.querySelector("footer p");

    if (footer) {
        footer.innerHTML =
            `© ${new Date().getFullYear()} SMP Terpadu Prima Bangsa | Sekolah Unggul Berkarakter`;
    }

});

// Tombol kembali ke atas
const backTop = document.createElement("button");

backTop.innerHTML = "⬆";
backTop.id = "backTop";

document.body.appendChild(backTop);

backTop.style.position = "fixed";
backTop.style.bottom = "20px";
backTop.style.right = "20px";
backTop.style.width = "50px";
backTop.style.height = "50px";
backTop.style.border = "none";
backTop.style.borderRadius = "50%";
backTop.style.background = "#0066cc";
backTop.style.color = "#fff";
backTop.style.fontSize = "20px";
backTop.style.cursor = "pointer";
backTop.style.display = "none";
backTop.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        backTop.style.display = "block";
    } else {
        backTop.style.display = "none";
    }

});

backTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

console.log("Halaman Tentang berhasil dimuat.");