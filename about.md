---
layout: default
title: "About Us"
description: "Learn about CWC Architectural Millwork's history, team, and commitment to quality craftsmanship since 2007."
---

<section class="hero-section">
    <div class="hero-content">
        <h1>About CWC Architectural Millwork</h1>
        <p>Since 2007, we've built our reputation on precision craftsmanship, innovative design solutions, and unwavering commitment to customer satisfaction. Based in Abbotsford, BC, we serve clients across Western Canada.</p>
    </div>
    <div class="hero-image">
        <img src="{{ '/assets/images/about-hero.jpg' | relative_url }}" alt="Our Team at Work">
    </div>
</section>

<section class="content-section">
    <div class="content-grid">
        <div class="content-text">
            <h2>Our Story</h2>
            <p>{{ site.company_name }} was founded in {{ site.year_established }} with a clear vision: to create custom millwork that transforms ordinary spaces into extraordinary environments. Located in the heart of Abbotsford's manufacturing district, we've grown from a small woodworking shop into a full-service architectural millwork company while maintaining our commitment to handcrafted quality.</p>
            
            <p>Our team of skilled craftsmen combines traditional woodworking techniques with modern technology to deliver exceptional results. From custom cabinetry for healthcare facilities to intricate architectural trim for commercial spaces, every piece we create is a testament to our dedication to excellence.</p>
            
            <p>We specialize in projects for hospitals, care facilities, gaming establishments, sports facilities, restaurants, and professional offices. Our expertise in commercial millwork has made us a trusted partner for architects, contractors, and designers throughout British Columbia and beyond.</p>
        </div>
        
        <div class="content-image">
            <img src="{{ '/assets/images/workshop-detail.jpg' | relative_url }}" alt="Detailed Craftsmanship">
        </div>
    </div>
</section>

<section class="values-section">
    <h2>Our Values</h2>
    <div class="values-grid">
        <div class="value-item">
            <h3>Quality Craftsmanship</h3>
            <p>Every piece is meticulously crafted to the highest standards using premium materials and time-tested techniques that meet the demanding requirements of commercial environments.</p>
        </div>
        <div class="value-item">
            <h3>Custom Solutions</h3>
            <p>We work closely with each client to create unique, tailored solutions that perfectly match their vision, functional requirements, and regulatory standards.</p>
        </div>
        <div class="value-item">
            <h3>Timely Delivery</h3>
            <p>We understand the importance of project timelines in commercial construction and are committed to delivering exceptional work on schedule and within budget.</p>
        </div>
    </div>
</section>

<section class="team-section">
    <h2>Our Leadership Team</h2>
    <p class="section-intro">Meet the experienced professionals who lead CWC Architectural Millwork with expertise and dedication.</p>
    
    <div class="leadership-grid">
        {% for person in site.personnel limit:3 %}
        <div class="leader-card">
            <h3>{{ person.name }}</h3>
            <p class="title">{{ person.title }}</p>
            <p class="email"><a href="mailto:{{ person.email }}">{{ person.email }}</a></p>
        </div>
        {% endfor %}
    </div>
</section> 