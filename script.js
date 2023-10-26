document.addEventListener("DOMContentLoaded", function() {

    var form = document.getElementById("miFormulario");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            location.reload();
        });
    }
});

<script>
document.addEventListener("DOMContentLoaded", function() {
    var logoImagen = document.querySelector(".logo-secundario");
    
    logoImagen.addEventListener("click", function() {
        // Desplaza la página hacia la parte superior (inicio de la página)
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
</script>