function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// Menu hambúrguer
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navItens = document.getElementById('navItens');

if (hamburgerBtn && navItens) {
    hamburgerBtn.addEventListener('click', function () {
        const isOpen = navItens.classList.toggle('open');
        hamburgerBtn.classList.toggle('open', isOpen);
        hamburgerBtn.setAttribute('aria-expanded', isOpen);
    });

    // Fecha o menu ao clicar em um link
    navItens.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navItens.classList.remove('open');
            hamburgerBtn.classList.remove('open');
            hamburgerBtn.setAttribute('aria-expanded', false);
        });
    });
}

// Suavizar o scroll dos links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// ========================
// SCROLL REVEAL
// ========================
(function () {
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    // Elementos fora do main: observados pelo scroll
    document.querySelectorAll('.scroll-reveal').forEach(function (el) {
        var inMain = el.closest('main');
        if (!inMain) {
            observer.observe(el);
        }
    });

    // Elementos dentro do main: animam na carga da página com delay escalonado
    var mainEls = document.querySelectorAll('main .scroll-reveal');
    mainEls.forEach(function (el, i) {
        setTimeout(function () {
            el.classList.add('visible');
        }, 100 + i * 180);
    });
})();
