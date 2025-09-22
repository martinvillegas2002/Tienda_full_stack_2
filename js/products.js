// ===============================
const CATEGORIES = ["Clásico", "Deportivo", "Smartwatch"];


/*
PRODUCTS es un arreglo de objetos. Cada objeto representa un reloj.
- id: identificador único (string). Útil para el carrito y búsquedas.
- name: nombre del producto.
- price: precio en CLP (número). Puedes formatearlo al mostrarlo.
- stock: unidades disponibles (número entero >= 0).
- category: categoría a la que pertenece (debe existir en CATEGORIES).
- img: URL de la imagen del producto.
- desc: descripción corta para mostrar en tarjetas/detalle.
*/
const PRODUCTS = [
{
id: "rolx-sub",
name: "Rolex Submariner",
price: 12500000,
stock: 5,
category: "Clásico",
img: "https://picsum.photos/seed/rolx/600/400",
desc: "Icónico reloj de buceo con bisel cerámico."
},
{
id: "seiko-5",
name: "Seiko 5 Sports",
price: 350000,
stock: 20,
category: "Deportivo",
img: "https://picsum.photos/seed/seiko/600/400",
desc: "Automático, resistente y con gran relación precio/calidad."
},
{
id: "casio-ae1200",
name: "Casio AE-1200",
price: 45000,
stock: 50,
category: "Deportivo",
img: "https://picsum.photos/seed/casio/600/400",
desc: "El legendario 'Casio Royale' digital."
},
{
id: "apple-ultra",
name: "Apple Watch Ultra",
price: 899000,
stock: 8,
category: "Smartwatch",
img: "https://picsum.photos/seed/ultra/600/400",
desc: "Smartwatch premium para deporte y aventura."
},
{
id: "orient-bambino",
name: "Orient Bambino",
price: 210000,
stock: 12,
category: "Clásico",
img: "https://picsum.photos/seed/bambino/600/400",
desc: "Vestir elegante con cristal abombado."
}
];


/*
Sugerencia de uso (que ocurrirá en app.js):
- Tomar PRODUCTS y seleccionar algunos para la sección "Destacados".
- Convertir cada objeto en una tarjeta HTML y agregarlas a #featured-list.
- Actualizar #cart-count leyendo desde localStorage (carrito persistente).


Ejemplo (en app.js):


const featured = PRODUCTS.slice(0, 3); // 3 destacados
const container = document.getElementById('featured-list');
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
*/