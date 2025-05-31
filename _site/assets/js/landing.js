document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('intro-video');
    
    // Ensure video plays properly
    video.play().catch(function(error) {
        console.log('Auto-play was prevented:', error);
    });
    
    // Preload home page for faster transition
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = '/home';
    document.head.appendChild(link);
});

function enterSite() {
    // Add a smooth transition effect
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(function() {
        window.location.href = '/home';
    }, 500);
}

// Handle keyboard navigation
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        enterSite();
    }
});

// Optional: Add click anywhere to enter
document.addEventListener('click', function(event) {
    // Only if clicking outside the button
    if (!event.target.closest('.enter-site-btn')) {
        enterSite();
    }
}); 