// Navigation Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Add scrolled class to navbar on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// FAQ Toggle
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        // Close all other open FAQs
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        
        // Toggle current FAQ
        item.classList.toggle('active');
    });
});

// Automatic slideshow for testimonials (if added later)
function setupSlideshow() {
    const slideshowContainer = document.querySelector('.testimonial-slideshow');
    if (!slideshowContainer) return;
    
    const slides = slideshowContainer.querySelectorAll('.testimonial-slide');
    let currentSlide = 0;
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${100 * (i - index)}%)`;
        });
    }
    
    // Initialize first slide
    showSlide(currentSlide);
    
    // Auto-advance slides
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 5000);
}

// Initialize slideshow if added later
document.addEventListener('DOMContentLoaded', setupSlideshow);

// Countdown timer for next event (if needed)
function setupCountdown() {
    const countdownElement = document.querySelector('.countdown');
    if (!countdownElement) return;
    
    // Set the date we're counting down to (example: June 15, 2024)
    const countdownDate = new Date('June 15, 2024 00:00:00').getTime();
    
    // Update the countdown every 1 second
    const countdownTimer = setInterval(() => {
        // Get current date and time
        const now = new Date().getTime();
        
        // Calculate the remaining time
        const distance = countdownDate - now;
        
        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Display the result
        countdownElement.innerHTML = `
            <div class="countdown-item">
                <span class="countdown-number">${days}</span>
                <span class="countdown-label">Days</span>
            </div>
            <div class="countdown-item">
                <span class="countdown-number">${hours}</span>
                <span class="countdown-label">Hours</span>
            </div>
            <div class="countdown-item">
                <span class="countdown-number">${minutes}</span>
                <span class="countdown-label">Minutes</span>
            </div>
            <div class="countdown-item">
                <span class="countdown-number">${seconds}</span>
                <span class="countdown-label">Seconds</span>
            </div>
        `;
        
        // If the countdown is finished, display a message
        if (distance < 0) {
            clearInterval(countdownTimer);
            countdownElement.innerHTML = '<div class="countdown-finished">The event is live now!</div>';
        }
    }, 1000);
}

// Initialize countdown if added later
document.addEventListener('DOMContentLoaded', setupCountdown);

// Form validation for contact or registration forms (if added later)
function setupFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            let isValid = true;
            
            // Check required fields
            const requiredFields = form.querySelectorAll('[required]');
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    showError(field, 'This field is required');
                } else {
                    clearError(field);
                    
                    // Validate email format if it's an email field
                    if (field.type === 'email' && !validateEmail(field.value)) {
                        isValid = false;
                        showError(field, 'Please enter a valid email address');
                    }
                }
            });
            
            if (!isValid) {
                e.preventDefault();
            }
        });
    });
    
    function showError(field, message) {
        // Clear any existing error
        clearError(field);
        
        // Add error class to field
        field.classList.add('error-field');
        
        // Create and append error message
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.textContent = message;
        field.parentNode.appendChild(errorElement);
    }
    
    function clearError(field) {
        // Remove error class
        field.classList.remove('error-field');
        
        // Remove any existing error message
        const existingError = field.parentNode.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
    }
    
    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
}

// Initialize form validation if forms are added later
document.addEventListener('DOMContentLoaded', setupFormValidation);

// Animation on scroll (optional enhancement)
function setupScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    function checkIfInView() {
        animatedElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animated');
            }
        });
    }
    
    // Initial check
    checkIfInView();
    
    // Check on scroll
    window.addEventListener('scroll', checkIfInView);
}

// Initialize scroll animations if elements with the class are added later
document.addEventListener('DOMContentLoaded', setupScrollAnimations);

// Redirect functionality (for event links)
function setupRedirects() {
    // Example event URLs
    const eventUrls = {
        'summer-code-fest': 'https://example.com/summer-code-fest',
        'fall-hack-challenge': 'https://example.com/fall-hack-challenge',
        'winter-code-jam': 'https://example.com/winter-code-jam'
    };
    
    // Add click event listeners to event links
    document.querySelectorAll('.event-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the event name from data attribute or parent text
            const eventCard = this.closest('.event-card');
            const eventTitle = eventCard.querySelector('h3').textContent.toLowerCase().replace(/\s+/g, '-');
            
            // Redirect to the appropriate URL if it exists
            if (eventUrls[eventTitle]) {
                window.location.href = eventUrls[eventTitle];
            } else {
                // Default redirect if specific event URL is not found
                window.location.href = 'events.html';
            }
        });
    });
}

// Initialize redirects
document.addEventListener('DOMContentLoaded', setupRedirects); 