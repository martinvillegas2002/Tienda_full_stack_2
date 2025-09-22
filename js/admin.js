// ===============================
if(!validarRUN(run)) return 'RUN inválido (ver dígito verificador).';
if(!nombre || nombre.length>50) return 'Nombre requerido (máx. 50).';
if(!apellidos || apellidos.length>100) return 'Apellidos requeridos (máx. 100).';
if(!isAllowedEmail || !isAllowedEmail(correo) || correo.length>100) return 'Correo inválido o dominio no permitido.';
if(!direccion || direccion.length>300) return 'Dirección requerida (máx. 300).';
return '';
}


form?.addEventListener('submit', (e)=>{
e.preventDefault();
const f = new FormData(form);
const values = Object.fromEntries(f.entries());
const hint = document.getElementById('user-hint');
const err = validate(values);
if(err){ hint.textContent = '⚠️ ' + err; return; }


const data = loadLS(LS_USER);
const regionNombre = (REGIONES.find(r=>r.codigo===values.region)?.nombre) || values.region;
const payload = {
run: values.run.toUpperCase(),
nombre: values.nombre.trim(),
apellidos: values.apellidos.trim(),
correo: values.correo.trim(),
fecha: values.fecha || null,
tipo: values.tipo,
region: values.region,
regionNombre,
comuna: values.comuna,
direccion: values.direccion.trim()
};


if(editIdx >= 0){ data[editIdx] = payload; editIdx = -1; }
else { data.push(payload); }


saveLS(LS_USER, data);
hint.textContent = '✅ Usuario guardado.';
form.reset();
// reestablece selects
if(regSel){ regSel.selectedIndex = 0; fillComunas(); }
render();
});


document.getElementById('panel-usuarios')?.addEventListener('click', (e)=>{
const edit = e.target.closest('[data-edit-user]');
const del = e.target.closest('[data-del-user]');
const data = loadLS(LS_USER);
if(edit){
editIdx = Number(edit.dataset.editUser);
const u = data[editIdx];
form.elements.run.value = u.run;
form.elements.nombre.value = u.nombre;
form.elements.apellidos.value = u.apellidos;
form.elements.correo.value = u.correo;
form.elements.fecha.value = u.fecha || '';
form.elements.tipo.value = u.tipo;
form.elements.region.value = u.region;
fillComunas();
form.elements.comuna.value = u.comuna;
form.elements.direccion.value = u.direccion;
document.getElementById('user-hint').textContent = '✏️ Editando usuario…';
}
if(del){
const idx = Number(del.dataset.delUser);
data.splice(idx,1);
saveLS(LS_USER, data);
render();
}
});


render();
})();