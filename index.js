/**
 * Main JavaScript Engine for Chinthal Raghuveer Portfolio Website
 * Features: Navigation, Mobile Menu, Scroll Progress, Dynamic Year
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initScrollProgress();
    initBackToTop();
    initDynamicYear();
});

/**
 * Mobile navigation menu and smooth link handling
 */
function initNavigation() {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    // Toggle Mobile Menu
    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', () => {
            const isOpen = navMenu.classList.contains('open');
            if (isOpen) {
                navMenu.classList.remove('open');
                hamburgerBtn.setAttribute('aria-expanded', 'false');
            } else {
                navMenu.classList.add('open');
                hamburgerBtn.setAttribute('aria-expanded', 'true');
            }
        });
    }

    // Close mobile menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu && navMenu.classList.contains('open')) {
                navMenu.classList.remove('open');
                if (hamburgerBtn) hamburgerBtn.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Active Link Highlight on Scroll
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const correspondingLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                if (correspondingLink) {
                    navLinks.forEach(l => l.classList.remove('active'));
                    correspondingLink.classList.add('active');
                }
            }
        });
    });
}

/**
 * Scroll progress bar indicator top of page
 */
function initScrollProgress() {
    const progressBar = document.getElementById('scrollProgress');
    if (!progressBar) return;

    window.addEventListener('scroll', () => {
        const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
        const currentScroll = window.scrollY;
        const progressPercentage = (currentScroll / totalScroll) * 100;
        progressBar.style.width = `${progressPercentage}%`;
    });
}

/**
 * Back to top floating button
 */
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    if (!backToTopBtn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/**
 * Dynamic copyright year
 */
function initDynamicYear() {
    const yearSpan = document.getElementById('copyrightYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}