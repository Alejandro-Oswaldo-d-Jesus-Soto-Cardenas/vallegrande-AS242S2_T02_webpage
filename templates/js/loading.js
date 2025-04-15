document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');

    // Ocultar el contenido principal inicialmente
    mainContent.classList.add('hidden');

    // Define el tiempo máximo de espera para la pantalla de carga en milisegundos (ejemplo: 5000ms = 5 segundos)
    const maxLoadTime = 5000;
    let pageLoaded = false;

    window.onload = function() {
        pageLoaded = true;
        setTimeout(() => {
            loadingScreen.classList.add('hidden'); // Ocultar la pantalla de carga
            mainContent.classList.remove('hidden'); // Mostrar el contenido principal
        }, 500); // Pequeño retraso para asegurar la transición
    };

    // Establece un tiempo de espera máximo
    setTimeout(() => {
        if (!pageLoaded) {
            loadingScreen.classList.add('hidden'); // Ocultar la pantalla de carga incluso si no se ha cargado completamente
            mainContent.classList.remove('hidden'); // Mostrar el contenido principal
            console.warn('La página tardó demasiado en cargar. Se ocultó la pantalla de carga por tiempo de espera.');
        }
    }, maxLoadTime);
});