// ===== CHARLEE TRADE GROUP — app.js =====
// Carrito, filtros, navegación, checkout (WhatsApp / Transferencia)

// ——— NÚMERO WHATSAPP CTG (cambia por el real) ———
const WA_NUMBER = '56946246760';

// ——— ESTADO DEL CARRITO ———
let cart = JSON.parse(localStorage.getItem('ctg_cart') || '[]');

const EMOJIS = {
  ropa: '👕',
  zapatillas: '👟',
  electronica: '🎧',
  telefonia: '📲',
  accesorios: '📱'
};

// ——— INIT ———
document.addEventListener('DOMContentLoaded', () => {
  updateCartUI();
  initNavbar();
  initHamburger();
  initScrollAnimations();
});

// ——— NAVBAR SCROLL ———
function initNavbar() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.style.background = window.scrollY > 50
      ? 'rgba(10,10,10,0.98)'
      : 'rgba(10,10,10,0.95)';
  });
}

// ——— HAMBURGER ———
function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('mobileMenu');
  hamburger.addEventListener('click', () => {
    menu.classList.toggle('open');
  });
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => menu.classList.remove('open'));
  });
}

// ——— FILTRO DE CATEGORÍAS ———
function filterCategory(cat) {
  document.querySelectorAll('.filtro-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.cat === cat || (cat === 'todos' && btn.dataset.cat === 'todos'));
  });
  document.querySelectorAll('.producto-card').forEach(card => {
    const show = cat === 'todos' || card.dataset.cat === cat;
    card.classList.toggle('hidden', !show);
  });
  if (cat !== 'todos') {
    document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' });
  }
}

// ——— CARRITO: AGREGAR ———
function addToCart(nombre, precio, categoria) {
  const existing = cart.find(item => item.nombre === nombre);
  if (existing) {
    existing.cantidad++;
  } else {
    cart.push({ id: Date.now(), nombre, precio, categoria, cantidad: 1 });
  }
  saveCart();
  updateCartUI();
  showToast(`✓ ${nombre} agregado al carro`);
}

// ——— CARRITO: ACTUALIZAR CANTIDAD ———
function updateQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.cantidad += delta;
  if (item.cantidad <= 0) cart = cart.filter(i => i.id !== id);
  saveCart();
  updateCartUI();
}

// ——— CARRITO: ELIMINAR ———
function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  updateCartUI();
}

// ——— GUARDAR CARRITO ———
function saveCart() {
  localStorage.setItem('ctg_cart', JSON.stringify(cart));
}

// ——— ACTUALIZAR UI ———
function updateCartUI() {
  const total = cart.reduce((sum, i) => sum + i.precio * i.cantidad, 0);
  const totalItems = cart.reduce((sum, i) => sum + i.cantidad, 0);

  document.getElementById('cartCount').textContent = totalItems;
  document.getElementById('cartTotal').textContent = formatPrice(total);

  const container = document.getElementById('cartItems');
  const empty = document.getElementById('cartEmpty');
  const footer = document.getElementById('cartFooter');

  if (cart.length === 0) {
    empty.style.display = 'block';
    footer.style.display = 'none';
    container.innerHTML = '';
    container.appendChild(empty);
    return;
  }

  empty.style.display = 'none';
  footer.style.display = 'block';

  container.innerHTML = '';
  cart.forEach(item => {
    const el = document.createElement('div');
    el.className = 'cart-item';
    el.innerHTML = `
      <div class="cart-item-emoji">${EMOJIS[item.categoria] || '🛍️'}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.nombre}</div>
        <div class="cart-item-price">${formatPrice(item.precio)}</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="updateQty(${item.id}, -1)">−</button>
          <span class="qty-num">${item.cantidad}</span>
          <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
          <button class="remove-btn" onclick="removeFromCart(${item.id})">✕</button>
        </div>
      </div>
    `;
    container.appendChild(el);
  });
}

// ——— TOGGLE CARRITO ———
function toggleCart() {
  const panel = document.getElementById('cartPanel');
  const overlay = document.getElementById('cartOverlay');
  panel.classList.toggle('open');
  overlay.classList.toggle('open');
  document.body.style.overflow = panel.classList.contains('open') ? 'hidden' : '';
}

document.getElementById('cartBtn').addEventListener('click', toggleCart);

// ——— CHECKOUT: BOTÓN "PAGAR" → ABRE MODAL RESUMEN ———
function checkout() {
  if (cart.length === 0) { showToast('Tu carro está vacío'); return; }
  toggleCart();
  openCheckoutModal();
}

// ——— CHECKOUT: BOTÓN "TRANSFERENCIA" DEL CARRO → ABRE MODAL RESUMEN ———
function checkoutTransfer() {
  if (cart.length === 0) { showToast('Tu carro está vacío'); return; }
  toggleCart();
  openCheckoutModal();
}

// ——— ABRIR MODAL RESUMEN ———
function openCheckoutModal() {
  const modal = document.getElementById('checkoutModal');
  const overlay = document.getElementById('checkoutOverlay');
  const itemsContainer = document.getElementById('checkoutModalItems');
  const totalEl = document.getElementById('checkoutModalTotal');

  const total = cart.reduce((sum, i) => sum + i.precio * i.cantidad, 0);
  totalEl.textContent = formatPrice(total);

  itemsContainer.innerHTML = '';
  cart.forEach(item => {
    const el = document.createElement('div');
    el.className = 'checkout-modal-item';
    el.innerHTML = `
      <div class="co-item-left">
        <span class="co-item-emoji">${EMOJIS[item.categoria] || '🛍️'}</span>
        <div>
          <div class="co-item-name">${item.nombre}</div>
          <div class="co-item-qty">Cantidad: ${item.cantidad}</div>
        </div>
      </div>
      <span class="co-item-price">${formatPrice(item.precio * item.cantidad)}</span>
    `;
    itemsContainer.appendChild(el);
  });

  overlay.classList.add('open');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

// ——— CERRAR MODAL RESUMEN ———
function closeCheckout() {
  document.getElementById('checkoutModal').classList.remove('open');
  document.getElementById('checkoutOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ——— PAGAR VÍA WHATSAPP ———
function payWithWhatsApp() {
  const total = cart.reduce((sum, i) => sum + i.precio * i.cantidad, 0);
  const detalle = cart.map(i => `• ${i.cantidad}x ${i.nombre} — ${formatPrice(i.precio * i.cantidad)}`).join('\n');
  const msg = encodeURIComponent(`Hola CTG! Quiero hacer un pedido:\n\n${detalle}\n\n💰 TOTAL: ${formatPrice(total)}\n🚚 + Despacho Starken`);
  window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank');
}

// ——— ABRIR MODAL TRANSFERENCIA ———
function openTransferModal() {
  const total = cart.reduce((sum, i) => sum + i.precio * i.cantidad, 0);
  document.getElementById('transferTotal').textContent = formatPrice(total);
  document.getElementById('transferModal').classList.add('open');
  document.getElementById('transferOverlay').classList.add('open');
}

// ——— CERRAR MODAL TRANSFERENCIA ———
function closeTransferModal() {
  document.getElementById('transferModal').classList.remove('open');
  document.getElementById('transferOverlay').classList.remove('open');
}

// ——— ENVIAR COMPROBANTE DE TRANSFERENCIA POR WHATSAPP ———
function sendTransferConfirmWA() {
  const total = cart.reduce((sum, i) => sum + i.precio * i.cantidad, 0);
  const detalle = cart.map(i => `• ${i.cantidad}x ${i.nombre}`).join('\n');
  const msg = encodeURIComponent(`Hola CTG! Acabo de realizar una transferencia por ${formatPrice(total)}.\n\nDetalle del pedido:\n${detalle}\n\nAdjunto el comprobante.`);
  window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank');
}

// ——— FORMULARIO CONTACTO ———
function submitForm(e) {
  e.preventDefault();
  showToast('✓ Mensaje enviado. Te contactaremos pronto.');
  e.target.reset();
}

// ——— FORMATO PRECIO ———
function formatPrice(num) {
  return '$' + num.toLocaleString('es-CL');
}

// ——— TOAST NOTIFICATION ———
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ——— SCROLL ANIMATIONS ———
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.cat-card, .producto-card, .step, .ns-stat').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

// ——— CERRAR MODALES CON ESC ———
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    const panel = document.getElementById('cartPanel');
    if (panel.classList.contains('open')) toggleCart();
    closeCheckout();
    closeTransferModal();
  }
});
