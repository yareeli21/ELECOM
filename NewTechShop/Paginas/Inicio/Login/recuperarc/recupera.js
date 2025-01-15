const correoRecupera = document.getElementById("correoRecupera");
const cajaCorreoRecupera = document.getElementById("crecupera");
const warningCorreoRecupera = document.getElementById("warning-recupera");
const cwrecupera = document.getElementById("cwrecupera");

function validarRecupera() {
    let errorCorreo = "";
    let entrar = false;

    if (!correoRecupera.value) {
        errorCorreo = "El correo no puede estar vacío.";
        entrar = true;
    } else if (!/^\S+@\S+\.\S+$/.test(correoRecupera.value)) {
        errorCorreo = "Correo electrónico no válido.";
        entrar = true;
    }

    if (entrar) {
        cajaCorreoRecupera.classList.add("incorrect");
        cwrecupera.classList.add("active");
        warningCorreoRecupera.innerText = errorCorreo;
        return false;
    } else {
        cajaCorreoRecupera.classList.remove("incorrect");
        cwrecupera.classList.remove("active");
        warningCorreoRecupera.innerText = "";
        alert("Se ha enviado un enlace de recuperación a tu correo.");
        return true;
    }
}

document.getElementById("BtnRecuperar").addEventListener("click", (e) => {
    if (!validarRecupera()) {
        e.preventDefault();
    }
});
