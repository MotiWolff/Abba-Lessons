// Add transition styles
const style = document.createElement('style');
style.textContent = `
    .page-transition {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.3s ease, transform 0.3s ease;
    }

    .page-transition.active {
        opacity: 1;
        transform: translateY(0);
    }

    .page-transition.fade-out {
        opacity: 0;
        transform: translateY(-20px);
    }

    .navbar {
        transition: transform 0.3s ease;
    }

    .navbar.hide {
        transform: translateY(-100%);
    }
`;
document.head.appendChild(style);

// Handle page transitions
function handlePageTransition() {
    // Hide navbar during transition
    const navbar = document.querySelector('.navbar');
    if (navbar) navbar.classList.add('hide');

    // Add transition class to main content
    const mainContent = document.querySelector('main');
    if (mainContent) {
        mainContent.classList.add('page-transition', 'fade-out');
    }

    // Wait for animation to complete before navigating
    setTimeout(() => {
        // Remove transition classes
        if (mainContent) {
            mainContent.classList.remove('page-transition', 'fade-out');
        }
        if (navbar) navbar.classList.remove('hide');
    }, 300);
}

// Add transition to all internal links
document.addEventListener('DOMContentLoaded', () => {
    // Add transition class to main content
    const mainContent = document.querySelector('main');
    if (mainContent) {
        mainContent.classList.add('page-transition');
        // Trigger reflow
        mainContent.offsetHeight;
        mainContent.classList.add('active');
    }

    // Add click handlers to all internal links
    document.querySelectorAll('a[href^="/"], a[href^="./"], a[href^="../"]').forEach(link => {
        link.addEventListener('click', (e) => {
            // Don't handle if it's a different domain or has a target
            if (link.hostname !== window.location.hostname || link.target) return;
            
            e.preventDefault();
            const href = link.getAttribute('href');
            
            handlePageTransition();
            
            setTimeout(() => {
                window.location.href = href;
            }, 300);
        });
    });
}); 