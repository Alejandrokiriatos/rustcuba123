// --- LÓGICA PARA EL BOTÓN "VOLVER ARRIBA" ---
// Obtiene una referencia al botón por su ID
const backToTopButton = document.getElementById("back-to-top-btn");

// Solo ejecuta la lógica si el botón existe en la página actual
if (backToTopButton) {
    // Muestra u oculta el botón cuando el usuario se desplaza
    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        // Si el scroll vertical es mayor a 100px, muestra el botón
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            backToTopButton.style.display = "block";
        } else { // De lo contrario, lo oculta
            backToTopButton.style.display = "none";
        }
    }

    // Cuando se hace clic en el botón, desplaza la página al inicio
    backToTopButton.addEventListener("click", function() {
        document.body.scrollTop = 0; // Para navegadores como Safari
        document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
    });
}

// --- LÓGICA PARA SIMULAR EL ESTADO DEL SERVIDOR ---
// Se ejecuta una vez que todo el contenido del DOM ha sido cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtiene una referencia al elemento donde se muestra el estado del servidor
    const serverStatusElement = document.getElementById('server-status');
    
    // Solo ejecuta la lógica si el elemento existe en la página actual (ej: solo en index.html)
    if (serverStatusElement) {
        // Define los posibles estados y sus clases CSS asociadas
        const statuses = [
            { status: 'Online', class: 'online' },
            { status: 'Offline', class: 'offline' } 
        ];
        
        // Selecciona un estado aleatorio de la lista
        const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
        
        // Actualiza el texto y la clase CSS del elemento para reflejar el estado simulado
        serverStatusElement.textContent = randomStatus.status;
        serverStatusElement.className = randomStatus.class;
    }

    });

