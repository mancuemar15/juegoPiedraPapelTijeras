const OPCIONES = ["Piedra", "Papel", "Tijeras"];

let numeroVictoriasUsuario = document.getElementById("victorias-usuario");
let numeroVictoriasCpu = document.getElementById("victorias-cpu");

let jugadaUsuario = document.getElementById("jugada-usuario");
let jugadaCpu = document.getElementById("jugada-cpu");

function elegirOpcion(numeroUsuario) {

    resetearColores();

    let numeroCpu = Math.floor(0 + Math.random() * (2 - 0 + 1));

    let resultadoJugada = "Máquina:\t" + OPCIONES[numeroCpu] + "\nUsuario:\t" + OPCIONES[numeroUsuario] + "\nResultado:\t";

    jugadaCpu.innerHTML = OPCIONES[numeroCpu];
    jugadaUsuario.innerHTML = OPCIONES[numeroUsuario];

    if (numeroCpu === 0 && numeroUsuario === 2 // PIEDRA gana a TIJERAS
        || numeroCpu === 1 && numeroUsuario === 0 // PAPEL gana a PIEDRAS
        || numeroCpu === 2 && numeroUsuario === 1 // PIEDRA gana a PAPEL
    ) {
        resultadoJugada += "Pierde el usuario";
        perderJugada();
    } else if (numeroCpu === numeroUsuario) {
        resultadoJugada += "Empate";
        empatarJugada();
    } else {
        resultadoJugada += "Gana el usuario";
        ganarJugada();
    }

    console.log(resultadoJugada);

    if (numeroVictoriasUsuario.innerHTML == 3) {
        mostrarMensajeVictoria();
        mostrarBotonNuevaPartida();
    } else if (numeroVictoriasCpu.innerHTML == 3) {
        mostrarMensajeDerrota();
        mostrarBotonNuevaPartida();
    }
};

function resetearColores() {
    jugadaCpu.classList.remove("table-success", "table-danger", "table-secondary");
    jugadaUsuario.classList.remove("table-success", "table-danger", "table-secondary");
}

function perderJugada() {
    numeroVictoriasCpu.innerHTML = Number(numeroVictoriasCpu.innerHTML) + 1;
    jugadaCpu.classList.add("table-success");
    jugadaUsuario.classList.add("table-danger");
}

function empatarJugada() {
    jugadaCpu.classList.add("table-secondary");
    jugadaUsuario.classList.add("table-secondary");
}

function ganarJugada() {
    numeroVictoriasUsuario.innerHTML = Number(numeroVictoriasUsuario.innerHTML) + 1;
    jugadaCpu.classList.add("table-danger");
    jugadaUsuario.classList.add("table-success");
}

function mostrarMensajeVictoria() {
    document.getElementById("mensaje-final-partida").classList.add("p-4", "mb-2", "bg-success", "text-white", "fw-bold", "fs-1");
    document.getElementById("mensaje-final-partida").innerHTML = "¡HAS GANADO!";
}

function mostrarMensajeDerrota() {
    document.getElementById("mensaje-final-partida").classList.add("p-4", "mb-2", "bg-danger", "text-white", "fw-bold", "fs-1");
    document.getElementById("mensaje-final-partida").innerHTML = "¡HAS PERDIDO!";
}

function mostrarBotonNuevaPartida() {
    document.getElementById("piedra").classList.add("d-none");
    document.getElementById("papel").classList.add("d-none");
    document.getElementById("tijeras").classList.add("d-none");
    document.getElementById("nueva-partida").classList.remove("d-none");
}