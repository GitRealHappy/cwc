---
layout: default
title: "Contact Us"
description: "Get in touch with CWC Architectural Millwork for your custom millwork project. Call, email, or visit our showroom."
---

<section class="hero-section">
    <div class="hero-content">
        <h1>Get In Touch</h1>
        <p>Ready to start your custom millwork project? We'd love to hear from you. Contact us today for a consultation and free estimate.</p>
        <div class="hero-buttons">
            <a href="tel:{{ site.phone | remove: ' ' | remove: '(' | remove: ')' | remove: '-' }}" class="btn btn-primary">Call Now</a>
            <a href="mailto:{{ site.email }}" class="btn btn-secondary">Send Email</a>
        </div>
    </div>
    <div class="hero-image">
        <img src="{{ '/assets/images/contact-hero.jpg' | relative_url }}" alt="Contact CWC Millwork">
    </div>
</section>

<section class="contact-info">
    <div class="contact-grid">
        <div class="contact-item">
            <h3>Phone</h3>
            <p><a href="tel:{{ site.phone | remove: ' ' | remove: '(' | remove: ')' | remove: '-' }}">{{ site.phone }}</a></p>
        </div>
        <div class="contact-item">
            <h3>Email</h3>
            <p><a href="mailto:{{ site.email }}">{{ site.email }}</a></p>
        </div>
        <div class="contact-item">
            <h3>Address</h3>
            <p>{{ site.address }}</p>
        </div>
        <div class="contact-item">
            <h3>Hours</h3>
            <p>Monday - Friday: 7:00 AM - 5:00 PM<br>
            Saturday: 8:00 AM - 2:00 PM<br>
            Sunday: Closed</p>
        </div>
    </div>
</section>

<section class="contact-form">
    <div class="form-container">
        <h2>Request a Quote</h2>
        <form action="#" method="POST" class="quote-form">
            <div class="form-row">
                <div class="form-group">
                    <label for="name">Name *</label>
                    <input type="text" id="name" name="name" required>
                </div>
                <div class="form-group">
                    <label for="email">Email *</label>
                    <input type="email" id="email" name="email" required>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label for="phone">Phone</label>
                    <input type="tel" id="phone" name="phone">
                </div>
                <div class="form-group">
                    <label for="project-type">Project Type</label>
                    <select id="project-type" name="project-type">
                        <option value="">Select a service</option>
                        <option value="cabinetry">Custom Cabinetry</option>
                        <option value="trim">Architectural Trim</option>
                        <option value="doors">Custom Doors</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            </div>
            <div class="form-group">
                <label for="message">Project Details *</label>
                <textarea id="message" name="message" rows="5" required placeholder="Please describe your project, timeline, and any specific requirements..."></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Send Request</button>
        </form>
    </div>
</section> 