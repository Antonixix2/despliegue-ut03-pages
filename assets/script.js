// boton para cambiar el tema
const boton = document.getElementById("tema");
boton.addEventListener("click", () => {
    document.body.classList.toggle("oscuro");
    boton.textContent = document.body.classList.contains("oscuro") ? "Modo claro" : "Modo oscuro";
});

// fecha de hoy en la portada
const fecha = document.getElementById("fecha");
if (fecha) {
    fecha.textContent = new Date().toLocaleDateString("es-ES");
}

// saludo del formulario de contacto
const form = document.getElementById("form");
if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const nombre = document.getElementById("nombre").value || "desconocido";
        document.getElementById("saludo").textContent = "Hola, " + nombre + "!";
    });
}
