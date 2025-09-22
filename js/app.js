// ===============================
// app.js
// Funciones generales para inicializar la app
// - Poner el año actual en el footer
// - Mostrar productos destacados en el Home
// - Cargar categorías y filtros en productos.html
// ===============================


// Coloca automáticamente el año actual en el footer
const yearSpan = document.getElementById('year');
if(yearSpan) {
yearSpan.textContent = new Date().getFullYear();
}


// Pinta productos destacados en el Home (index.html)
function renderFeatured(){
const container = document.getElementById('featured-list');
if(!container) return; // si no estamos en index.html, no hace nada


const featured = PRODUCTS.slice(0,3); // toma los 3 primeros como destacados


container.innerHTML = featured.map(prod => `
<article class="card">
<img src="${prod.img}" alt="${prod.name}">
<div class="card-body">
<h3>${prod.name}</h3>
<p class="price">$${prod.price.toLocaleString('es-CL')}</p>
<a class="btn" href="detalle-producto.html?id=${prod.id}">Ver detalle</a>
</div>
</article>
`).join('');
}
renderFeatured();


// Rellena el <select> de categorías en productos.html
function renderCategories(){
const select = document.getElementById('category');
if(!select) return;


CATEGORIES.forEach(cat => {
const opt = document.createElement('option');
opt.value = cat;
opt.textContent = cat;
select.appendChild(opt);
});
}
renderCategories();