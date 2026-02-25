// Inisialisasi AOS Animation
AOS.init({
    duration: 1000,
    once: true,
    offset: 200
});

// Navbar Scroll Effect & Active Link
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    // Ubah background navbar saat scroll
    if (window.scrollY > 100) {
        navbar.style.padding = '15px 10%';
        navbar.style.background = 'rgba(2, 12, 27, 0.98)';
    } else {
        navbar.style.padding = '20px 10%';
        navbar.style.background = 'rgba(2, 12, 27, 0.9)';
    }

    // Deteksi posisi scroll untuk menu aktif
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

function downloadImage(url, filename) {
    fetch(url)
        .then(response => response.blob())
        .then(blob => {
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        })
        .catch(console.error);
}