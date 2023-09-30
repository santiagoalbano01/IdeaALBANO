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

//DEFINO ARRAYS Y OBJETOS

const registrosDeOpiniones = [];

registrosDeOpiniones.push({
    nombre: "Santiago",
    apellido: "Albano",
    email: "santiagoalbano09@gmail.com",
    telefono: "2645421275",
    opinion: "Epic trabajo."
});

registrosDeOpiniones.push({
    nombre: "Juan",
    apellido: "Perez",
    email: "juan@example.com",
    telefono: "351361364",
    opinion: "Excelente servicio."
});

registrosDeOpiniones.push({
    nombre: "Ana",
    apellido: "Gomez",
    email: "ana@example.com",
    telefono: "35435345234",
    opinion: "Me encanta GREEN SJ."
});

registrosDeOpiniones.push({
    nombre: "Carlos",
    apellido: "Lopez",
    email: "carlos@example.com",
    telefono: "2352356334",
    opinion: "Buen trabajo."
});

registrosDeOpiniones.push({
    nombre: "Tomas",
    apellido: "Albano",
    email: "tomasalbano01@gmail.com",
    telefono: "13414545",
    opinion: "Epic trabajo."
});

registrosDeOpiniones.push({
    nombre: "Juancito",
    apellido: "Ortiz",
    email: "juan@example.com",
    telefono: "1321341414",
    opinion: "Excelente servicio."
});

registrosDeOpiniones.push({
    nombre: "Papu",
    apellido: "Gomez",
    email: "papug@example.com",
    telefono: "9876543210",
    opinion: "Me encanta GREEN SJ."
});

registrosDeOpiniones.push({
    nombre: "German",
    apellido: "Lopez",
    email: "german@example.com",
    telefono: "2836213813",
    opinion: "Marcelo Furlong te amo"
});


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
}