const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
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

// Language Translation function
function changelanguage(lang) {

    localStorage.setItem('Language', lang);
    
    const translations = {
        en: {
            navhome: "Home",
            navabout: "About",
            navPackages: "Packages",
            navFacilities: "Facilities",
            navContact: "Contact",
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
            contactDescription: "Have questions or want to book a session? Fill out the form below and we’ll get back to you shortly.",
            packagedetails: "Package details",
            explorePackages: "Explore Packages",
            pleasepress: "Please press here if you want to listen",
            golfPackages: "Golf Packages",
            fiveteep: "This package includes : \n -five nights full board in a luxury suite  \n - five rounds  \n - 18 holes one round is guaranteed at the famous Sea View Stadium  \n - a free digital training session",
            triple:"Triple tee",
            tripleteepp:"This package includes:\n Two-night stay in a double room with breakfast \nThree rounds - 18 holes\n including one round \n at the famous “Sea View” course (if available)\n Free car rental \n 20% discount for the professional store.",
            rectitle:"Recreation \n break",
            recpp:"This package includes:\n -One night stay with full breakfast \n -Dine at any of the resort's restaurants \n-Access to the stadiums \n(fees apply and excludes Seaview Stadium \n -Free club rental",
            std:"Stadiums",
            stdpp:"Our resort offers an exceptional golfing experience with three championship golf courses, where visitors can play in a stunning natural setting. Among these courses, the famous Sea View Course stands out, which is one of the best courses in the region, and features stunning sea views and breathtaking landscapes. Whether you are a professional or a beginner, our resort will suit your skills, with innovative challenges and world-class facilities that guarantee an unforgettable experience.",
            hotelshh:"Hotels and Accommodation",
            hotelspp:"Your stay at our resort hotels provides you with comfort and luxury, with rooms and suites equipped with the latest equipment and beautiful views of the stadiums and nature. Enjoy high-quality services, in addition to restaurants that offer a variety of dishes in an elegant environment. Whether for relaxation or to participate in golf tournaments, you will find everything you need for a comfortable and distinguished stay.",
            clubshh:"clubs",
            clubspp:"The clubhouses at our resort are the perfect place for all golf enthusiasts looking for a comfortable and upscale environment. Our clubs offer exceptional and supportive facilities, including dedicated relaxation and meeting spaces, as well as state-of-the-art equipment to ensure a luxurious golf experience. Whether you're looking to develop your golf skills or simply enjoy a sports day with friends, our clubs have everything you need.",
            rest:"Restaurants and Cafes",
            restpp:"Enjoy a fine dining experience in the heart of nature at our Hole in One resort! We offer a variety of restaurants that combine local and international flavours, in addition to distinctive cafes that serve fine coffee and delicious pastries. Whether you are looking for a luxurious meal or a quick break after golf, you will find a comfortable atmosphere and exceptional service.",
            shoppp:"Professional Shop",
            profshopp:"Everything a golf enthusiast needs in one place! Our Hole-in-One Resort Pro Shop offers the latest golf equipment, from high-quality clubs to stylish apparel and accessories from top brands. Whether you’re a seasoned player or a beginner, our expert team will help you choose the right gear to enhance your performance on the course.",
            act:"Activities",
            activpp:"Enjoy a complete golf experience at our resort with a floodlit practice range that allows you to improve your skills at any time, and golf lessons from professionals for all levels. Upgrade your game with digital coaching that provides accurate analysis, and enjoy the added convenience of a porter service that ensures you can move around the course with ease. Everything you need for an exceptional golf experience.",
            stadiumsmn:"stadiums",
            hotelsmn:"hotels",
            clubsmn:"clubs",
            restaurantsmn:"Restaurants and cafes",
            shopmn:"Professional shop",
            activitiesmn:"activities"


        },
        ar: {
            navhome: "الرئيسية",
            navabout: "حول",
            navPackages: "الباقات",
            navFacilities: "المرافق",
            navContact: "اتصل بنا",
            heroTitle: "حسّن ضربتك",
            heroDescription: "اختبر الجولف كما لم يحدث من قبل مع خدمة لا مثيل لها وحقول خضراء رائعة.",
            aboutTitle: "معلومات عنا",
            aboutDescription: "في Hole In One، نحن ملتزمون بتقديم تجربة جولف فاخرة. تم تصميم ملاعبنا لتناسب جميع مستويات المهارة، وخدماتنا مصممة لضمان أن تكون تجربتك في منتجعنا على الخضر ممتعة ولا تُنسى.",
            packagesTitle: "باقات الجولف",
            fiveTee:"خمس جولات",
            fiveTeeDescription: "انضم إلينا في باقة جولف فاخرة مع خمس ليالٍ شاملة الوجبات، وملاعب جولف، وتدريب رقمي مجاني! لا تفوت الفرصة!",
            tripleTee:"جولة ثلاثية",
            tripleTeeDescription: "احصل على جولة ثلاثية لا تُنسى مع إقامة مريحة، وجولات في ملاعب متميزة، وخصم خاص في المتجر الاحترافي!",
            recreationBreak: "استراحة استجمام",
            recreationBreakDescription: "احصل على إقامة لليلة واحدة، وعشاء فاخر، وتجربة جولف لا مثيل لها مع تأجير نادي مجاني.",
            contactTitle: "اتصل بنا",
            contactDescription: "هل لديك أسئلة أو ترغب في حجز جلسة؟ املأ النموذج أدناه وسنعود إليك قريبًا.",
            packagedetails: "تفاصيل الباقات",
            explorePackages: "استكشاف الباقات",
            pleasepress: "الرجاء الضغط هنا إذا كنت تريد الاستماع",
            golfPackages: "باقات الجولف",
            fiveteep: "تتضمن هذه الحزمة: \n - خمس ليالٍ إقامة كاملة في جناح فاخر \n - خمس جولات \n - 18 حفرة، جولة واحدة مضمونة في ملعب Sea View الشهير \n - جلسة تدريب رقمية مجانية",
            triple:"جولة ثلاثية",
            tripleteepp:"تشمل هذه الحزمة: إقامة ليلتين في غرفة مزدوجة مع وجبة إفطار\n ثلاث جولات - 18 حفرة\n بما في ذلك جولة واحدة\n في ملعب Sea View الشهير (إذا كان متاحًا)\n تأجير سيارة مجاني\n خصم 20٪ للمتجر الاحترافي",
            rectitle:"استراحة \n استجمام",
            recpp:"تتضمن هذه الحزمة: - إقامة ليلة واحدة مع وجبة إفطار كاملة\n - تناول الطعام في أي من مطاعم المنتجع\n - الدخول إلى الملاعب (تطبق الرسوم ولا تشمل ملعب سي فيو)\n - استئجار النادي مجانًا",
            std:"الملاعب",
            stdpp:"يقدم منتجعنا تجربة جولف استثنائية مع ثلاثة ملاعب جولف للبطولات، حيث يمكن للزوار اللعب في بيئة طبيعية خلابة. ومن بين هذه الملاعب، يبرز ملعب Sea View الشهير، والذي يعد من أفضل الملاعب في المنطقة، ويتميز بإطلالات خلابة على البحر ومناظر طبيعية خلابة. سواء كنت محترفًا أو مبتدئًا، فإن منتجعنا يناسب مهاراتك، مع تحديات مبتكرة ومرافق عالمية المستوى تضمن تجربة لا تُنسى.",
            hotelshh:"الاقامة والفنادق",
            hotelspp:"توفر لك إقامتك في فنادقنا المنتجعية الراحة والرفاهية، حيث الغرف والأجنحة المجهزة بأحدث المعدات والإطلالات الجميلة على الملاعب والطبيعة. استمتع بخدمات عالية الجودة، بالإضافة إلى المطاعم التي تقدم مجموعة متنوعة من الأطباق في أجواء أنيقة. سواء للاسترخاء أو للمشاركة في بطولات الجولف، ستجد كل ما تحتاجه لإقامة مريحة ومميزة.",
            clubshh:"النوادي",
            clubspp:"تُعد النوادي الموجودة في منتجعنا المكان المثالي لجميع عشاق الجولف الذين يبحثون عن بيئة مريحة وراقية. توفر أنديتنا مرافق استثنائية وداعمة، بما في ذلك أماكن مخصصة للاسترخاء والاجتماعات، بالإضافة إلى أحدث المعدات لضمان تجربة جولف فاخرة. سواء كنت تتطلع إلى تطوير مهاراتك في الجولف أو مجرد الاستمتاع بيوم رياضي مع الأصدقاء، فإن أنديتنا لديها كل ما تحتاجه.",
            rest:"المطاعم والمقاهي",
            restpp:"استمتع بتجربة تناول طعام فاخرة في قلب الطبيعة في منتجع هول إن ون! نقدم مجموعة متنوعة من المطاعم التي تجمع بين النكهات المحلية والعالمية، بالإضافة إلى المقاهي المميزة التي تقدم القهوة الفاخرة والمعجنات اللذيذة. سواء كنت تبحث عن وجبة فاخرة أو استراحة سريعة بعد ممارسة لعبة الجولف، فستجد أجواءً مريحة وخدمة استثنائية.",
            shoppp :"متجر المحترفين",
            profshopp:"كل ما يحتاجه عشاق الجولف في مكان واحد! يقدم متجرنا الاحترافي في Hole-in-One Resort أحدث معدات الجولف، من المضارب عالية الجودة إلى الملابس والإكسسوارات الأنيقة من أفضل العلامات التجارية. سواء كنت لاعبًا محترفًا أو مبتدئًا، سيساعدك فريق الخبراء لدينا في اختيار المعدات المناسبة لتحسين أدائك في الملعب.",
            act:"الانشطة",
            activpp:"استمتع بتجربة جولف كاملة في منتجعنا مع ملعب تدريب مضاء يسمح لك بتحسين مهاراتك في أي وقت، ودروس جولف من محترفين لجميع المستويات. قم بترقية لعبتك من خلال التدريب الرقمي الذي يوفر تحليلاً دقيقًا، واستمتع بالراحة الإضافية التي توفرها خدمة الحمال التي تضمن لك إمكانية التنقل حول الملعب بسهولة. كل ما تحتاجه لتجربة جولف استثنائية.",
            stadiumsmn:"الملاعب",
            hotelsmn:"الفنادق",
            clubsmn:"النوادي",
            restaurantsmn:"المطاعم والمقاهي",
            shopmn:"متجر المحترفين",
            activitiesmn:"الانشطة"
        }
    };

    function updateTextContent(selector, key) {
        const element = document.querySelector(selector);
        if (element) {
            element.innerText = translations[lang][key] || key;
        }
    }

    updateTextContent('.nav-home', 'navhome');
    updateTextContent('.nav-about', 'navabout');
    updateTextContent('.nav-Packages', 'navPackages');
    updateTextContent('.nav-Facilities', 'navFacilities');
    updateTextContent('.nav-Contact', 'navContact');

    updateTextContent('.hero-title', 'heroTitle');
    updateTextContent('.hero-description', 'heroDescription');
    updateTextContent('.about-title', 'aboutTitle');
    updateTextContent('.about-description', 'aboutDescription');
    updateTextContent('.packages-title', 'packagesTitle');
    updateTextContent('.five-tee', 'fiveTee');
    updateTextContent('.fiveTeeDescription', 'fiveTeeDescription');
    updateTextContent('.triple-tee', 'tripleTee');
    updateTextContent('.tripleTeeDescription', 'tripleTeeDescription');
    updateTextContent('.recreation-break', 'recreationBreak');
    updateTextContent('.recreationBreakDescription', 'recreationBreakDescription');
    updateTextContent('.contactTitle', 'contactTitle');
    updateTextContent('.contactDescription', 'contactDescription');
    updateTextContent('.package-details', 'packagedetails');
    updateTextContent('.explore-Packages', 'explorePackages');
    updateTextContent('.please-press', 'pleasepress');
    updateTextContent('.golf-Packages', 'golfPackages');
    updateTextContent('.five-teepp', 'fiveteep');
    updateTextContent('.triple', 'triple');
    updateTextContent('.triple-teepp', 'tripleteepp');
    updateTextContent('.rectitle', 'rectitle');
    updateTextContent('.recpp', 'recpp');
    updateTextContent('.std', 'std');
    updateTextContent('.stdpp', 'stdpp');
    updateTextContent('.hotelshh', 'hotelshh');
    updateTextContent('.hotelspp', 'hotelspp');
    updateTextContent('.clubshh', 'clubshh');
    updateTextContent('.clubs-pp', 'clubspp');
    updateTextContent('.rest', 'rest');
    updateTextContent('.restpp', 'restpp');
    updateTextContent('.shoppp', 'shoppp');
    updateTextContent('.profshopp', 'profshopp');
    updateTextContent('.act', 'act');
    updateTextContent('.activpp', 'activpp');
    updateTextContent('.stadiumsmn', 'stadiumsmn');
    updateTextContent('.hotelsmn', 'hotelsmn');
    updateTextContent('.clubsmn', 'clubsmn');
    updateTextContent('.restaurantsmn', 'restaurantsmn');
    updateTextContent('.shopmn', 'shopmn');
    updateTextContent('.activitiesmn', 'activitiesmn');


    
}
document.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = localStorage.getItem('Language') || 'en';
    changelanguage(savedLanguage);
});

