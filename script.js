// Function to highlight the active page
function setActivePage() {
    // Get current page name from URL
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Get all navigation links
    const navLinks = document.querySelectorAll('.header__nav a');
    
    // Remove active class from all links
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Add active class to current page link
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        // Check if this is the current page
        if (href === currentPage || 
            (currentPage === 'index.html' && href === 'index.html') ||
            (currentPage === '' && href === 'index.html') ||
            href === `./${currentPage}`) {
            link.classList.add('active');
        }
    });
}

// Run when page loads
document.addEventListener('DOMContentLoaded', setActivePage);