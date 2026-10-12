/* ==========================================================
   LUMEN STUDIO — Main JavaScript
   10 Interactive Features
   ========================================================== */

'use strict';

/* ==========================================================
   1. THEME TOGGLE (Dark / Light Mode)
   ========================================================== */
(function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;

    // Page load pe saved theme apply karein
    const savedTheme = localStorage.getItem('lumen-theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    // Toggle click handler
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        const currentTheme = document.body.classList.contains('dark-mode')
            ? 'dark'
            : 'light';

        localStorage.setItem('lumen-theme', currentTheme);
    });
})();


/* ==========================================================
   2. MOBILE NAVIGATION — Close on link click
   ========================================================== */
(function initMobileNav() {
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelectorAll('.nav-list a');

    if (!navToggle || !navLinks.length) return;

    // Mobile pe link click karne pe menu close ho jaye
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.checked = false;
        });
    });

    // ESC key se menu close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navToggle.checked) {
            navToggle.checked = false;
        }
    });
})();


/* ==========================================================
   3. TYPING ANIMATION (Hero section)
   ========================================================== */
(function initTyping() {
    const typingEl = document.getElementById('typingText');
    if (!typingEl) return;

    const words = [
        'that stand out.',
        'people remember.',
        'that convert.',
        'worth talking about.'
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];

        if (isDeleting) {
            typingEl.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingEl.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 40 : 90;

        // Word complete — pause then delete
        if (!isDeleting && charIndex === currentWord.length) {
            typeSpeed = 1800;
            isDeleting = true;
        }

        // Word deleted — move to next
        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 400;
        }

        setTimeout(type, typeSpeed);
    }

    // Small delay before starting
    setTimeout(type, 800);
})();


/* ==========================================================
   4. ANIMATED COUNTERS
   ========================================================== */
(function initCounters() {
    const counters = document.querySelectorAll('.counter');
    if (!counters.length) return;

    let hasAnimated = false;

    function animateCounters() {
        if (hasAnimated) return;
        hasAnimated = true;

        counters.forEach(counter => {
            const target = parseInt(counter.dataset.target, 10);
            const numEl = counter.querySelector('.counter-num');
            if (!numEl || isNaN(target)) return;

            const duration = 2000;
            const stepTime = 16;
            const totalSteps = duration / stepTime;
            const increment = target / totalSteps;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    numEl.textContent = target + '+';
                    clearInterval(timer);
                } else {
                    numEl.textContent = Math.floor(current);
                }
            }, stepTime);
        });
    }

    // IntersectionObserver — visible hone pe trigger
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.disconnect();
            }
        });
    }, { threshold: 0.3 });

    const firstCounter = document.querySelector('.counters');
    if (firstCounter) observer.observe(firstCounter);
})();


/* ==========================================================
   5. TESTIMONIAL SLIDER
   ========================================================== */
(function initSlider() {
    const slider = document.getElementById('testimonialSlider');
    if (!slider) return;

    const slides = slider.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');
    const dotsContainer = document.getElementById('sliderDots');

    if (!slides.length) return;

    let currentIndex = 0;
    let autoPlayInterval;

    // Create dots
    if (dotsContainer) {
        slides.forEach((_, i) => {
            const dot = document.createElement('button');
            dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
            dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        });
    }

    function updateDots() {
        const dots = dotsContainer.querySelectorAll('.slider-dot');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }

    function goToSlide(index) {
        slides[currentIndex].classList.remove('active');
        currentIndex = (index + slides.length) % slides.length;
        slides[currentIndex].classList.add('active');
        updateDots();
        resetAutoPlay();
    }

    function nextSlide() {
        goToSlide(currentIndex + 1);
    }

    function prevSlide() {
        goToSlide(currentIndex - 1);
    }

    function resetAutoPlay() {
        clearInterval(autoPlayInterval);
        autoPlayInterval = setInterval(nextSlide, 6000);
    }

    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
    });

    // Auto-play start
    resetAutoPlay();

    // Pause on hover
    slider.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
    slider.addEventListener('mouseleave', resetAutoPlay);
})();


/* ==========================================================
   6. FAQ ACCORDION
   ========================================================== */
(function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    if (!faqItems.length) return;

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (!question) return;

        question.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');

            // Close all others (accordion behaviour)
            faqItems.forEach(other => other.classList.remove('open'));

            // Toggle current
            if (!isOpen) {
                item.classList.add('open');
            }
        });
    });

    // Open first item by default
    if (faqItems[0]) faqItems[0].classList.add('open');
})();


/* ==========================================================
   7. PORTFOLIO FILTER
   ========================================================== */
(function initPortfolioFilter() {
    const filterContainer = document.getElementById('portfolioFilter');
    const grid = document.getElementById('portfolioGrid');
    const emptyMsg = document.getElementById('portfolioEmpty');

    if (!filterContainer || !grid) return;

    const buttons = filterContainer.querySelectorAll('.filter-btn');
    const items = grid.querySelectorAll('.portfolio-item');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Active button update
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;
            let visibleCount = 0;

            items.forEach(item => {
                const category = item.dataset.category;
                const match = filter === 'all' || category === filter;

                if (match) {
                    item.classList.remove('hide');
                    visibleCount++;
                } else {
                    item.classList.add('hide');
                }
            });

            // Show empty state if nothing matches
            if (emptyMsg) {
                emptyMsg.hidden = visibleCount > 0;
            }
        });
    });
})();


/* ==========================================================
   8. CONTACT FORM VALIDATION
   ========================================================== */
(function initFormValidation() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    const successMsg = document.getElementById('formSuccess');

    // Validation rules
    const rules = {
        name: {
            required: true,
            minLength: 3,
            message: 'Please enter your full name (min 3 characters).'
        },
        email: {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Please enter a valid email address.'
        },
        phone: {
            required: false,
            pattern: /^[\d\s\+\-\(\)]{7,20}$/,
            message: 'Please enter a valid phone number.'
        },
        subject: {
            required: true,
            minLength: 3,
            message: 'Please enter a subject.'
        },
        message: {
            required: true,
            minLength: 10,
            message: 'Please write at least 10 characters.'
        }
    };

    function showError(fieldName, message) {
        const field = form.querySelector(`#${fieldName}`);
        if (!field) return;

        const wrapper = field.closest('.form-field');
        const errorEl = form.querySelector(`[data-error="${fieldName}"]`);

        if (wrapper) {
            wrapper.classList.add('error');
            wrapper.classList.remove('success');
        }
        if (errorEl) errorEl.textContent = message;
    }

    function clearError(fieldName) {
        const field = form.querySelector(`#${fieldName}`);
        if (!field) return;

        const wrapper = field.closest('.form-field');
        const errorEl = form.querySelector(`[data-error="${fieldName}"]`);

        if (wrapper) {
            wrapper.classList.remove('error');
            if (field.value.trim()) wrapper.classList.add('success');
        }
        if (errorEl) errorEl.textContent = '';
    }

    function validateField(fieldName) {
        const field = form.querySelector(`#${fieldName}`);
        if (!field) return true;

        const value = field.value.trim();
        const rule = rules[fieldName];

        if (!rule) return true;

        // Required check
        if (rule.required && !value) {
            showError(fieldName, rule.message);
            return false;
        }

        // Skip further checks if empty and not required
        if (!value && !rule.required) {
            clearError(fieldName);
            return true;
        }

        // Pattern check
        if (rule.pattern && !rule.pattern.test(value)) {
            showError(fieldName, rule.message);
            return false;
        }

        // Min length check
        if (rule.minLength && value.length < rule.minLength) {
            showError(fieldName, rule.message);
            return false;
        }

        clearError(fieldName);
        return true;
    }

    // Live validation on blur
    Object.keys(rules).forEach(fieldName => {
        const field = form.querySelector(`#${fieldName}`);
        if (!field) return;

        field.addEventListener('blur', () => validateField(fieldName));
        field.addEventListener('input', () => {
            const wrapper = field.closest('.form-field');
            if (wrapper && wrapper.classList.contains('error')) {
                validateField(fieldName);
            }
        });
    });

    // On submit
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let allValid = true;
        Object.keys(rules).forEach(fieldName => {
            if (!validateField(fieldName)) allValid = false;
        });

        if (allValid) {
            if (successMsg) successMsg.hidden = false;

            form.reset();

            // Clear success styling after reset
            form.querySelectorAll('.form-field').forEach(w => {
                w.classList.remove('success', 'error');
            });

            // Hide success message after 5 seconds
            setTimeout(() => {
                if (successMsg) successMsg.hidden = true;
            }, 5000);
        }
    });
})();


/* ==========================================================
   9. SCROLL-TO-TOP BUTTON
   ========================================================== */
(function initScrollTop() {
    const btn = document.getElementById('scrollTop');
    if (!btn) return;

    const showAfter = 400;

    window.addEventListener('scroll', () => {
        if (window.scrollY > showAfter) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
})();


/* ==========================================================
   10. SCROLL REVEAL ANIMATION
   ========================================================== */
(function initScrollReveal() {
    // Har section aur card ko reveal class do automatically
    const targets = document.querySelectorAll(
        '.section, .service-card, .featured-card, .team-card, ' +
        '.value-card, .process-step, .portfolio-item, .timeline-item, ' +
        '.story-content, .story-visual, .contact-info, .contact-form-wrap'
    );

    if (!targets.length) return;

    targets.forEach(el => el.classList.add('reveal'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    targets.forEach(el => observer.observe(el));
})();


/* ==========================================================
   END OF FILE
   ========================================================== */