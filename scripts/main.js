//DEFINO FUNCIONES
const obtenerNombreCompleto=(apellidos,nombres) =>{
    return apellidos.toUpperCase() + ", " + nombres;
} 

const obtenerRegistroCompleto=(apellido,nombre,opinion) => {
    return "El usuario: " + apellido + ", " + nombre + " dejó la siguiente opinión: " + opinion;
}

const obtenerRegistroAnonimo=(opinion)=>{
    return "Usuario Anónimo dejó la siguiente opinión: "+ opinion;
}

const obtenerServicio=(apellido,nombre,email,telefono)=>{
    return "El usuario: " + apellido + ", " + nombre + " con email: " + email + " y telefono: " + telefono + " necesita servicio al cliente.";
}
//DEFINO VARIABLES

let nombre= "";
let apellido= "";
let opinion= "";
let telefono;
let email= "";
let registro= "";

//BODY
alert("Bienvenidos a la sección contacto de GREEN Sj.");

do {
    nombre = prompt("¿Como es tu nombre?");
    apellido = prompt("¿Como es tu apellido?");
} 
while (nombre === "" && apellido === "");
do {ingreso = prompt("Si desea contactarse con servicio introduzca SERVICIO. Si desea dar una opinión introduzca OPINION. De lo contrario escriba salir y sera redirigido hacia el Inicio de GREEN SJ.");} 
while (ingreso.toUpperCase() !== "SERVICIO" && ingreso.toUpperCase() !== "OPINION" && ingreso.toUpperCase() !== "SALIR");
if (ingreso.toUpperCase() === "SERVICIO") {
    do {
        email = prompt("Introduce tu correo electrónico:");
        telefono = parseFloat(prompt("Y por último, permítenos tu número de teléfono:"));
    }
    while (email === "" && telefono === "");
    alert("¡Gracias por contactarte " + obtenerNombreCompleto(apellido, nombre) + " con GREEN SJ! En breve, un agente se comunicará contigo.");
    console.log(obtenerServicio(apellido,nombre,email,telefono));
    alert("Ahora serás redirigido a la página de Inicio de GREEN SJ.");
    window.location.href = "../index.html";
} 
else if (ingreso.toUpperCase() === "OPINION") {
    do {opinion = prompt("Deja tu opinión:");} 
    while (opinion === "");
    registro = prompt("¿Quieres que tu opinión sea Anónima? (SI/NO)");
    if (registro && registro.toUpperCase() === "SI") {
        alert("¡Gracias por aportar tu opinión sobre GREEN SJ!");
        console.log(obtenerRegistroAnonimo(opinion));
    } 
    else {
        alert("¡Gracias por aportar tu opinión " + obtenerNombreCompleto(apellido, nombre) + " sobre GREEN SJ!");
        console.log(obtenerRegistroCompleto(apellido, nombre, opinion));
    }
    alert("Ahora serás redirigido a la página de Inicio de GREEN SJ.");
    window.location.href = "../index.html";
}
else if (ingreso.toUpperCase() === "SALIR") {
    window.location.href = "../index.html";
}





    




