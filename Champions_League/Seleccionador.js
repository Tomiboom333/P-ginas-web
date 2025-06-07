window.onload = function () {
    let elementos = document.querySelectorAll(".SelPag");
    elementos.forEach(function (elemento) {
        elemento.addEventListener("mouseover", function () {
            elemento.classList.add('opcion-seleccionada');
        });
        elemento.addEventListener("mouseout", function () {
            elemento.classList.remove('opcion-seleccionada');
        });
    });
};