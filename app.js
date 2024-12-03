window.onload = function() {

    // Manejo del menú desplegable
    var dropdownContent = document.getElementById('dropdownContent');
    var toggleButton = document.getElementById('toggleButton');

    toggleButton.addEventListener('click', function() {
        dropdownContent.classList.toggle('show-dropdown');
    });

    // Clonación de logos
    const gallery = document.querySelector('.image-gallery');
    let scrollAmount = 0;

    var logosSlide = document.querySelector(".logos-slide");
    if (logosSlide) {
        var copy = logosSlide.cloneNode(true);
        document.querySelector(".logos").appendChild(copy);
    }

    // Redirección de botones
    const aboutBtn = document.getElementById('about-btn');
    if (aboutBtn) {
        aboutBtn.addEventListener('click', function() {
            window.location.href = '/Pages/about.html';
        });
    }

    const homeBtn = document.getElementById('home-btn');
    if (homeBtn) {
        homeBtn.addEventListener('click', function() {
            window.location.href = '/Pages/index.html';
        });
    }

    const contactBtn = document.getElementById('contact-btn');
    if (contactBtn) {
        contactBtn.addEventListener('click', function() {
            window.location.href = '/Pages/contact.html';
        });
    }

    // Función para comprobar si un elemento está en el viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }

    // Añadir clase 'fade-in-visible' cuando el elemento esté en el viewport
    document.addEventListener('scroll', function() {
        const presentation = document.getElementById('presentation');
        if (isElementInViewport(presentation)) {
            presentation.classList.add('fade-in-visible');
        }
    });

    const fullPath = window.location.pathname;
    const currentPageElement = document.querySelector('.search-input-prefix span');
    if (currentPageElement) {
        let iconSrc = ""; // Sin icono por defecto
        if (fullPath.includes("about")) {
            iconSrc = "/assets/folder.png";
        } else if (fullPath.includes("contact")) {
            iconSrc = "/assets/user.png";
        }

        // Si se determina un icono, añadirlo; de lo contrario, no hacer nada
        if (iconSrc) {
            currentPageElement.innerHTML = `<img src="${iconSrc}" alt="Icon" style="width:1em; height:1em; margin-left: 5px; margin-bottom:5px">`;
        }
        
    }

};
