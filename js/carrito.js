let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function agregarAlCarrito(id) {
  const producto = productos.find(p => p.id === id);
  carrito.push(producto);
  localStorage.setItem('carrito', JSON.stringify(carrito));
  alert(`${producto.nombre} agregado al carrito`);
}

function mostrarCarrito() {
  const contenedor = document.getElementById('listaCarrito');
  if (!contenedor) return;
  contenedor.innerHTML = "";
  carrito.forEach(p => {
    const div = document.createElement('div');
    div.textContent = `${p.nombre} - $${p.precio}`;
    contenedor.appendChild(div);
  });
}

document.addEventListener('DOMContentLoaded', mostrarCarrito);
