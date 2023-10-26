document.addEventListener("DOMContentLoaded", function() {
    // El código dentro de esta función se ejecutará una vez que el DOM se haya cargado completamente.

    // Agregamos el evento al formulario con ID "miFormulario"
    var form = document.getElementById("miFormulario");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            location.reload();
        });
    }
});
