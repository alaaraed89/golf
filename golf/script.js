// Toggle Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Smooth scroll for navigation links (only hide nav on mobile)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        // Only hide mobile nav if screen width is less than 768px
        if (window.innerWidth < 768) {
            navLinks.classList.remove('active');
        }
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact Form Handling (demo)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for reaching out! We will get back to you shortly.');
        contactForm.reset();
    });
}

// Dropdown Menu Handling
document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    dropdownToggle.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior
        dropdownMenu.classList.toggle('show'); // Toggle the dropdown menu
    });
});

// Zoom Functionality
let zoomLevel = 1;
function zoomIn() {
    zoomLevel += 0.1;
    document.body.style.transform = `scale(${zoomLevel})`;
    document.body.style.transformOrigin = "top left";
}
function zoomOut() {
    if (zoomLevel > 0.5) {
        zoomLevel -= 0.1;
        document.body.style.transform = `scale(${zoomLevel})`;
        document.body.style.transformOrigin = "top left";
    }
}

// Language Translation
function changelanguage (lang) {
    const translations = {
    en: {
        heroTitle: "Perfect Your Swing",
        heroDescription: "Experience golf like never before with unparalleled service and pristine courses.",
        aboutTitle: "About Us",
        aboutDescription: "At Hole In One, we are committed to providing an upscale golf experience. Our courses are designed to suit all skill levels, and our services are designed to ensure your time at our resort on the greens is as enjoyable and memorable as possible.",
        packagesTitle: "Golf Packages",
        fiveTee: "Five tee",
        fiveTeeDescription: "Join us for a luxury golf package with five nights full board, golf courses, and free digital coaching! Don't miss the opportunity!",
        tripleTee: "Triple tee",
        tripleTeeDescription: "Get an unforgettable triathlon tour with comfortable accommodations, premium course rounds, and a special pro shop discount!",
        recreationBreak: "Recreation break",
        recreationBreakDescription: "Get an overnight stay, a gourmet dinner, and an unparalleled golf experience with a complimentary club rental.",
        contactTitle: "Contact Us",
        contactDescription: "Have questions or want to book a session? Fill out the form below and we’ll get back to you shortly."
    },
    ar: {
        heroTitle: "حسّن ضربتك",
        heroDescription: "اختبر الجولف كما لم يحدث من قبل مع خدمة لا مثيل لها وحقول خضراء رائعة.",
        aboutTitle: "معلومات عنا",
        aboutDescription: "في Hole In One، نحن ملتزمون بتقديم تجربة جولف فاخرة. تم تصميم ملاعبنا لتناسب جميع مستويات المهارة، وخدماتنا مصممة لضمان أن تكون تجربتك في منتجعنا على الخضر ممتعة ولا تُنسى.",
        packagesTitle: "باقات الجولف",
        fiveTee: "خمسة تي",
        fiveTeeDescription: "انضم إلينا في باقة جولف فاخرة مع خمس ليالٍ شاملة الوجبات، وملاعب جولف، وتدريب رقمي مجاني! لا تفوت الفرصة!",
        tripleTee: "ثلاثة تي",
        tripleTeeDescription: "احصل على جولة ثلاثية لا تُنسى مع إقامة مريحة، وجولات في ملاعب متميزة، وخصم خاص في المتجر الاحترافي!",
        recreationBreak: "استراحة ترفيهية",
        recreationBreakDescription: "احصل على إقامة لليلة واحدة، وعشاء فاخر، وتجربة جولف لا مثيل لها مع تأجير نادي مجاني.",
        contactTitle: "اتصل بنا",
        contactDescription: "هل لديك أسئلة أو ترغب في حجز جلسة؟ املأ النموذج أدناه وسنعود إليك قريبًا."
    },
};

    document.querySelector('.hero-title').innerText= translations[lang].heroTitle;
    document.querySelector('.hero-description').innerText = translations[lang].heroDescription;
    document.querySelector('.about-title').innerText = translations[lang].aboutTitle;
    document.querySelector('.about-description').innerText = translations[lang].aboutDescription;
    document.querySelector('.packages-title').innerText = translations[lang].packagesTitle;
    document.querySelector('.five-tee').innerText = translations[lang].fiveTee;
    document.querySelector('.five-tee-description').innerText = translations[lang].fiveTeeDescription;
    document.querySelector('.triple-tee').innerText = translations[lang].tripleTee;
    document.querySelector('.triple-tee-description').innerText = translations[lang].tripleTeeDescription;
    document.querySelector('.recreation-break').innerText = translations[lang].recreationBreak;
    document.querySelector('.recreation-break-description').innerText = translations[lang].recreationBreakDescription;
    document.querySelector('.contact-title').innerText = translations[lang].contactTitle;
    document.querySelector('.contact-description').innerText = translations[lang].contactDescription;

    document.querySelector('.nav-home').innerText = lang === 'en' ? 'Home' : 'الرئيسية';
    document.querySelector('.nav-about').innerText = lang === 'en' ? 'About' : 'حول';
    document.querySelector('.nav-packages').innerText = lang === 'en' ? 'Packages' : 'الباقات';
    document.querySelector('.nav-contact').innerText = lang === 'en' ? 'Contact' : 'اتصل';
}


// إضافة هذه الدالة إلى ملف script.js
document.addEventListener('DOMContentLoaded', function() {
    // تعيين اللغة الافتراضية عند تحميل الصفحة
    changelanguage('en'); // او 'ar' لتعيين العربية كلغة افتراضية
});

