document.addEventListener("DOMContentLoaded", function() {

    var form = document.getElementById("miFormulario");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            location.reload();
        });
    }
});


document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("keydown", function(event) {
        if (event.key === "F5") {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
});

