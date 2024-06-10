function procesarFormulario() {
    nombreCompleto();
    ultimoDigito();
    calcularEdad();
}

function nombreCompleto() {
    var n1 = document.getElementById("primernombre").value;
    var n2 = document.getElementById("segundonombre").value;
    var a1 = document.getElementById("primerapellido").value;
    var a2 = document.getElementById("segundoapellido").value;
    var nombreCompleto = n1 + " " + n2 + " " + a1 + " " + a2;
    document.getElementById("nombreCompleto").value = nombreCompleto;
}

function ultimoDigito() {
    var dni = document.getElementById("dni").value;
    var ultimoDigito = dni.charAt(dni.length - 1);
    document.getElementById("ultimodigito").value = ultimoDigito;
}

function calcularEdad() {
    var fechaNacimiento = document.getElementById("fechadenacimiento").value;
    var fecha = new Date(fechaNacimiento);
    var añoNacimiento = fecha.getFullYear();
    var añoActual = new Date().getFullYear();
    var edad = añoActual - añoNacimiento;
    document.getElementById("edad").value = edad;
}
