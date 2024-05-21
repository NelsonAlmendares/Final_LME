function checkWidth1() {
    var element1 = document.getElementById('responsive-card-main');
    if (window.innerWidth <= 992) {
        element1.classList.remove('col-md-5');
        element1.classList.add('col-md-12');
    } else {
        element1.classList.remove('col-md-12');
        element1.classList.add('col-md-5');
    }
}
window.onload = checkWidth1;
window.onresize = checkWidth1;