document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const leftNav = document.getElementById('left-nav');
    
    if (mobileMenuToggle && leftNav) {
        mobileMenuToggle.addEventListener('click', function() {
            leftNav.classList.toggle('open');
            mobileMenuToggle.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!leftNav.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
                leftNav.classList.remove('open');
                mobileMenuToggle.classList.remove('active');
            }
        });
        
        // Close menu when clicking nav links (mobile)
        const navLinks = leftNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    leftNav.classList.remove('open');
                    mobileMenuToggle.classList.remove('active');
                }
            });
        });
    }
    
    // Smooth scrolling for anchor links
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
    
    // Add loading states to buttons
    document.querySelectorAll('.btn').forEach(btn => {
        if (btn.tagName === 'A' && btn.href && !btn.href.startsWith('#')) {
            btn.addEventListener('click', function(e) {
                this.style.opacity = '0.7';
                this.style.pointerEvents = 'none';
            });
        }
    });
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe service cards and other elements for animation
    document.querySelectorAll('.service-card, .hero-content, .about-content').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Handle window resize for mobile menu
window.addEventListener('resize', function() {
    const leftNav = document.getElementById('left-nav');
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    
    if (window.innerWidth > 768) {
        leftNav.classList.remove('open');
        mobileMenuToggle.classList.remove('active');
    }
});

// Add CSS for mobile menu toggle active state
const style = document.createElement('style');
style.textContent = `
    .mobile-menu-toggle.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    .mobile-menu-toggle.active span:nth-child(2) {
        opacity: 0;
    }
    .mobile-menu-toggle.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
`;
document.head.appendChild(style); 