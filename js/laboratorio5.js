$(document).ready(function(){
    $("#mi").click(function() {
        $('html, body').animate({
            scrollTop: $("#contenido").offset().top
        }, 300);
    });

    $("#habilidades").click(function() {
        $('html, body').animate({
            scrollTop: $("#divhabilidades").offset().top
        }, 300);
    });

    $("#portafolio").click(function() {
        $('html, body').animate({
            scrollTop: $("#divportafolio").offset().top
        }, 300);
    });

    $("#contactame").click(function() {
        $('html, body').animate({
            scrollTop: $("#divcontactame").offset().top
        }, 300);
    });
});

document.addEventListener("DOMContentLoaded", function() {

    document.querySelectorAll('.div5 img').forEach(function(img) {
        img.addEventListener('click', function(event) {
            event.preventDefault();
            var url = this.getAttribute('data-url');
            window.location.href = url;
        });
    });


    document.querySelectorAll('.div3 ul li img').forEach(img => {
        img.addEventListener('click', function() {
            const previewUrl = this.dataset.previewUrl;
            const modal = document.getElementById('modal');
            const iframe = document.createElement('iframe');
            iframe.src = previewUrl;
            iframe.width = "100%";
            iframe.height = "500px";
            modal.querySelector('.iframe-container').innerHTML = ''; 
            modal.querySelector('.iframe-container').appendChild(iframe);
            modal.style.display = "block";
        });
    });

   
    document.querySelector('.modal .close').addEventListener('click', function() {
        document.getElementById('modal').style.display = "none";
    });

  
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('modal');
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});




document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('boton4').addEventListener('click', function() {
        var nombre = document.getElementById('nombre').value;
        var email = document.getElementById('e-mail').value;
        var mensaje = document.getElementById('mensaje').value;
        var telefono = document.getElementById('telefono').value;
        var cuerpoMensaje = "Nombre: " + nombre + "%0D%0A" + "Correo: " + email + "%0D%0A" + "Teléfono: " + telefono + "%0D%0A" + "Mensaje: " + mensaje;
        var enlaceCorreo = "mailto:daysijaraa@gmail.com?subject=Nuevo mensaje de formulario&body=" + encodeURIComponent(cuerpoMensaje);
        window.location.href = enlaceCorreo;
    });
});





var lastScrollTop = 0;

window.addEventListener('scroll', function() {
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        document.querySelector('.encabezado').classList.add('hide');
    } else {
        document.querySelector('.encabezado').classList.remove('hide');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);
