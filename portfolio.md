---
layout: default
title: Portfolio
description: Explore our extensive collection of custom millwork projects across various industries
permalink: /portfolio/
---

<div class="portfolio-container">
    {% include navigation.html %}
    
    <div class="content-rectangle">
        <div class="portfolio-content">
            <header class="portfolio-header">
                <h1>Our Portfolio</h1>
                <p>Discover the craftsmanship and attention to detail that defines CWC Architectural Millwork. Browse our projects by category to see how we transform spaces across diverse industries.</p>
            </header>

            <div class="category-navigation">
                <button class="category-btn active" data-category="care-facilities">
                    <span class="category-title">Care Facilities</span>
                    <span class="category-count">45+ Projects</span>
                </button>
                <button class="category-btn" data-category="hospitals">
                    <span class="category-title">Hospitals</span>
                    <span class="category-count">11+ Projects</span>
                </button>
                <button class="category-btn" data-category="gaming-facilities">
                    <span class="category-title">Gaming Facilities</span>
                    <span class="category-count">10+ Projects</span>
                </button>
                <button class="category-btn" data-category="sports-facilities">
                    <span class="category-title">Sports & Fitness</span>
                    <span class="category-count">10+ Projects</span>
                </button>
                <button class="category-btn" data-category="restaurants">
                    <span class="category-title">Restaurants</span>
                    <span class="category-count">8+ Projects</span>
                </button>
                <button class="category-btn" data-category="professional-offices">
                    <span class="category-title">Professional Offices</span>
                    <span class="category-count">6+ Projects</span>
                </button>
                <button class="category-btn" data-category="misc-projects">
                    <span class="category-title">Miscellaneous Projects</span>
                    <span class="category-count">5+ Projects</span>
                </button>
                <button class="category-btn" data-category="misc-shop">
                    <span class="category-title">Shop Photos</span>
                    <span class="category-count">3+ Projects</span>
                </button>
            </div>

            <div class="gallery-container">
                <!-- Care Facilities Gallery -->
                <div class="gallery-grid" id="care-facilities" data-category="care-facilities">
                    <!-- We'll populate these dynamically with JavaScript since Jekyll can't read directory contents -->
                    <div class="gallery-loading">
                        <h3>Loading Care Facilities Gallery...</h3>
                        <div class="loading-spinner"></div>
                    </div>
                </div>

                <!-- Hospitals Gallery -->
                <div class="gallery-grid hidden" id="hospitals" data-category="hospitals">
                    <div class="gallery-loading">
                        <h3>Loading Hospitals Gallery...</h3>
                        <div class="loading-spinner"></div>
                    </div>
                </div>

                <!-- Gaming Facilities Gallery -->
                <div class="gallery-grid hidden" id="gaming-facilities" data-category="gaming-facilities">
                    <div class="gallery-loading">
                        <h3>Loading Gaming Facilities Gallery...</h3>
                        <div class="loading-spinner"></div>
                    </div>
                </div>

                <!-- Sports & Fitness Gallery -->
                <div class="gallery-grid hidden" id="sports-facilities" data-category="sports-facilities">
                    <div class="gallery-loading">
                        <h3>Loading Sports & Fitness Gallery...</h3>
                        <div class="loading-spinner"></div>
                    </div>
                </div>

                <!-- Restaurants Gallery -->
                <div class="gallery-grid hidden" id="restaurants" data-category="restaurants">
                    <div class="coming-soon">
                        <h3>Restaurant Projects</h3>
                        <p>Gallery images coming soon</p>
                    </div>
                </div>

                <!-- Professional Offices Gallery -->
                <div class="gallery-grid hidden" id="professional-offices" data-category="professional-offices">
                    <div class="coming-soon">
                        <h3>Professional Office Projects</h3>
                        <p>Gallery images coming soon</p>
                    </div>
                </div>

                <!-- Miscellaneous Projects Gallery -->
                <div class="gallery-grid hidden" id="misc-projects" data-category="misc-projects">
                    <div class="coming-soon">
                        <h3>Miscellaneous Projects</h3>
                        <p>Gallery images coming soon</p>
                    </div>
                </div>

                <!-- Shop Photos Gallery -->
                <div class="gallery-grid hidden" id="misc-shop" data-category="misc-shop">
                    <div class="coming-soon">
                        <h3>Shop Photos</h3>
                        <p>Gallery images coming soon</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Lightbox for full-size image viewing -->
<div id="lightbox" class="lightbox hidden">
    <div class="lightbox-content">
        <span class="lightbox-close" onclick="closeLightbox()">&times;</span>
        <img id="lightbox-image" src="" alt="">
        <div class="lightbox-caption" id="lightbox-caption"></div>
        <div class="lightbox-nav">
            <button class="lightbox-prev" onclick="prevImage()">&#8249;</button>
            <button class="lightbox-next" onclick="nextImage()">&#8250;</button>
        </div>
    </div>
</div> 