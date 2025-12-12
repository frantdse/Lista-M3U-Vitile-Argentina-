/**
 * Función que copia el contenido del elemento con el ID especificado al portapapeles.
 * @param {string} elementId - El ID del elemento que contiene el texto a copiar.
 * @param {HTMLElement} button - El botón que fue clickeado (para cambiar su ícono).
 */
function copyLink(elementId, button) {
    // 1. Obtener el texto (la URL)
    const linkElement = document.getElementById(elementId);
    if (!linkElement) {
        console.error("Elemento no encontrado con ID:", elementId);
        return;
    }
    const linkText = linkElement.textContent.trim();

    // 2. Usar la API del portapapeles (navigator.clipboard)
    navigator.clipboard.writeText(linkText).then(() => {
        
        // 3. Obtener los íconos de la copiadora
        const copyIcon = button.querySelector('.icon-copy');
        const checkIcon = button.querySelector('.icon-check');

        // 4. Mostrar el ícono de "copiado"
        if (copyIcon && checkIcon) {
            copyIcon.style.display = 'none';
            checkIcon.style.display = 'inline-block';
        }
        
        // 5. Revertir al ícono de "copiar" después de 1.5 segundos
        setTimeout(() => {
            if (copyIcon && checkIcon) {
                checkIcon.style.display = 'none';
                copyIcon.style.display = 'inline-block';
            }
        }, 1500);

    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
        alert("Error al copiar. Intenta copiar la URL manualmente.");
    });
}

