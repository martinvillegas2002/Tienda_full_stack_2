// ===============================
saveCart(cart);
updateCartUI();
}


// Vaciar carrito
function clearCart(){
saveCart([]);
updateCartUI();
}


// Actualiza contador y listado en productos.html
function updateCartUI(){
const cart = getCart();


// Actualiza contador en el header
const countSpan = document.getElementById('cart-count');
if(countSpan){
const totalItems = cart.reduce((sum, p) => sum + p.qty, 0);
countSpan.textContent = totalItems;
}


// Actualiza listado si estamos en productos.html
const itemsDiv = document.getElementById('cart-items');
const subtotalSpan = document.getElementById('cart-subtotal');
if(itemsDiv && subtotalSpan){
if(cart.length === 0){
itemsDiv.innerHTML = '<p>Carrito vacío</p>';
subtotalSpan.textContent = '$0';
return;
}


let subtotal = 0;
itemsDiv.innerHTML = cart.map(item => {
const prod = PRODUCTS.find(p => p.id === item.id);
if(!prod) return '';
const total = prod.price * item.qty;
subtotal += total;
return `<div class="cart-item">
<span>${prod.name} (x${item.qty})</span>
<span>$${total.toLocaleString('es-CL')}</span>
<button onclick="removeFromCart('${prod.id}')">❌</button>
</div>`;
}).join('');


subtotalSpan.textContent = `$${subtotal.toLocaleString('es-CL')}`;
}
}


// Eventos: vaciar carrito con botón
const btnClear = document.getElementById('btn-clear');
if(btnClear){
btnClear.addEventListener('click', clearCart);
}


// Llamar siempre al cargar la página
updateCartUI();