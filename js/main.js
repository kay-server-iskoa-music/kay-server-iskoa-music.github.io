// Powered by DosX (dosx.su)

// Smooth fade-in on page load
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Tab Navigation
document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const tabContents = document.querySelectorAll('.tab-content');
    const sidebar = document.getElementById('sidebar');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');

    // Tab switching functionality
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetTab = item.getAttribute('data-tab');

            // Remove active class from all nav items and tab contents
            navItems.forEach(nav => nav.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked nav item and corresponding tab content
            item.classList.add('active');
            document.getElementById(targetTab).classList.add('active');

            // Close mobile menu after selection
            if (window.innerWidth <= 1024) {
                sidebar.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }

            // Scroll to top of content
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // Mobile menu toggle
    mobileMenuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 1024) {
            if (!sidebar.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                sidebar.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        }
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024) {
            sidebar.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        }
    });

    // Smooth scrolling for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add animation on scroll for timeline items
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe timeline items
    document.querySelectorAll('.timeline-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });

    // Observe service cards
    document.querySelectorAll('.service-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // Observe skill cards
    document.querySelectorAll('.skill-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // Add decoding effect to name (glitch decryption animation)
    const nameElement = document.querySelector('.name');
    if (nameElement) {
        const originalText = nameElement.textContent;
        const chars = '@!*$&()#%^~<>?/|\\';
        let iterations = 0;
        const maxIterations = originalText.length;

        nameElement.textContent = '';

        // Initially fill with random characters
        for (let i = 0; i < originalText.length; i++) {
            nameElement.textContent += chars[Math.floor(Math.random() * chars.length)];
        }

        const decodeInterval = setInterval(() => {
            nameElement.textContent = nameElement.textContent
                .split('')
                .map((char, index) => {
                    if (index < iterations) {
                        return originalText[index];
                    }
                    return chars[Math.floor(Math.random() * chars.length)];
                })
                .join('');

            iterations += 1;

            if (iterations > maxIterations) {
                clearInterval(decodeInterval);
                nameElement.textContent = originalText;
            }
        }, 100);
    }

    // Add particle interaction feedback
    const canvas = document.querySelector('#particles-js canvas');
    if (canvas) {
        canvas.style.cursor = 'crosshair';
    }

    // Add easter egg: Konami code
    let konamiCode = [];
    const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

    document.addEventListener('keydown', (e) => {
        konamiCode.push(e.key);
        konamiCode = konamiCode.slice(-10);

        if (konamiCode.join('') === konamiSequence.join('')) {
            activateEasterEgg();
        }
    });

    function activateEasterEgg() {
        // Create a fun animation or message
        const easterEgg = document.createElement('div');
        easterEgg.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
            color: white;
            padding: 2rem 3rem;
            border-radius: 16px;
            font-size: 1.5rem;
            font-weight: bold;
            z-index: 10000;
            box-shadow: 0 0 50px rgba(99, 102, 241, 0.8);
            animation: pulse 1s ease-in-out infinite;
        `;
        easterEgg.textContent = '🎉 Секретный код активирован! 🎉';
        document.body.appendChild(easterEgg);

        setTimeout(() => {
            easterEgg.remove();
        }, 3000);
    }

    // Add CSS animation for pulse
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0%, 100% { transform: translate(-50%, -50%) scale(1); }
            50% { transform: translate(-50%, -50%) scale(1.05); }
        }
    `;
    document.head.appendChild(style);

    // Performance optimization: Lazy load images if any are added later
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.add('loaded');
                        observer.unobserve(img);
                    }
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // Add smooth reveal for footer
    const footer = document.querySelector('.footer');
    if (footer) {
        footer.style.opacity = '0';
        footer.style.transform = 'translateY(20px)';

        setTimeout(() => {
            footer.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            footer.style.opacity = '1';
            footer.style.transform = 'translateY(0)';
        }, 1000);
    }

    // Console message for developers
    console.log('%c👨‍💻 Привет, разработчик!', 'color: #6366f1; font-size: 20px; font-weight: bold;');
    console.log('%cЭтот сайт создан с ❤️ by dosx.su (DosX)', 'color: #8b5cf6; font-size: 14px;');
    console.log('%cИнтересуетесь разработкой? Свяжитесь: https://t.me/Iskoa', 'color: #10b981; font-size: 12px;');
});
