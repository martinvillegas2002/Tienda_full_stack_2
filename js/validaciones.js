// ========================
// FUNCIONES DE VALIDACIÓN
// ========================

// Valida que el correo termine en duoc.cl, profesor.duoc.cl o gmail.com
function validarCorreo(correo) {
  const regex = /^[\w.-]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/;
  return regex.test(correo);
}

// Valida el RUN chileno (7 a 9 dígitos + letra K o número, sin puntos ni guion)
function validarRun(run) {
  return /^[0-9]{7,8}[0-9kK]$/.test(run);
}

// ========================
// EVENTO: CUANDO CARGA LA PÁGINA
// ========================
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formRegistro');

  // Solo si existe el formulario en esta página
  if (form) {
    // Evento que se dispara cuando se envía el formulario
    form.addEventListener('submit', e => {
      e.preventDefault(); // Evita que se recargue la página si hay errores
      let valido = true;  // Bandera para saber si todo está correcto

      // ========================
      // VALIDACIÓN DE CADA CAMPO
      // ========================

      // RUN
      const run = document.getElementById('run').value.trim();
      if (!validarRun(run)) {
        document.getElementById('errorRun').textContent = "RUN inválido (ej: 19011022K)";
        valido = false;
      } else {
        document.getElementById('errorRun').textContent = "";
      }

      // Nombre
      const nombre = document.getElementById('nombre').value.trim();
      if (nombre.length === 0) {
        document.getElementById('errorNombre').textContent = "El nombre es obligatorio";
        valido = false;
      } else {
        document.getElementById('errorNombre').textContent = "";
      }

      // Apellidos
      const apellidos = document.getElementById('apellidos').value.trim();
      if (apellidos.length === 0) {
        document.getElementById('errorApellidos').textContent = "Los apellidos son obligatorios";
        valido = false;
      } else {
        document.getElementById('errorApellidos').textContent = "";
      }

      // Correo
      const correo = document.getElementById('correo').value.trim();
      if (!validarCorreo(correo)) {
        document.getElementById('errorCorreo').textContent = "Correo inválido (solo @duoc.cl, @profesor.duoc.cl o @gmail.com)";
        valido = false;
      } else {
        document.getElementById('errorCorreo').textContent = "";
      }

      // Dirección
      const direccion = document.getElementById('direccion').value.trim();
      if (direccion.length === 0) {
        document.getElementById('errorDireccion').textContent = "La dirección es obligatoria";
        valido = false;
      } else {
        document.getElementById('errorDireccion').textContent = "";
      }

      // Tipo de usuario
      const tipo = document.getElementById('tipo').value;
      if (tipo === "") {
        document.getElementById('errorTipo').textContent = "Debes seleccionar un tipo de usuario";
        valido = false;
      } else {
        document.getElementById('errorTipo').textContent = "";
      }

      // ========================
      // SI TODO ESTÁ CORRECTO
      // ========================
      if (valido) {
        alert("✅ Usuario registrado correctamente!");
        form.reset(); // Limpia el formulario
      }
    });
  }
});
