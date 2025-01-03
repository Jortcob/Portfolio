window.onload = function() {

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

    const terminal = document.getElementById("window-body");
    const closeDot = document.getElementById("close");
    const maximizeDot = document.getElementById("maximize");
    const windowDiv = document.querySelector(".window");
    const resizeButton = document.getElementById("resize");

 
// Cerrar terminal con animación
closeDot.addEventListener("click", () => {
    terminal.classList.add("hidden"); // Agrega la clase para iniciar la animación
    setTimeout(() => {
      terminal.style.display = "none"; // Esconde completamente el terminal después de la animación
    }, 500); // El tiempo coincide con la duración de la transición en CSS
  });
      
  
  // Reabrir terminal (por ejemplo, con el botón maximizar)
  maximizeDot.addEventListener("click", () => {
    terminal.style.display = "block"; // Asegúrate de que sea visible
    setTimeout(() => {
      terminal.classList.remove("hidden"); // Quita la clase para restaurar el estado original
    }, 10); // Espera un instante antes de iniciar la transición inversa
  });

// Alternar tamaño reducido
resizeButton.addEventListener("click", () => {
    windowDiv.classList.toggle("resized");
  });

  const typedElement = document.getElementById('typed-text');
    if (typedElement) {
        new Typed('#typed-text', {
            strings: ["Full-Stack Developer", "Cibersecurity Expert", "Front-End Developer", "Back-End Developer"],
            typeSpeed: 100, // Velocidad de tipeo
            backSpeed: 50,  // Velocidad al borrar
            backDelay: 1500, // Pausa antes de borrar
            loop: true // Hacer que se repita indefinidamente
        });
    }
};
