const registrosDeOpiniones = [];
const obtenerNombreCompleto = (apellidos, nombres) => {
    return apellidos.toUpperCase() + ", " + nombres;
}

function recuperarRegistrosDesdeSessionStorage(clave) {
    if (typeof Storage !== "undefined") {
        const registrosGuardados = sessionStorage.getItem(clave);
        if (registrosGuardados) {
            return JSON.parse(registrosGuardados);
        }
    } else {
        return [];
    }
}

function guardarEnSessionStorage(clave, valor) {
    if (typeof Storage !== "undefined") {
        sessionStorage.setItem(clave, JSON.stringify(valor));
    } else {
        return [];
    }
}

async function fetchDataFromFakeAPI() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error('Error al cargar datos desde la API');
        }

        const data = await response.json();
        registrosDeOpiniones.push(...data);
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: error.message
        });
    }
}
fetchDataFromFakeAPI();

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const submitButton = document.querySelector(".submit");
    const mensajeUsuario = document.getElementById("mensajeUsuario");
    const mensajeConsola = document.getElementById("mensajeConsola");

    submitButton.addEventListener("click", function () {
        const nombreInput = document.getElementById("nombre");
        const apellidoInput = document.getElementById("apellido");
        const emailInput = document.getElementById("email");
        const telefonoInput = document.getElementById("telefono");
        const mensajeInput = document.getElementById("mensaje");

        const nombre = nombreInput.value;
        const apellido = apellidoInput.value;
        const email = emailInput.value;
        const telefono = telefonoInput.value;
        const mensaje = mensajeInput.value;

        if (nombre === "" || apellido === "" || email === "" || telefono === "") {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor, complete todos los campos obligatorios.'
            });
        } else {
            Swal.fire({
                icon: 'success',
                title: 'Éxito',
                text: 'Gracias por contactarte ' + obtenerNombreCompleto(apellido, nombre) + '. En breve un agente se comunicará contigo.'
            });

            const registroDeOpinion = {
                nombre: obtenerNombreCompleto(apellido, nombre),
                opinion: mensaje,
                email: email,
                telefono: telefono,
            };
            registrosDeOpiniones.push(registroDeOpinion);

            guardarEnSessionStorage("registrosDeOpiniones", registrosDeOpiniones);

            const registrosRecuperados = recuperarRegistrosDesdeSessionStorage("registrosDeOpiniones");

            registrosRecuperados.forEach((registro, index) => {
                mensajeConsola.textContent = `Tu N° de Registro es: ${index + 1}`;
            });

        }
    });
});