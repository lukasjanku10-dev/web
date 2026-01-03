const revealElements = document.querySelectorAll('.reveal');

const scrollReveal = () => {
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', scrollReveal);
// Spustit jednou při načtení pro hero sekci
scrollReveal();

document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1 // Stačí, aby bylo vidět 10 % sekce
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    // Důležité: Sledujeme všechny sekce, které mají třídu "reveal" nebo "reveal-smooth"
    const elementsToAnimate = document.querySelectorAll('.reveal, .reveal-smooth, .impact-section, .wow-footer');
    
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });

    // Aktivace efektu při skrolování
window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.reveal-smooth');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
});

// Aktivace efektu pro nové sekce
window.addEventListener('scroll', () => {
    document.querySelectorAll('.reveal-smooth').forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add('active');
        }
    });
});

const cards = document.querySelectorAll('.video-card');

cards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    card.style.transform = `scale(1.07) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = `scale(1) rotateX(0) rotateY(0)`;
  });
});