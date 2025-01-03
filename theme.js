// Función para alternar el tema claro/oscuro
function toggleTheme() {
    const themeIcon = document.getElementById('theme-icon');
    const currentTheme = localStorage.getItem('theme');

    // Cambiar entre modos claro y oscuro con efectos de rotación y cambio de icono
    if (currentTheme === 'light') {
        document.body.classList.remove('light-mode');
        themeIcon.src = '/assets/sunny.png'; // Cambiar ícono a sol
        themeIcon.classList.remove('rotate-moon'); // Elimina la rotación de la luna
        themeIcon.classList.add('rotate-sun'); // Añade la rotación del sol
        localStorage.setItem('theme', 'dark'); // Guardar la preferencia de tema
        updateLineColor('#ffffff'); // Líneas blancas en modo oscuro
    } else {
        document.body.classList.add('light-mode');
        themeIcon.src = '/assets/moon.png'; // Cambiar ícono a luna
        themeIcon.classList.remove('rotate-sun'); // Elimina la rotación del sol
        themeIcon.classList.add('rotate-moon'); // Añade la rotación de la luna
        localStorage.setItem('theme', 'light'); // Guardar la preferencia de tema
        updateLineColor('#000000'); // Líneas negras en modo claro
    }
}

// Comprobar el tema guardado y aplicar el estilo correspondiente
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    if (!themeToggleButton || !themeIcon) {
        console.warn('El botón de cambio de tema no está presente en esta página.');
        return;
    }

    // Verificar el tema al cargar la página
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        themeIcon.src = '/assets/moon.png'; // Imagen de luna
        themeIcon.classList.remove('rotate-sun'); // Elimina la rotación del sol
        themeIcon.classList.add('rotate-moon'); // Añade la rotación de la luna
    } else {
        document.body.classList.remove('light-mode');
        themeIcon.src = '/assets/sunny.png'; // Imagen de sol
        themeIcon.classList.remove('rotate-moon'); // Elimina la rotación de la luna
        themeIcon.classList.add('rotate-sun'); // Añade la rotación del sol
    }

    // Añadir el evento para cambiar de tema
    themeToggleButton.addEventListener('click', toggleTheme);
});
