// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling
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

// Skill bar animation on scroll
const observerOptions = {
    threshold: 0.3
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach(bar => {
                const progress = bar.getAttribute('data-progress');
                setTimeout(() => {
                    bar.style.width = progress + '%';
                }, 200);
            });
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    observer.observe(skillsSection);
}

// Form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message. I will get back to you shortly.');
    contactForm.reset();
});

// Timeline animation
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.timeline-item').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = `all 0.6s ease ${index * 0.2}s`;
    timelineObserver.observe(item);
});

// Projects animation
const projectsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.project-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.6s ease ${index * 0.15}s`;
    projectsObserver.observe(card);
});

// Language dropdown toggle
function toggleDropdown() {
    const menu = document.getElementById("lang-menu");
    menu.style.display = menu.style.display === "none" ? "block" : "none";
}

// ===== MODAL FUNCTIONALITY STARTS HERE =====

// Social Media Icons (SVG)
const socialIcons = {
    youtube: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
    instagram: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>',
    medium: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>',
    github: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
    linkedin: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
    website: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm9.5 12c0 1.232-.244 2.407-.673 3.484l-3.218-8.814C18.604 7.789 19.5 9.764 19.5 12zM12 13.5c-.605 0-1.184-.077-1.732-.219l1.839-5.345 1.884 5.162c.012.03.027.057.041.085-.658.2-1.354.317-2.032.317zM4.5 12c0-1.236.244-2.41.673-3.488l3.218 8.816C5.396 16.211 4.5 14.236 4.5 12zm7.5 7.5c-.758 0-1.491-.102-2.188-.287l2.321-6.746 2.378 6.514c.016.038.032.073.05.107-.829.27-1.714.412-2.561.412z"/></svg>'
};

// Variable to track current project
let currentProjectId = null;

// Project Modal Data
const projectsData = {
    1: {
        category: "E-Commerce",
        title: "Global Marketplace Application",
        description: "Scalable e-commerce platform with advanced search capabilities, payment integration, and inventory management. Supports over 100,000 daily transactions.",
        fullDescription: "A comprehensive e-commerce solution built to handle high-traffic scenarios with advanced features including real-time inventory tracking, multi-currency support, and intelligent product recommendations. The platform integrates with major payment gateways and provides detailed analytics for business owners.",
        image: "assets/img/project1.jpg",
        images: [
            "assets/img/project1.jpg",
            "assets/img/project1-1.jpg",
            "assets/img/project1-2.jpg",
            "assets/img/project1-3.jpg",
            "assets/img/project1-4.jpg"
        ],
        details: {
            "Technology": "React, Node.js, MongoDB, Redis",
            "Duration": "6 months",
            "Team Size": "8 developers",
            "Status": "Live & Maintained"
        },
        links: {
            youtube: "https://youtube.com",
            instagram: "https://instagram.com",
            medium: "https://medium.com",
            github: "https://github.com"
        }
    },
    2: {
        category: "Healthcare",
        title: "Medical Records System",
        description: "HIPAA-compliant electronic health records system with secure data encryption, appointment scheduling, and telemedicine integration.",
        fullDescription: "An enterprise-grade healthcare management system designed with security and privacy at its core. Features include patient portal, appointment scheduling, prescription management, and integration with laboratory systems.",
        image: "assets/img/project2.jpg",
        images: [
            "assets/img/project2.jpg",
            "assets/img/project2-1.jpg",
            "assets/img/project2-2.jpg",
            "assets/img/project2-3.jpg"
        ],
        details: {
            "Technology": "Vue.js, Python Django, PostgreSQL",
            "Duration": "8 months",
            "Team Size": "10 developers",
            "Status": "In Production"
        },
        links: {
            youtube: "https://youtube.com",
            medium: "https://medium.com",
            website: "https://example.com"
        }
    },
    3: {
        category: "Business Intelligence",
        title: "Analytics Dashboard Suite",
        description: "Real-time data visualization platform with customizable widgets, automated reports, and predictive analytics powered by machine learning.",
        fullDescription: "A powerful analytics platform that transforms raw data into actionable insights. Features real-time data processing, customizable dashboards, automated reporting, and machine learning-powered predictions for business forecasting.",
        image: "assets/img/project3.jpg",
        images: [
            "assets/img/project3.jpg",
            "assets/img/project3-1.jpg",
            "assets/img/project3-2.jpg",
            "assets/img/project3-3.jpg",
            "assets/img/project3-4.jpg",
            "assets/img/project3-5.jpg"
        ],
        details: {
            "Technology": "Angular, FastAPI, ClickHouse, TensorFlow",
            "Duration": "10 months",
            "Team Size": "12 developers",
            "Status": "Active Development"
        },
        links: {
            youtube: "https://youtube.com",
            instagram: "https://instagram.com",
            linkedin: "https://linkedin.com",
            website: "https://example.com"
        }
    }
};

// Open Modal Function
function openModal(projectId) {
    const modal = document.getElementById('projectModal');
    const project = projectsData[projectId];
    
    if (!project) return;
    
    currentProjectId = projectId;
    
    // Populate modal content
    document.getElementById('modalCategory').textContent = project.category;
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalDescription').textContent = project.fullDescription;
    document.getElementById('modalImage').src = project.images[0];
    document.getElementById('modalImage').alt = project.title;
    
    // Populate showcase gallery
    const showcaseGallery = document.getElementById('showcaseGallery');
    showcaseGallery.innerHTML = '';
    project.images.forEach((img, index) => {
        const showcaseItem = document.createElement('div');
        showcaseItem.className = 'showcase-item' + (index === 0 ? ' active' : '');
        showcaseItem.onclick = () => changeMainImage(img, showcaseItem);
        showcaseItem.innerHTML = `<img src="${img}" alt="${project.title} ${index + 1}">`;
        showcaseGallery.appendChild(showcaseItem);
    });
    
    // Populate details
    const detailsList = document.getElementById('modalDetailsList');
    detailsList.innerHTML = '';
    for (const [label, value] of Object.entries(project.details)) {
        detailsList.innerHTML += `
            <div class="modal-detail-item">
                <div class="modal-detail-label">${label}:</div>
                <div class="modal-detail-value">${value}</div>
            </div>
        `;
    }
    
    // Populate social links
    const socialLinks = document.getElementById('modalSocialLinks');
    socialLinks.innerHTML = '';
    for (const [platform, url] of Object.entries(project.links)) {
        const icon = socialIcons[platform] || socialIcons.website;
        socialLinks.innerHTML += `
            <a href="${url}" class="social-link" target="_blank" rel="noopener noreferrer">
                ${icon}
                ${platform.charAt(0).toUpperCase() + platform.slice(1)}
            </a>
        `;
    }
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Change Main Image Function
function changeMainImage(imageSrc, clickedItem) {
    const mainImage = document.getElementById('modalImage');
    mainImage.style.opacity = '0';
    
    setTimeout(() => {
        mainImage.src = imageSrc;
        mainImage.style.opacity = '1';
    }, 200);
    
    // Update active state
    document.querySelectorAll('.showcase-item').forEach(item => {
        item.classList.remove('active');
    });
    clickedItem.classList.add('active');
}

// Scroll Showcase Gallery
function scrollShowcase(direction) {
    const gallery = document.getElementById('showcaseGallery');
    const scrollAmount = 140; // width of item (120px) + gap (20px)
    
    if (direction === 'prev') {
        gallery.scrollLeft -= scrollAmount;
    } else {
        gallery.scrollLeft += scrollAmount;
    }
}

// Close Modal Function
function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Update project cards to use the modal
document.querySelectorAll('.project-card').forEach((card, index) => {
    const viewDetailsBtn = card.querySelector('.project-link');
    if (viewDetailsBtn) {
        viewDetailsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(index + 1);
        });
    }
});



// Update ESC key handler to close both modals
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
        closeBlogModal();
    }
});


// Carousel Scrolling Function
function scrollProjects(direction) {
    const carousel = document.getElementById('projectsCarousel');
    const scrollAmount = 350 + 20; // width kartu + gap

    if (direction === 'right') {
        carousel.scrollLeft += scrollAmount;
    } else {
        carousel.scrollLeft -= scrollAmount;
    }
}

// Blog Carousel Scrolling Function
function scrollBlog(direction) {
    const carousel = document.getElementById('blogCarousel');
    const cardWidth = carousel.querySelector('.blog-card').offsetWidth;
    const gap = 32; // 2rem gap
    const scrollAmount = cardWidth + gap;

    if (direction === 'right') {
        carousel.scrollLeft += scrollAmount;
    } else {
        carousel.scrollLeft -= scrollAmount;
    }
}

// Optional: Auto-hide buttons at scroll limits
function updateBlogCarouselButtons() {
    const carousel = document.getElementById('blogCarousel');
    const leftBtn = document.querySelector('.blog-carousel-btn.left');
    const rightBtn = document.querySelector('.blog-carousel-btn.right');
    
    if (carousel.scrollLeft <= 0) {
        leftBtn.style.opacity = '0.3';
    } else {
        leftBtn.style.opacity = '1';
    }
    
    if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth - 10) {
        rightBtn.style.opacity = '0.3';
    } else {
        rightBtn.style.opacity = '1';
    }
}

// Add scroll listener for button visibility
document.getElementById('blogCarousel')?.addEventListener('scroll', updateBlogCarouselButtons);

// Initialize button states
document.addEventListener('DOMContentLoaded', updateBlogCarouselButtons);


function toggleUserMenu() {
    let menu = document.getElementById("userMenu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

document.addEventListener("click", function(e) {
    const menu = document.getElementById("userMenu");
    const icon = document.querySelector(".user-icon");

    if (!icon.contains(e.target) && !menu.contains(e.target)) {
        menu.style.display = "none";
    }
});

