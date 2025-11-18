// Update Project Data - tambahkan array images untuk setiap project
const projectsData = {
    1: {
        category: "E-Commerce",
        title: "Global Marketplace Application",
        description: "Scalable e-commerce platform with advanced search capabilities, payment integration, and inventory management. Supports over 100,000 daily transactions.",
        fullDescription: "A comprehensive e-commerce solution built to handle high-traffic scenarios with advanced features including real-time inventory tracking, multi-currency support, and intelligent product recommendations. The platform integrates with major payment gateways and provides detailed analytics for business owners.",
        image: "assets/img/project1.jpg",
        // Tambahkan array images untuk showcase
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

// Variable to track current project
let currentProjectId = null;

// Open Modal Function (Update)
function openModal(projectId) {
    const modal = document.getElementById('projectModal');
    const project = projectsData[projectId];
    
    if (!project) return;
    
    currentProjectId = projectId;
    
    // Populate modal content
    document.getElementById('modalCategory').textContent = project.category;
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalDescription').textContent = project.fullDescription;
    document.getElementById('modalImage').src = project.images[0]; // Set first image as main
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