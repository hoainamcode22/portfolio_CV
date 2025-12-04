document.addEventListener("DOMContentLoaded", function() {
    // Typing Effect with Multiple Texts
    const typingElement = document.querySelector(".typing-effect");
    if (typingElement) {
        const texts = ["Mobile Developer", "Android Specialist", "Kotlin Expert", "UI/UX Enthusiast"];
        let textIndex = 0;
        let index = 0;
        let isDeleting = false;

        function type() {
            const currentFullText = texts[textIndex];
            let currentText = currentFullText.substring(0, index);

            typingElement.textContent = currentText;

            if (!isDeleting && index < currentFullText.length) {
                index++;
                setTimeout(type, 150);
            } else if (isDeleting && index > 0) {
                index--;
                setTimeout(type, 100);
            } else {
                isDeleting = !isDeleting;
                if (!isDeleting) {
                    textIndex = (textIndex + 1) % texts.length;
                }
                setTimeout(type, 1500);
            }
        }
        type();
    }
    
    // Enhanced Particles Effect for Hero Section - Blue Tech Theme
    (function() {
        const particlesContainer = document.getElementById('particles-js');
        if (!particlesContainer) return;
        
        const colors = [
            'rgba(37, 99, 235, 0.6)',     // Blue
            'rgba(14, 165, 233, 0.6)',    // Sky
            'rgba(10, 102, 194, 0.6)',    // Azure
            'rgba(59, 130, 246, 0.5)',    // Light Blue
            'rgba(6, 182, 212, 0.5)'      // Cyan
        ];
        
        function createParticle() {
            const particle = document.createElement('div');
            const size = Math.random() * 6 + 2;
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            particle.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background: ${color};
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                pointer-events: none;
                box-shadow: 0 0 ${size * 2}px ${color};
                animation: float ${Math.random() * 15 + 10}s ease-in-out infinite;
                opacity: 0;
            `;
            
            particlesContainer.appendChild(particle);
            
            // Fade in
            setTimeout(() => {
                particle.style.opacity = '1';
                particle.style.transition = 'opacity 1s ease-in';
            }, 10);
            
            // Remove after animation
            setTimeout(() => {
                particle.style.opacity = '0';
                setTimeout(() => particle.remove(), 1000);
            }, 14000);
        }
        
        // Create initial particles
        for (let i = 0; i < 40; i++) {
            setTimeout(() => createParticle(), i * 100);
        }
        
        // Continuously create new particles
        setInterval(createParticle, 400);
        
        // Mouse interaction
        particlesContainer.addEventListener('mousemove', (e) => {
            if (Math.random() > 0.9) {
                const particle = document.createElement('div');
                const size = Math.random() * 4 + 2;
                const color = colors[Math.floor(Math.random() * colors.length)];
                
                particle.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    background: ${color};
                    border-radius: 50%;
                    left: ${e.clientX - particlesContainer.offsetLeft}px;
                    top: ${e.clientY - particlesContainer.offsetTop}px;
                    pointer-events: none;
                    box-shadow: 0 0 ${size * 3}px ${color};
                    animation: fadeOut 1s ease-out forwards;
                `;
                
                particlesContainer.appendChild(particle);
                setTimeout(() => particle.remove(), 1000);
            }
        });
    })();
    
    // Scrolling navbar effect
    (function() {
        const topbar = document.querySelector('.topbar');
        if (!topbar) return;
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                topbar.classList.add('scrolled');
            } else {
                topbar.classList.remove('scrolled');
            }
        });
    })();
    
    // Add dynamic animations to CSS
    if (!document.getElementById('dynamic-animations')) {
        const style = document.createElement('style');
        style.id = 'dynamic-animations';
        style.textContent = `
            @keyframes float {
                0%, 100% { 
                    transform: translate(0, 0) scale(1); 
                    opacity: 0.7; 
                }
                25% { 
                    transform: translate(20px, -15px) scale(1.2); 
                    opacity: 1; 
                }
                50% { 
                    transform: translate(-10px, -30px) scale(0.8); 
                    opacity: 0.4; 
                }
                75% { 
                    transform: translate(-25px, -15px) scale(1.1); 
                    opacity: 0.9; 
                }
            }
            
            @keyframes fadeOut {
                0% { 
                    opacity: 1; 
                    transform: scale(1); 
                }
                100% { 
                    opacity: 0; 
                    transform: scale(0.5) translateY(-30px); 
                }
            }
            
            @keyframes pulse-glow {
                0%, 100% { 
                    box-shadow: 0 0 10px rgba(37, 99, 235, 0.3); 
                }
                50% { 
                    box-shadow: 0 0 25px rgba(37, 99, 235, 0.8), 0 0 40px rgba(14, 165, 233, 0.4); 
                }
            }
        `;
        document.head.appendChild(style);
    }
    const fadeElements = document.querySelectorAll(".fade-in");
    const electricTitles = document.querySelectorAll('.electric-title');

    if (fadeElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                    
                    const delay = (entry.target.dataset.delay || i % 5) * 100; 
                    entry.target.style.transitionDelay = `${delay}ms`;
                    
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target); 
                }
            });
        }, {
            threshold: 0.1 
        });

        fadeElements.forEach(el => {
            observer.observe(el);
        });
    }
    // ensure electric titles also get is-visible when intersecting
    if(electricTitles.length){
        const obs2 = new IntersectionObserver((entries)=>{
            entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('is-visible'); obs2.unobserve(e.target); } });
        },{threshold:.2});
        electricTitles.forEach(el=>obs2.observe(el));
    }
    (function(){
        const themeToggle = document.getElementById('theme-toggle');
        const body = document.body;
        if(!themeToggle) return;

      
        const themeSet = localStorage.getItem('theme_set'); 
        if (themeSet === '1') {
            const saved = localStorage.getItem('theme');
            if (saved === 'light') {
                body.classList.add('light');
                themeToggle.textContent = '☀️';
            } else {
                body.classList.remove('light');
                themeToggle.textContent = '🌙';
            }
        } else {
            body.classList.remove('light');
            themeToggle.textContent = '🌙';
        }

        themeToggle.addEventListener('click', () => {
            body.classList.toggle('light');
            const isLight = body.classList.contains('light');
            themeToggle.textContent = isLight ? '☀️' : '🌙';
            try {
                localStorage.setItem('theme', isLight ? 'light' : 'dark');
                localStorage.setItem('theme_set', '1'); 
            } catch(e){}
        });
    })();

    (function(){
        const form = document.querySelector('.contact-form form');
        let successMsg = document.getElementById('form-success-message');
        if(!form) return;

    if(!successMsg){
            successMsg = document.createElement('div');
            successMsg.id = 'form-success-message';
            successMsg.className = 'form-success';
            successMsg.style.display = 'none';
            const contactFormEl = document.querySelector('.contact-form');
            if(contactFormEl) contactFormEl.insertBefore(successMsg, contactFormEl.firstChild);
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const email = (form.querySelector('#email')||{value:''}).value.trim();
            if(!email) {
                alert('Vui lòng nhập địa chỉ email của bạn.');
                return;
            }    
            successMsg.textContent = 'Tin nhắn đã được gửi .Cảm ơn bạn đã liên hệ với Nam. Bạn vui lòng đợi Nam sẽ phản hồi lại sau.';
            successMsg.style.display = 'block';
            form.reset();

            setTimeout(() => {
                successMsg.style.display = 'none';
            }, 5000);
        });
    })();

    (function(){
        const skillsGrid = document.querySelector('.skills-grid-new');
        if(!skillsGrid) return;

        const carousel = skillsGrid.closest('.skills-carousel-3d');
        if(!carousel) return;

        const track = carousel.querySelector('.skills-track');
        if(!track) return;

        
        
        
        
        
        
        
        
        
        
        
        
        const children = Array.from(skillsGrid.children);
        children.forEach(child => track.appendChild(child));
        
        
        
        skillsGrid.remove();
        
        
        
        const trackClone = track.cloneNode(true);
        track.appendChild(trackClone);

        function computeAndStart(){
            const totalWidth = Array.from(track.children).reduce((sum, el) => sum + el.getBoundingClientRect().width + 32, 0);
            const viewport = carousel.querySelector('.skills-viewport');
            const vpWidth = viewport.getBoundingClientRect().width || window.innerWidth;

            const speed = 100;
            const duration = Math.max(20, Math.round(totalWidth / speed));

            track.style.animationDuration = `${duration}s`;
            track.classList.add('running');
        }

        let rTO = null;
        window.addEventListener('load', computeAndStart);
        window.addEventListener('resize', ()=>{ clearTimeout(rTO); rTO = setTimeout(computeAndStart, 150); });
        computeAndStart();
    })();

    // Smooth scroll with header offset for specific buttons (scroll-next, btn-more, btn-contact)
    (function(){
        function scrollToSelector(hash){
            if(!hash) return;
            const id = hash.replace('#','');
            const target = document.getElementById(id);
            if(!target) return;
            const headerHeight = document.querySelector('.topbar') ? document.querySelector('.topbar').getBoundingClientRect().height : 0;
            const top = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 12;
            window.scrollTo({ top, behavior: 'smooth' });
        }

        document.querySelectorAll('.scroll-next, .btn-more, .btn-contact').forEach(el => {
            el.addEventListener('click', function(e){
                e.preventDefault();
                const href = this.getAttribute('href');
                if(href && href.startsWith('#')) scrollToSelector(href);
            });
        });
    })();

    // Language Toggle Feature
    (function(){
        const langToggle = document.getElementById('lang-toggle');
        const langFlag = document.getElementById('lang-flag');
        if(!langToggle || !langFlag) return;

        const translations = {
            vi: {
                flag: '🇻🇳',
                typing: ['Mobile Developer', 'Android Specialist', 'Kotlin Expert', 'UI/UX Enthusiast'],
                hello: "Xin chào, tôi là",
                location: "Thủ Đức, TP HCM",
                learnMore: "Tìm hiểu thêm",
                contact: "Liên hệ",
                about: "Giới thiệu",
                skills: "Kỹ năng",
                projects: "Dự án",
                certificates: "Chứng chỉ",
                aboutTitle: "Về tôi",
                aboutDesc: "Tôi là sinh viên năm cuối ngành Công nghệ Thông tin tại Trường Đại học Giao thông Vận tải TP. Hồ Chí Minh (UTH). Với niềm đam mê mạnh mẽ về phát triển mobile, tôi nỗ lực tạo ra các ứng dụng sáng tạo mang lại giá trị thực sự không chỉ nâng cao trải nghiệm người dùng mà còn giúp doanh nghiệp phát triển và thích ứng với thời đại số.",
                fullName: "Họ và tên:",
                dob: "Ngày sinh:",
                education: "Học vấn:",
                interests: "Sở thích:",
                programming: "Lập trình",
                appDev: "Phát triển ứng dụng",
                travel: "Du lịch",
                football: "Bóng đá",
                skillsSubtitle: "Trong quá trình theo đuổi phát triển mobile, tôi đã bổ sung các kỹ năng khác để phát triển định hướng tương lai của mình.",
                projectsTitle: "DỰ ÁN",
                coffeeDesc: "Ứng dụng di động cho thương mại điện tử cà phê với chat thời gian thực và bảng điều khiển quản trị.",
                clinicDesc: "Hệ thống backend cho quản lý lịch hẹn phòng khám sử dụng Spring Boot, MySQL, JWT và RESTful APIs.",
                pharmacyDesc: "Đang phát triển hệ thống trực tuyến cho Nhà thuốc WG2 để quản lý bán hàng và đơn thuốc hiệu quả.",
                role: "Vai trò:",
                androidDev: "Android Developer",
                backendDev: "Backend Developer",
                viewGithub: "Xem trên GitHub",
                certsTitle: "Chứng chỉ & Khóa học",
                certsSubtitle: "Tôi hiện đang tham gia các khóa học nâng cao trên Udemy để phát triển kỹ năng về Phát triển Mobile (Android, Kotlin) và các công nghệ hiện đại khác.",
                contactTitle: "LIÊN HỆ",
                contactDesc: "Tôi luôn sẵn sàng hợp tác trong các dự án thú vị, hoặc đơn giản là kết nối và học hỏi. Liên hệ với tôi qua thông tin bên dưới 👇",
                firstName: "Tên",
                email: "Địa chỉ Email",
                subject: "Chủ đề",
                message: "Tin nhắn",
                send: "Gửi",
                enrolled: "Udemy • Đã đăng ký",
                viewCourse: "Xem khóa học"
            },
            en: {
                flag: '🇬🇧',
                typing: ['Mobile Developer', 'Android Specialist', 'Kotlin Expert', 'UI/UX Enthusiast'],
                hello: "Hello, I'm",
                location: "Thu Duc, Ho Chi Minh City",
                learnMore: "Learn more",
                contact: "Contact",
                about: "ABOUT",
                skills: "SKILLS",
                projects: "PROJECTS",
                certificates: "CERTIFICATES",
                aboutTitle: "About Me",
                aboutDesc: "I am a final-year Information Technology student at the University of Transport and Communications in Ho Chi Minh City (UTH). With a strong passion for mobile development, I strive to create innovative applications that deliver real value not only enhancing user experiences but also helping businesses grow and adapt to the digital age.",
                fullName: "Full Name:",
                dob: "Date of Birth:",
                education: "Education:",
                interests: "Interests:",
                programming: "Programming",
                appDev: "App Development",
                travel: "Travel",
                football: "Football",
                skillsSubtitle: "During my pursuit of mobile development, I have supplemented with other skills to develop my future direction.",
                projectsTitle: "PROJECTS",
                coffeeDesc: "A mobile app for coffee e-commerce with real-time chat and admin dashboard.",
                clinicDesc: "Backend system for clinic appointment management using Spring Boot, MySQL, JWT, and RESTful APIs.",
                pharmacyDesc: "Developing an online system for WG2 Pharmacy to manage product sales and prescriptions efficiently.",
                role: "Role:",
                androidDev: "Android Developer",
                backendDev: "Backend Developer",
                viewGithub: "View on GitHub",
                certsTitle: "Certificates & Courses",
                certsSubtitle: "I am currently taking advanced courses on Udemy to develop my skills in Mobile Development (Android, Kotlin) and other modern technologies.",
                contactTitle: "CONTACT",
                contactDesc: "I am always ready to cooperate on interesting projects, or simply connect and learn. Contact me via the information below 👇",
                firstName: "First Name",
                email: "Email Address",
                subject: "Subject",
                message: "Message",
                send: "Send",
                enrolled: "Udemy • Enrolled",
                viewCourse: "View Course"
            }
        };

        let currentLang = localStorage.getItem('language') || 'en';

        function applyTranslations(lang) {
            const t = translations[lang];
            langFlag.textContent = t.flag;
            
            // Update navigation
            document.querySelectorAll('.nav a').forEach((link, index) => {
                const keys = ['about', 'skills', 'projects', 'certificates', 'contact'];
                if (index < keys.length) {
                    link.textContent = t[keys[index]].toUpperCase();
                }
            });

            // Update hero section
            const nameLine = document.querySelector('.name-line');
            if (nameLine) nameLine.textContent = t.hello;

            const metaBadges = document.querySelectorAll('.meta-badge');
            if (metaBadges[0]) {
                metaBadges[0].innerHTML = `<i class="fas fa-map-marker-alt"></i> ${t.location}`;
            }

            const btnMore = document.querySelector('.btn-more');
            if (btnMore) btnMore.textContent = t.learnMore;
            
            const btnContact = document.querySelector('.btn-contact');
            if (btnContact) btnContact.textContent = t.contact;

            // Update About section
            const aboutParagraph = document.querySelector('.about-paragraph');
            if (aboutParagraph) aboutParagraph.textContent = t.aboutDesc;

            // Update marquees
            const marqueeChunks = document.querySelectorAll('.marquee-chunk');
            marqueeChunks.forEach((chunk, index) => {
                if (index < 3) chunk.textContent = t.skillsSubtitle;
                if (index >= 3 && index < 6) chunk.textContent = t.certsSubtitle;
            });

            // Update project descriptions
            const projectDescs = document.querySelectorAll('.project-desc');
            if (projectDescs[0]) projectDescs[0].textContent = t.coffeeDesc;
            if (projectDescs[1]) projectDescs[1].textContent = t.clinicDesc;
            if (projectDescs[2]) projectDescs[2].textContent = t.pharmacyDesc;

            const roleMetas = document.querySelectorAll('.project-meta');
            roleMetas.forEach(meta => {
                if (meta.textContent.includes('Android')) {
                    meta.textContent = `${t.role} ${t.androidDev}`;
                } else {
                    meta.textContent = `${t.role} ${t.backendDev}`;
                }
            });

            document.querySelectorAll('.link-btn').forEach(btn => {
                btn.textContent = t.viewGithub;
            });

            // Update contact section
            const contactDesc = document.querySelector('.contact-info p');
            if (contactDesc) contactDesc.textContent = t.contactDesc;

            const formInputs = document.querySelectorAll('.form-input');
            if (formInputs[0]) formInputs[0].placeholder = t.firstName;
            if (formInputs[1]) formInputs[1].placeholder = t.email;
            if (formInputs[2]) formInputs[2].placeholder = t.subject;
            if (formInputs[3]) formInputs[3].placeholder = t.message;

            const btnSubmit = document.querySelector('.btn-submit');
            if (btnSubmit) btnSubmit.textContent = t.send;
        }

        // Initialize with saved language
        applyTranslations(currentLang);

        // Toggle language on click
        langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'vi' : 'en';
            localStorage.setItem('language', currentLang);
            applyTranslations(currentLang);
        });
    })();
});