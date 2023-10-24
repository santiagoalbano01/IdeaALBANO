//DEFINO FUNCIONES

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
/*const obtenerRegistroCompleto = (apellido, nombre, opinion) => {
    return "El usuario: " + apellido + ", " + nombre + " dejó la siguiente opinión: " + opinion;
}

const obtenerRegistroAnonimo = (opinion) => {
    return "Usuario Anónimo dejó la siguiente opinión: " + opinion;
}

const obtenerServicio = (apellido, nombre, email, telefono) => {
    return "El usuario: " + apellido + ", " + nombre + " con email: " + email + " y telefono: " + telefono + " necesita servicio al cliente.";
}*/


//DEFINO ARRAY

const registrosDeOpiniones = [];


//BODY
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
            mensajeUsuario.textContent = "Por favor, complete todos los campos obligatorios.";
        } else {
            mensajeUsuario.textContent = "Gracias por contactarte " + obtenerNombreCompleto(apellido, nombre) + ". En breve un agente se comunicara contigo.";

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
                mensajeConsola.textContent = `Registro #${index + 1}: Nombre: ${registro.nombre}, Email: ${registro.email}, Teléfono: ${registro.telefono}, Opinión: ${registro.opinion}`;
            });

        }
    });
});
/*while (continuar) {
    nombre = prompt("¿Como es tu nombre?");
    apellido = prompt("¿Como es tu apellido?");

    if (nombre === "" && apellido === "") {
        alert("Debes ingresar tanto el nombre como el apellido para continuar.");
    } else {
        console.log("Escribe ADMIN si deseas ver el registro de opiniones");

        ingreso = prompt("Si desea contactarse con servicio introduzca SERVICIO. Si desea dar una opinión introduzca OPINION. De lo contrario escriba SALIR y será redirigido hacia el Inicio de GREEN SJ.");

        if (ingreso.toUpperCase() === "SERVICIO") {
            do {
                email = prompt("Introduce tu correo electrónico:");
                telefono = parseFloat(prompt("Y por último, permítenos tu número de teléfono:"));

                if (email === "" || isNaN(telefono)) {
                    alert("Debes ingresar tanto el correo electrónico como el número de teléfono.");
                }

            } while (email === "" || isNaN(telefono));

            alert("¡Gracias por contactarte " + obtenerNombreCompleto(apellido, nombre) + " con GREEN SJ! En breve, un agente se comunicará contigo.");
            console.log(obtenerServicio(apellido, nombre, email, telefono));
            alert("Ahora serás redirigido a la página de Inicio de GREEN SJ.");
            window.location.href = "../index.html";
            continuar = false;

        } else if (ingreso.toUpperCase() === "OPINION") {
            do {
                opinion = prompt("Deja tu opinión:");
            }
            while (opinion === "");
            registro = prompt("¿Quieres que tu opinión sea Anónima? (SI/NO)");
            const registroDeOpinion = {
                nombre: obtenerNombreCompleto(apellido, nombre),
                opinion: opinion,
                anonimo: registro && registro.toUpperCase() === "SI",
            }
            registrosDeOpiniones.push(registroDeOpinion);

            if (registro && registro.toUpperCase() === "SI") {
                alert("¡Gracias por aportar tu opinión sobre GREEN SJ!");
                console.log(obtenerRegistroAnonimo(opinion));
            } else {
                alert("¡Gracias por aportar tu opinión " + registroDeOpinion.nombre + " sobre GREEN SJ!");
                console.log(registroDeOpinion);
            }

            const agregarOtraOpinion = confirm("¿Deseas agregar otra opinión?");
            if (!agregarOtraOpinion) {
                alert("Ahora serás redirigido a la página de Inicio de GREEN SJ.");
                window.location.href = "../index.html";
                continuar = false;
            }
        } else if (ingreso.toUpperCase() === "SALIR") {
            alert("Ahora serás redirigido a la página de Inicio de GREEN SJ.");
            window.location.href = "../index.html";
            continuar = false;
        } else if (ingreso.toUpperCase() === "ADMIN") {
            ingreso2 = prompt("Ingresaste como administrador.Si deseas ver todas las opiniones registradas escribe TODOS. Si deseas ver alguna opinion de un usuario en concreto escribe BUSCAR. De lo contrario escribe SALIR.")
            if (ingreso2.toUpperCase() === "TODOS") {
                console.log("Estas son todas las opiniones registradas:");
                for (let i = 0; i < registrosDeOpiniones.length; i++) {
                    console.log("Nombre: " + registrosDeOpiniones[i].nombre + "\nOpinión: " + registrosDeOpiniones[i].opinion);
                }
            }
            else if (ingreso2.toUpperCase() === "BUSCAR") {
                let nombreBuscado = prompt("Cuál es el nombre del Usuario?");
                let opinionEncontrada = registrosDeOpiniones.find(registrosDeOpiniones => registrosDeOpiniones.nombre.toUpperCase() === nombreBuscado.toUpperCase());

                if (opinionEncontrada) {
                    alert("Opinión encontrada para " + nombreBuscado + ": " + opinionEncontrada.opinion);
                }
                else {
                    alert("No se encontró ninguna opinión para " + nombreBuscado + ".");
                }
            }

        }
    }
}*/