// ===============================
// validations.js
// Valida formularios: registro, login, contacto
// Cada función se llama en su HTML respectivo (initRegisterForm, initLoginForm, initContactForm)
// ===============================


// Helper: valida correo permitido
function isValidEmail(email){
return /.+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/.test(email);
}


// Registro
function initRegisterForm(){
const form = document.getElementById('form-register');
if(!form) return;


form.addEventListener('submit', e => {
e.preventDefault();
const data = Object.fromEntries(new FormData(form));
let msg = '';


if(!isValidEmail(data.correo)) msg = 'Correo no permitido';
else if(data.password.length < 4 || data.password.length > 10) msg = 'La contraseña debe tener entre 4 y 10 caracteres';


document.getElementById('reg-hint').textContent = msg || '✔ Registro válido';
});
}


// Login
function initLoginForm(){
const form = document.getElementById('form-login');
if(!form) return;


form.addEventListener('submit', e => {
e.preventDefault();
const data = Object.fromEntries(new FormData(form));
let msg = '';


if(!isValidEmail(data.correo)) msg = 'Correo inválido';
else if(data.password.length < 4 || data.password.length > 10) msg = 'Contraseña inválida';


document.getElementById('login-hint').textContent = msg || '✔ Login válido';
});
}


// Contacto
function initContactForm(){
const form = document.getElementById('form-contact');
if(!form) return;


form.addEventListener('submit', e => {
e.preventDefault();
const data = Object.fromEntries(new FormData(form));
let msg = '';


if(!data.nombre) msg = 'El nombre es requerido';
else if(!isValidEmail(data.correo)) msg = 'Correo inválido';
else if(!data.comentario || data.comentario.length > 500) msg = 'Comentario inválido';


document.getElementById('contact-hint').textContent = msg || '✔ Mensaje enviado';
});
}