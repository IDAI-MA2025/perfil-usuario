const nombre = document.getElementById("nombre");
const ocupacion = document.getElementById("ocupacion");
const tarjeta = document.querySelector(".perfil-usuario");

let esFemenino = true;

tarjeta.addEventListener("click", () => {
  if (esFemenino) {
    nombre.textContent = "Malal Yousafzai";
    ocupacion.textContent = "Activista por la educación (masculino)";
    alert("El perfil ha sido cambiado a masculino.");
  } else {
    nombre.textContent = "Malala Yousafzai";
    ocupacion.textContent = "Activista por la educación";
    alert("El perfil ha sido cambiado a femenino.");
  }

  esFemenino = !esFemenino;
});