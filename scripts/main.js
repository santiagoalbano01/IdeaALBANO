//DEFINO FUNCIONES

const obtenerNombreCompleto = (apellidos, nombres) => {
    return apellidos.toUpperCase() + ", " + nombres;
}

const obtenerRegistroCompleto = (apellido, nombre, opinion) => {
    return "El usuario: " + apellido + ", " + nombre + " dejó la siguiente opinión: " + opinion;
}

const obtenerRegistroAnonimo = (opinion) => {
    return "Usuario Anónimo dejó la siguiente opinión: " + opinion;
}

const obtenerServicio = (apellido, nombre, email, telefono) => {
    return "El usuario: " + apellido + ", " + nombre + " con email: " + email + " y telefono: " + telefono + " necesita servicio al cliente.";
}

//DEFINO VARIABLES

let continuar = true;
let nombre = "";
let apellido = "";
let opinion = "";
let telefono;
let email = "";
let registro = "";

//DEFINO ARRAYS

const registrosDeOpiniones = [];

//BODY
alert("Bienvenidos a la sección contacto de GREEN Sj.");

while (continuar) {
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
            
        }
    }
}