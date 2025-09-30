// Language Management
let currentLanguage = 'ar';

// Real-time Clock removed

// Language Toggle Functionality
function toggleLanguage() {
    currentLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
    
    // Update HTML direction and language
    document.documentElement.setAttribute('dir', currentLanguage === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', currentLanguage);
    
    // Update all elements with data attributes
    document.querySelectorAll('[data-ar][data-en]').forEach(element => {
        element.textContent = element.getAttribute(`data-${currentLanguage}`);
    });
    
    // Update language toggle button
    const toggleBtn = document.getElementById('language-toggle');
    toggleBtn.textContent = currentLanguage === 'ar' ? 'EN' : 'عربي';
    
    // Social sidebar position is now handled by CSS RTL/LTR
    
    // Time update removed
    
    // Save language preference
    localStorage.setItem('preferredLanguage', currentLanguage);
}


// Initialize language from localStorage
function initializeLanguage() {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && savedLanguage !== currentLanguage) {
        toggleLanguage();
    }
}

// Initialize on page load
initializeLanguage();

// Social sidebar position is now handled by CSS RTL/LTR

// Smooth scrolling for navigation links
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

// Language toggle event listener
document.getElementById('language-toggle').addEventListener('click', toggleLanguage);

// Sound toggle functionality removed

// Advanced Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            // Add stagger effect for child elements
            const children = entry.target.querySelectorAll('.feature-card, .project-card, .achievement-card');
            children.forEach((child, index) => {
                setTimeout(() => {
                    child.classList.add('animate-in');
                }, index * 100);
            });
        }
    });
}, observerOptions);

// Enhanced scroll animations
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(section);
});

// Add smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';

// Enhanced scroll effects
let ticking = false;
function updateScrollEffects() {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    // Parallax effect for hero
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${rate * 0.5}px)`;
    }
    
    // Navbar background effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (scrolled > 100) {
            navbar.style.backgroundColor = 'rgba(13, 13, 13, 0.95)';
            navbar.style.backdropFilter = 'blur(20px)';
        } else {
            navbar.style.backgroundColor = 'rgba(13, 13, 13, 0.9)';
            navbar.style.backdropFilter = 'blur(15px)';
        }
    }
    
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(updateScrollEffects);
        ticking = true;
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const portraitFrame = document.querySelector('.portrait-frame');
    
    if (hero && portraitFrame) {
        const rate = scrolled * -0.5;
        portraitFrame.style.transform = `rotate(-2deg) translateY(${rate}px)`;
    }
});

// Hover effects for cards
document.querySelectorAll('.service-card, .lab-item, .project-card, .fact-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Button click animations
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple effect styles
const style = document.createElement('style');
style.textContent = `
    .btn-primary, .btn-secondary {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Advanced Typing Animation with Effects
function typeWriter(element, text, speed = 80) {
    let i = 0;
    element.innerHTML = '';
    element.style.visibility = 'visible';
    element.style.opacity = '1';
    element.style.transform = 'translateY(0)';
    element.classList.add('animate-in');
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            // Enhanced completion effects
            element.classList.add('typing-complete');
            element.style.textShadow = '0 0 30px rgba(0, 255, 204, 0.8)';
            element.style.transform = 'scale(1.05)';
            setTimeout(() => {
                element.style.transform = 'scale(1)';
            }, 200);
        }
    }
    
    type();
}

// Simple Page Load
window.addEventListener('load', () => {
    console.log('Website loaded successfully!');
    
    // Check if elements exist
    const titleLines = document.querySelectorAll('.title-line');
    console.log('Found title lines:', titleLines.length);
    
    if (titleLines.length === 0) {
        console.error('No title lines found!');
        return;
    }
    
    // Ensure text is visible immediately
    titleLines.forEach((line, index) => {
        console.log(`Title line ${index}:`, line.textContent);
        line.style.opacity = '1';
        line.style.visibility = 'visible';
        line.style.transform = 'translateY(0)';
        line.style.display = 'inline-block';
    });
    
    // Simple typing animation
    const titles = currentLanguage === 'ar' ? 
        ['متخصص', 'تقني', 'مدرب'] : 
        ['EXPERT', 'TECHNICAL', 'TRAINER'];
    
    titleLines.forEach((line, index) => {
        setTimeout(() => {
            typeWriter(line, titles[index], 100);
        }, index * 1000);
    });
});

// Cursor trail effect
let mouseX = 0, mouseY = 0;
let trailX = 0, trailY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateTrail() {
    trailX += (mouseX - trailX) * 0.1;
    trailY += (mouseY - trailY) * 0.1;
    
    requestAnimationFrame(animateTrail);
}

animateTrail();

// Loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(13, 13, 13, 0.9)';
    } else {
        navbar.style.backgroundColor = 'transparent';
    }
});

// Set initial navbar background to transparent
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    navbar.style.backgroundColor = 'transparent';
});

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-center .nav-links');
    
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Close menu when clicking on links
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenuToggle.contains(e.target) && !navLinks.contains(e.target)) {
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }
});

// Initialize Particles.js with performance optimization
window.addEventListener('load', function() {
    if (typeof particlesJS !== 'undefined') {
        // Check if device is mobile for performance
        const isMobile = window.innerWidth <= 768;
        const particleCount = isMobile ? 30 : 80;
        
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": particleCount, // عدد الجسيمات حسب الجهاز
                    "density": {
                        "enable": true,
                        "value_area": isMobile ? 800 : 600
                    }
                },
                "color": {
                    "value": "#00ffcc"
                },
                "shape": {
                    "type": "circle"
                },
                "opacity": {
                    "value": 0.3, // شفافية متوسطة
                    "random": true
                },
                "size": {
                    "value": 2, // حجم متوسط
                    "random": true
                },
                "line_linked": {
                    "enable": true,
                    "distance": 300, // مسافة أكبر
                    "color": "#00ffcc",
                    "opacity": 0.2, // شفافية متوسطة للخطوط
                    "width": 0.8 // خط أرفع قليلاً
                },
                "move": {
                    "enable": true,
                    "speed": 0.5, // حركة أبطأ
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "bounce"
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": false, // إيقاف التفاعل مع الماوس
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": false, // إيقاف التفاعل مع النقر
                        "mode": "push"
                    }
                },
                "modes": {
                    "grab": {
                        "distance": 200,
                        "line_linked": {
                            "opacity": 0.1 // شفافية أقل
                        }
                    },
                    "push": {
                        "particles_nb": 1
                    }
                }
            },
            "retina_detect": true
        });
    }
});

// Contact Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = {
                fullName: formData.get('fullName'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                serviceType: formData.get('serviceType'),
                projectDescription: formData.get('projectDescription')
            };
            
            // Show loading state
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'جاري الإرسال...';
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                // Show success message
                showNotification('تم إرسال طلبك بنجاح! سنتواصل معك قريباً.', 'success');
                
                // Reset form
                contactForm.reset();
                
                // Reset button
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
});

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Add notification styles
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 10000;
        max-width: 400px;
        background: linear-gradient(135deg, #111111 0%, #1a1a1a 100%);
        border: 2px solid rgba(0, 255, 204, 0.3);
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        animation: slideInRight 0.3s ease-out;
    }
    
    .notification-success {
        border-color: rgba(40, 167, 69, 0.5);
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 15px;
        padding: 20px;
        color: #ffffff;
    }
    
    .notification-content i:first-child {
        color: #00ffcc;
        font-size: 20px;
    }
    
    .notification-content span {
        flex: 1;
        font-weight: 500;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: #cccccc;
        cursor: pointer;
        padding: 5px;
        border-radius: 50%;
        transition: all 0.3s ease;
    }
    
    .notification-close:hover {
        background: rgba(255, 255, 255, 0.1);
        color: #ffffff;
    }
    
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @media (max-width: 768px) {
        .notification {
            top: 10px;
            right: 10px;
            left: 10px;
            max-width: none;
        }
    }
`;
document.head.appendChild(notificationStyles);

// Performance monitoring
const startTime = performance.now();
window.addEventListener('load', () => {
    const loadTime = performance.now() - startTime;
    console.log(`موقع م. عزام الشخصي تم تحميله بنجاح! 🚀 (${Math.round(loadTime)}ms)`);
    console.log('M. Azzam Portfolio Website Loaded Successfully! 🚀');
});

// Enhanced error handling
window.addEventListener('error', (e) => {
    console.error('خطأ في الموقع:', e.error);
});

// Service Worker registration for better performance
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('Service Worker registered successfully');
            })
            .catch(error => {
                console.log('Service Worker registration failed');
            });
    });
}
