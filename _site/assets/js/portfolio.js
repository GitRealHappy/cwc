// Portfolio functionality
class PortfolioManager {
    constructor() {
        this.currentCategory = 'care-facilities';
        this.currentImageIndex = 0;
        this.currentImages = [];
        this.galleries = {
            'care-facilities': {
                path: '/assets/images/gallery/care facilities/',
                name: 'Care Facility',
                images: []
            },
            'hospitals': {
                path: '/assets/images/gallery/hospitals/',
                name: 'Hospital',
                images: []
            },
            'gaming-facilities': {
                path: '/assets/images/gallery/gaming facilities/',
                name: 'Gaming Facility',
                images: []
            },
            'sports-facilities': {
                path: '/assets/images/gallery/sports facilities & fitness/',
                name: 'Sports & Fitness',
                images: []
            }
        };
        this.init();
    }

    init() {
        this.bindCategoryEvents();
        this.bindLightboxEvents();
        this.bindKeyboardEvents();
        this.loadGalleryImages();
    }

    async loadGalleryImages() {
        // Generate clean filename arrays for each category
        const generateFilenames = (prefix, count) => {
            return Array.from({length: count}, (_, i) => `${prefix}-${String(i + 1).padStart(2, '0')}.png`);
        };

        // Define gallery data with clean filenames
        const galleryData = {
            'care-facilities': {
                name: 'Care Facility',
                images: generateFilenames('care-facilities', 45)
            },
            'hospitals': {
                name: 'Hospital',
                images: generateFilenames('hospitals', 11)
            },
            'gaming-facilities': {
                name: 'Gaming Facility',
                images: generateFilenames('gaming-facilities', 10)
            },
            'sports-facilities': {
                name: 'Sports & Fitness',
                images: generateFilenames('sports-fitness', 10)
            }
        };

        // Load each gallery
        for (const [categoryId, data] of Object.entries(galleryData)) {
            await this.createGalleryHTML(categoryId, data);
        }

        // Initialize the first category
        this.updateCurrentImages();
    }

    async createGalleryHTML(categoryId, data) {
        const galleryContainer = document.getElementById(categoryId);
        if (!galleryContainer) return;

        // Clear loading message
        galleryContainer.innerHTML = '';

        if (data.images.length === 0) {
            galleryContainer.innerHTML = `
                <div class="coming-soon">
                    <h3>${data.name} Projects</h3>
                    <p>Gallery images coming soon</p>
                </div>
            `;
            return;
        }

        // Create gallery items
        const fragment = document.createDocumentFragment();
        
        data.images.forEach((filename, index) => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            
            const img = document.createElement('img');
            const imagePath = this.galleries[categoryId]?.path || '/assets/images/gallery/' + categoryId.replace('-', ' ') + '/';
            img.src = imagePath + filename;
            img.alt = `${data.name} Project ${index + 1}`;
            img.loading = 'lazy';
            
            // Add click handler for lightbox
            img.addEventListener('click', () => {
                this.openLightbox(img.src, img.alt);
            });
            
            // Add error handling for missing images
            img.addEventListener('error', () => {
                galleryItem.style.display = 'none';
            });
            
            galleryItem.appendChild(img);
            fragment.appendChild(galleryItem);
        });

        galleryContainer.appendChild(fragment);
    }

    bindCategoryEvents() {
        const categoryButtons = document.querySelectorAll('.category-btn');
        categoryButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const category = btn.getAttribute('data-category');
                this.switchCategory(category);
                this.updateActiveButton(btn);
            });
        });
    }

    bindLightboxEvents() {
        // Close lightbox when clicking outside the image
        document.getElementById('lightbox').addEventListener('click', (e) => {
            if (e.target.id === 'lightbox') {
                this.closeLightbox();
            }
        });
    }

    bindKeyboardEvents() {
        document.addEventListener('keydown', (e) => {
            if (document.getElementById('lightbox').classList.contains('hidden')) return;
            
            switch(e.key) {
                case 'Escape':
                    this.closeLightbox();
                    break;
                case 'ArrowLeft':
                    this.prevImage();
                    break;
                case 'ArrowRight':
                    this.nextImage();
                    break;
            }
        });
    }

    switchCategory(category) {
        // Hide all galleries
        const galleries = document.querySelectorAll('.gallery-grid');
        galleries.forEach(gallery => {
            gallery.classList.add('hidden');
        });

        // Show selected gallery
        const targetGallery = document.getElementById(category);
        if (targetGallery) {
            targetGallery.classList.remove('hidden');
            this.currentCategory = category;
            this.updateCurrentImages();
        }

        // Add smooth transition effect
        setTimeout(() => {
            targetGallery.style.opacity = '0';
            targetGallery.style.transform = 'translateY(20px)';
            
            requestAnimationFrame(() => {
                targetGallery.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                targetGallery.style.opacity = '1';
                targetGallery.style.transform = 'translateY(0)';
            });
        }, 50);
    }

    updateActiveButton(activeBtn) {
        // Remove active class from all buttons
        const buttons = document.querySelectorAll('.category-btn');
        buttons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        activeBtn.classList.add('active');
    }

    updateCurrentImages() {
        const currentGallery = document.getElementById(this.currentCategory);
        if (currentGallery) {
            this.currentImages = Array.from(currentGallery.querySelectorAll('img'));
        }
    }

    openLightbox(imageSrc, caption) {
        const lightbox = document.getElementById('lightbox');
        const lightboxImage = document.getElementById('lightbox-image');
        const lightboxCaption = document.getElementById('lightbox-caption');
        
        lightboxImage.src = imageSrc;
        lightboxCaption.textContent = caption;
        
        // Find current image index
        this.currentImageIndex = this.currentImages.findIndex(img => 
            img.src === imageSrc
        );
        
        lightbox.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        
        // Add fade-in animation
        setTimeout(() => {
            lightbox.style.opacity = '1';
        }, 10);
    }

    closeLightbox() {
        const lightbox = document.getElementById('lightbox');
        lightbox.style.opacity = '0';
        
        setTimeout(() => {
            lightbox.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }, 300);
    }

    prevImage() {
        if (this.currentImages.length === 0) return;
        
        this.currentImageIndex = this.currentImageIndex > 0 
            ? this.currentImageIndex - 1 
            : this.currentImages.length - 1;
        
        this.updateLightboxImage();
    }

    nextImage() {
        if (this.currentImages.length === 0) return;
        
        this.currentImageIndex = this.currentImageIndex < this.currentImages.length - 1 
            ? this.currentImageIndex + 1 
            : 0;
        
        this.updateLightboxImage();
    }

    updateLightboxImage() {
        const lightboxImage = document.getElementById('lightbox-image');
        const lightboxCaption = document.getElementById('lightbox-caption');
        const currentImg = this.currentImages[this.currentImageIndex];
        
        if (currentImg) {
            // Add fade transition
            lightboxImage.style.opacity = '0';
            
            setTimeout(() => {
                lightboxImage.src = currentImg.src;
                lightboxCaption.textContent = currentImg.alt;
                lightboxImage.style.opacity = '1';
            }, 150);
        }
    }
}

// Global functions for inline event handlers
function openLightbox(imageSrc, caption) {
    portfolioManager.openLightbox(imageSrc, caption);
}

function closeLightbox() {
    portfolioManager.closeLightbox();
}

function prevImage() {
    portfolioManager.prevImage();
}

function nextImage() {
    portfolioManager.nextImage();
}

// Initialize portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.portfolioManager = new PortfolioManager();
});

// Lazy loading for gallery images
function initLazyLoading() {
    const images = document.querySelectorAll('.gallery-item img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for browsers without IntersectionObserver
        images.forEach(img => {
            img.src = img.dataset.src || img.src;
        });
    }
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', initLazyLoading);

// Add smooth scroll to top when switching categories
function scrollToGallery() {
    const galleryContainer = document.querySelector('.gallery-container');
    if (galleryContainer) {
        galleryContainer.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Enhanced category switching with scroll
document.addEventListener('DOMContentLoaded', () => {
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            setTimeout(scrollToGallery, 100);
        });
    });
});

// Performance optimization: Preload next/prev images in lightbox
function preloadAdjacentImages() {
    if (!window.portfolioManager || window.portfolioManager.currentImages.length === 0) return;
    
    const currentIndex = window.portfolioManager.currentImageIndex;
    const images = window.portfolioManager.currentImages;
    
    // Preload next image
    const nextIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    const nextImg = new Image();
    nextImg.src = images[nextIndex].src;
    
    // Preload previous image
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    const prevImg = new Image();
    prevImg.src = images[prevIndex].src;
}

// Call preload when lightbox opens
document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                if (!lightbox.classList.contains('hidden')) {
                    setTimeout(preloadAdjacentImages, 500);
                }
            }
        });
    });
    
    observer.observe(lightbox, { attributes: true });
}); 