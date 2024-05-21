
function checkWidth() {
    var element1 = document.getElementById('responsive-card-main');
    var element2 = document.getElementById('responsive-card');

    if (window.innerWidth <= 992) {
        if (element1.classList.contains('col-md-7')) {
            element1.classList.remove('col-md-7');
            element1.classList.add('col-md-12');
        }
        if (element2.classList.contains('col-md-5')) {
            element2.classList.remove('col-md-5');
            element2.classList.add('col-md-12');
        }
    } else {
        if (element1.classList.contains('col-md-12')) {
            element1.classList.remove('col-md-12');
            element1.classList.add('col-md-7');
        }
        if (element2.classList.contains('col-md-12')) {
            element2.classList.remove('col-md-12');
            element2.classList.add('col-md-5');
        }
    }
}

// Verificar el ancho de la ventana al cargar la página
window.onload = checkWidth;

// Verificar el ancho de la ventana al cambiar el tamaño de la ventana
window.onresize = checkWidth;
