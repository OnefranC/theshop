// ===========================================
// TheShop - Main Application
// SPA router, rendering, and interactions
// ===========================================

// Icons (inline SVG strings)
const ICONS = {
  search: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>',
  cart: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>',
  user: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>',
  globe: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>',
  pin: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>',
  heart: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>',
  heartFilled: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>',
  share: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>',
  truck: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>',
  shield: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>',
  refresh: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path></svg>',
  lock: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>',
  box: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>',
  chevronDown: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>',
  check: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>',
  plus: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>',
  minus: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>',
  x: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',
  star: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>',
  starOutline: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>',
  google: '<svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>',
  facebook: '<svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
  laptop: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="2" y1="20" x2="22" y2="20"></line></svg>',
  shirt: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"></path></svg>',
  home: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>',
  sparkles: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.9 5.8L20 11l-6.1 1.9L12 19l-1.9-6.1L4 11l6.1-2.1L12 3z"></path></svg>',
  dumbbell: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.4 14.4 9.6 9.6"></path><path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z"></path><path d="m21.5 21.5-1.4-1.4"></path><path d="M3.9 3.9 2.5 2.5"></path><path d="M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z"></svg>',
  baby: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12h.01"></path><path d="M15 12h.01"></path><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"></path><path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"></path></svg>',
  watch: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="6"></circle><polyline points="12 10 12 12 13 13"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path></svg>',
  headphones: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>',
};

// Utility
function money(n) { return '$' + Number(n).toFixed(2); }
function escape(s) { return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]); }
function stars(n) {
  const full = Math.floor(n);
  const half = n - full >= 0.5;
  let out = '';
  for (let i=0;i<full;i++) out += ICONS.star;
  if (half) out += ICONS.star;
  for (let i=full+(half?1:0); i<5; i++) out += ICONS.starOutline;
  return out;
}
function productCard(p) {
  const isWished = State.wishlist.includes(p.id);
  const discount = Math.round((1 - p.price/p.originalPrice) * 100);
  return `
    <article class="product-card" onclick="navigate('product', '${p.id}')" tabindex="0" role="button" aria-label="View ${escape(p.title)}">
      <div class="pc-media">
        <div class="pc-img">
          <img src="${p.images[0]}" alt="${escape(p.title)}" loading="lazy">
          ${discount > 0 ? `<span class="pc-badge">-${discount}%</span>` : ''}
        </div>
        <button class="pc-wish ${isWished?'active':''}" onclick="event.stopPropagation(); toggleWish('${p.id}', this)" aria-label="Add to wishlist">
          ${isWished ? ICONS.heartFilled : ICONS.heart}
        </button>
        <div class="pc-quick-add">
          <button class="pc-quick-add-btn" onclick="event.stopPropagation(); addToCart('${p.id}')">
            ${ICONS.cart}
            <span>Quick add</span>
          </button>
        </div>
      </div>
      <div class="pc-body">
        <div class="pc-meta-row">
          <span class="pc-rating">
            <span class="pc-star">${ICONS.star}</span>
            <strong>${p.rating.toFixed(1)}</strong>
            <span class="pc-rating-count">(${p.reviewCount >= 1000 ? (p.reviewCount/1000).toFixed(1) + 'k' : p.reviewCount})</span>
          </span>
          <span class="pc-sold">${p.sold >= 1000 ? (p.sold/1000).toFixed(0) + 'k+' : p.sold}+ sold</span>
        </div>
        <h3 class="pc-title">${escape(p.title)}</h3>
        <div class="pc-pricing">
          <span class="pc-price">${money(p.price)}</span>
          <span class="pc-original">${money(p.originalPrice)}</span>
        </div>
        <button class="pc-action" onclick="event.stopPropagation(); addToCart('${p.id}')">
          <span>Add to Cart</span>
          ${ICONS.plus}
        </button>
      </div>
    </article>`;
}

// ===========================================
// Cart actions
// ===========================================
function addToCart(id) {
  const product = getProduct(id);
  if (!product) return;
  const existing = State.cart.find(i => i.id === id);
  if (existing) {
    existing.qty++;
  } else {
    State.cart.push({ id: product.id, qty: 1, price: product.price });
  }
  saveState();
  renderHeader();
  showToast(`Added to cart`);
  // Animate cart icon
  const cartIcon = document.querySelector('[data-cart-icon]');
  if (cartIcon) {
    cartIcon.classList.add('pulse');
    setTimeout(() => cartIcon.classList.remove('pulse'), 300);
  }
}

function updateCartQty(id, delta) {
  const item = State.cart.find(i => i.id === id);
  if (!item) return;
  item.qty = Math.max(0, item.qty + delta);
  if (item.qty === 0) {
    State.cart = State.cart.filter(i => i.id !== id);
  }
  saveState();
  renderCurrent();
  renderHeader();
  // Bump the qty input
  setTimeout(() => {
    const el = document.querySelector(`[data-pid="${id}"] .qty-input`);
    if (el && typeof Motion !== 'undefined') Motion.bumpElement(el);
  }, 50);
}

function removeFromCart(id) {
  State.cart = State.cart.filter(i => i.id !== id);
  saveState();
  renderCurrent();
  renderHeader();
  showToast('Item removed');
}

function toggleWish(id, btn) {
  if (State.wishlist.includes(id)) {
    State.wishlist = State.wishlist.filter(w => w !== id);
    if (btn) btn.classList.remove('active');
  } else {
    State.wishlist.push(id);
    if (btn) btn.classList.add('active');
    showToast('Added to wishlist');
  }
  saveState();
}

function applyPromo() {
  if (State.promoApplied) {
    State.promoApplied = false;
    showToast('Promo removed');
  } else {
    State.promoApplied = true;
    showToast('Promo WELCOME50 applied - 100% off!');
  }
  renderCurrent();
}

// ===========================================
// Router
// ===========================================
function navigate(page, id) {
  State.currentPage = page;
  if (id) {
    if (page === 'product') State.currentProductId = id;
    if (page === 'checkout') State.checkoutStep = parseInt(id) || 1;
    if (page === 'category') State.currentCategory = id;
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
  // Always update the URL
  State.route = '#/' + (page === 'home' ? '' : page + (id ? '/' + id : ''));
  if (window.location.hash !== State.route) {
    history.pushState(null, '', State.route);
  }
  renderCurrent();
  // Re-run motion observer for newly added elements
  setTimeout(() => Motion && Motion.reveal('.reveal, .stagger'), 50);
  // Start hero carousel on home page
  if (page === 'home') {
    setTimeout(() => { initHeroCarousel(); }, 200);
  } else {
    stopHeroInterval();
    stopHeroKeyboard();
  }
}

window.addEventListener('popstate', () => {
  parseRoute();
  // After parseRoute sets State.currentPage, renderCurrent won't overwrite
  renderCurrent();
});

function parseRoute() {
  const hash = window.location.hash || '#/';
  const parts = hash.replace('#/', '').split('/');
  if (!parts[0] || parts[0] === '') {
    State.currentPage = 'home';
  } else if (parts[0] === 'product' && parts[1]) {
    State.currentPage = 'product';
    State.currentProductId = parts[1];
  } else if (parts[0] === 'cart') {
    State.currentPage = 'cart';
  } else if (parts[0] === 'checkout') {
    State.currentPage = 'checkout';
    State.checkoutStep = parseInt(parts[1]) || 1;
  } else if (parts[0] === 'category' && parts[1]) {
    State.currentPage = 'category';
    State.currentCategory = parts[1];
  } else if (CATEGORIES.find(c => c.id === parts[0])) {
    // Direct category route
    State.currentPage = 'category';
    State.currentCategory = parts[0];
  } else if (parts[0] === 'account') {
    State.currentPage = 'account';
  } else {
    State.currentPage = 'home';
  }
}

function renderCurrent() {
  // Only parse route from URL on popstate (browser back/forward)
  // Otherwise trust State.currentPage which was set by navigate()
  const app = document.getElementById('app');
  if (!app) return;
  let html = '';
  switch (State.currentPage) {
    case 'home': html = renderHome(); break;
    case 'product': html = renderProduct(); break;
    case 'cart': html = renderCart(); break;
    case 'checkout': html = renderCheckout(); break;
    case 'category': html = renderCategory(); break;
    case 'account': html = renderAccount(); break;
    case 'signin': html = renderSignIn(); break;
    case 'register': html = renderRegister(); break;
    default: html = renderHome();
  }
  app.innerHTML = '<div class="page-enter">' + html + '</div>';
  // Scroll to top smoothly
  window.scrollTo({ top: 0, behavior: 'smooth' });
  // Re-run motion observer
  if (typeof Motion !== 'undefined') {
    Motion.reveal('.reveal, .stagger');
  }
  // Set focus for inputs
  setTimeout(() => {
    const f = app.querySelector('[autofocus]');
    if (f) f.focus();
  }, 50);
}

// ===========================================
// Header (shared)
// ===========================================
function renderHeader() {
  const head = document.getElementById('header');
  if (!head) return;
  const count = getCartCount();
  const isAuthed = !!State.user;
  head.innerHTML = `
    <div class="container">
      <div class="header-top">
        <a class="brand" onclick="navigate('home')">
          <span>THESHOP<span class="dot">.</span>com</span>
        </a>
        <div class="deliver-to">
          ${ICONS.pin}
          <span>Deliver to</span>
          <strong>Country</strong>
        </div>
        <div class="search-bar">
          <select class="cat-select" onchange="onCategoryFilter(this.value)">
            <option>All</option>
            ${CATEGORIES.map(c => `<option value="${c.id}">${c.name}</option>`).join('')}
          </select>
          <input type="text" placeholder="looking for something..." onkeydown="if(event.key==='Enter'){navigate('category', this.value || this.previousElementSibling.value)}">
          <button onclick="const q=this.previousElementSibling.previousElementSibling.value; navigate('category', q || this.previousElementSibling.previousElementSibling.previousElementSibling.value)">
            ${ICONS.search}
          </button>
        </div>
        <div class="header-actions">
          <div class="lang-select">
            ${ICONS.globe}
            <span>English-USD</span>
            ${ICONS.chevronDown}
          </div>
          <a class="icon-btn" onclick="navigate('category','all')">Category</a>
          <a class="icon-btn" data-cart-icon onclick="navigate('cart')" aria-label="Cart">
            ${ICONS.cart}
            ${count > 0 ? `<span class="badge">${count}</span>` : ''}
          </a>
          ${isAuthed ? `
            <div class="user-menu" onclick="navigate('account')">
              <div class="avatar">${(State.user.name || 'S').charAt(0).toUpperCase()}</div>
              ${ICONS.chevronDown}
            </div>
          ` : `
            <div class="auth-btns">
              <button class="btn-ghost" onclick="navigate('signin')">Signin</button>
              <button class="btn-solid-dark" onclick="navigate('register')">Register</button>
            </div>
          `}
        </div>
      </div>
    </div>
    <div class="container">
      <nav class="sub-nav">
        <a onclick="navigate('category', 'new')" class="${State.currentPage==='category' && State.currentCategory==='new' ? 'active':''}">New in store</a>
        <a onclick="navigate('category', 'trending')" class="${State.currentPage==='category' && State.currentCategory==='trending' ? 'active':''}">Trending</a>
        <a onclick="navigate('category', 'deals')" class="${State.currentPage==='category' && State.currentCategory==='deals' ? 'active':''}">Deals today</a>
        <a onclick="navigate('category', 'refurbished')" class="${State.currentPage==='category' && State.currentCategory==='refurbished' ? 'active':''}">Refurbished</a>
        <a onclick="navigate('category', 'brands')" class="${State.currentPage==='category' && State.currentCategory==='brands' ? 'active':''}">Brands</a>
      </nav>
    </div>
  `;
}

function onCategoryFilter(v) {
  if (v) navigate('category', v);
}

// ===========================================
// Home page
// ===========================================
function renderHome() {
  const top = TOP_PICKS.map(id => getProduct(id)).filter(Boolean);
  const newIn = NEW_IN_STORE.map(id => getProduct(id)).filter(Boolean);
  return `
    ${renderHeroCarousel()}

    <div class="container">
      <div class="cat-strip reveal">
        ${CATEGORIES.map(c => `
          <a class="cat-item" onclick="navigate('category','${c.id}')">
            <div class="cat-icon">${ICONS[c.icon] || ICONS.home}</div>
            <div class="cat-name">${c.name}</div>
          </a>
        `).join('')}
      </div>
    </div>

    <div class="container">
      <section class="cat-section cat-section--featured reveal">
        <div class="cat-section-head">
          <div class="cat-section-titles">
            <span class="cat-section-eyebrow">Handpicked for you</span>
            <h2 class="cat-section-title">Top picks for you</h2>
            <p class="cat-section-subtitle">Our team's favorite products, chosen for quality, value, and style.</p>
          </div>
          <a class="cat-section-link" onclick="navigate('category','all')">
            View all <span>${ICONS.chevronDown}</span>
          </a>
        </div>
        <div class="product-grid stagger">
          ${top.slice(0, 10).map(productCard).join('')}
        </div>
      </section>

      <section class="cat-section reveal">
        <div class="cat-section-head">
          <div class="cat-section-titles">
            <span class="cat-section-eyebrow cat-section-eyebrow--new">Just landed</span>
            <h2 class="cat-section-title">New in store</h2>
            <p class="cat-section-subtitle">Fresh arrivals added this week — be the first to discover them.</p>
          </div>
          <a class="cat-section-link" onclick="navigate('category','new')">
            View all <span>${ICONS.chevronDown}</span>
          </a>
        </div>
        <div class="product-grid stagger">
          ${newIn.slice(0, 10).map(productCard).join('')}
        </div>
      </section>
    </div>

    ${renderFooter()}
  `;
}

// ===========================================
// Hero Carousel
// ===========================================
let heroInterval = null;
let currentSlide = 0;

function renderHeroCarousel() {
  return `
    <section class="hero-carousel" id="hero-carousel">
      <div class="hero-slides" id="hero-slides">
        ${HERO_SLIDES.map((s, i) => `
          <div class="hero-slide ${i===0?'active':''}" data-slide="${i}" style="background:${s.bgGradient}; height:${s.height || 480}px;">
            <div class="hero-decor">
              <img src="${s.decorLeft}" alt="" class="decor-left" onerror="this.style.display='none'">
              <img src="${s.decorRight}" alt="" class="decor-right" onerror="this.style.display='none'">
            </div>
            <div class="hero-overlay"></div>
            <div class="hero-content">
              ${s.badge ? `<div class="hero-badge">${escape(s.badge)}</div>` : ''}
              <div class="hero-eyebrow" style="${s.eyebrowColor ? 'color:'+s.eyebrowColor : ''}">${escape(s.eyebrow)}</div>
              <h1 class="hero-title" style="color:${s.titleColor || '#fff'};">${escape(s.title)}</h1>
              ${s.subtitle ? `<p class="hero-subtitle" style="color:${s.eyebrowColor || 'rgba(255,255,255,0.85)'};">${escape(s.subtitle)}</p>` : ''}
              <div class="hero-cta-group">
                <a class="hero-cta" onclick="navigate('category','${s.ctaTarget}')">${escape(s.cta)}</a>
                ${s.ctaSecondary ? `<a class="hero-cta-secondary" onclick="navigate('category','${s.ctaSecondaryTarget}')">${escape(s.ctaSecondary)}</a>` : ''}
              </div>
            </div>
          </div>
        `).join('')}
      </div>

      <button class="hero-arrow hero-prev" onclick="heroPrev()" aria-label="Previous slide">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
      </button>
      <button class="hero-arrow hero-next" onclick="heroNext()" aria-label="Next slide">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </button>

      <div class="hero-dots" id="hero-dots">
        ${HERO_SLIDES.map((s, i) => `<button class="dot ${i===0?'active':''}" onclick="heroGoTo(${i})" aria-label="Go to slide ${i+1}"><span class="dot-progress"></span></button>`).join('')}
      </div>
    </section>
  `;
}

function heroGoTo(idx) {
  if (!HERO_SLIDES[idx]) return;
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dots .dot');
  const prevIdx = currentSlide;
  if (prevIdx === idx) return;
  const direction = idx > prevIdx ? 'next' : 'prev';

  // Clean all transition classes from all slides
  slides.forEach(s => s.classList.remove(
    'active', 'enter-right', 'enter-left', 'exit-left', 'exit-right',
    'entering-from-right', 'entering-from-left'
  ));

  if (direction === 'next') {
    if (slides[prevIdx]) slides[prevIdx].classList.add('exit-left');
    if (slides[idx]) {
      slides[idx].classList.add('enter-right');
      void slides[idx].offsetWidth;
      slides[idx].classList.add('entering-from-right');
      slides[idx].classList.add('active');
    }
  } else {
    if (slides[prevIdx]) slides[prevIdx].classList.add('exit-right');
    if (slides[idx]) {
      slides[idx].classList.add('enter-left');
      void slides[idx].offsetWidth;
      slides[idx].classList.add('entering-from-left');
      slides[idx].classList.add('active');
    }
  }

  // After transition completes, clean up classes on old slides so they don't interfere
  setTimeout(() => {
    slides.forEach((s, i) => {
      if (i !== idx) {
        s.classList.remove('exit-left', 'exit-right', 'enter-right', 'enter-left', 'entering-from-right', 'entering-from-left');
        // Make sure they're hidden and off-screen
        s.style.transform = '';
        s.style.visibility = '';
        s.style.transition = '';
      } else {
        // Clean up transition classes on the active slide too, so it stays at translateX(0)
        s.classList.remove('enter-right', 'enter-left', 'entering-from-right', 'entering-from-left');
      }
    });
  }, 750);

  // Update dots: remove active, force reflow, then re-add active to restart progress animation
  dots.forEach((d, i) => d.classList.remove('active', 'paused'));
  if (dots[idx]) {
    // Force reflow on the inner .dot-progress span so the animation restarts
    const inner = dots[idx].querySelector('.dot-progress');
    if (inner) {
      inner.style.animation = 'none';
      void inner.offsetWidth;
      inner.style.animation = '';
    }
    dots[idx].classList.add('active');
  }

  currentSlide = idx;
  resetHeroInterval();
}

function heroNext() {
  heroGoTo((currentSlide + 1) % HERO_SLIDES.length);
}

function heroPrev() {
  heroGoTo((currentSlide - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
}

function startHeroInterval() {
  stopHeroInterval();
  heroInterval = setInterval(heroNext, 5000);
}

function stopHeroInterval() {
  if (heroInterval) clearInterval(heroInterval);
  heroInterval = null;
}

function resetHeroInterval() {
  startHeroInterval();
}

// Initialize the carousel with hover-pause and touch swipe
function initHeroCarousel() {
  const carousel = document.getElementById('hero-carousel');
  if (!carousel) return;
  currentSlide = 0;
  startHeroInterval();
  // Pause on hover
  carousel.addEventListener('mouseenter', () => {
    stopHeroInterval();
    // Pause the progress fill
    document.querySelectorAll('.hero-dots .dot.active').forEach(d => d.classList.add('paused'));
  });
  carousel.addEventListener('mouseleave', () => {
    startHeroInterval();
    // Resume the progress fill - force a restart
    document.querySelectorAll('.hero-dots .dot.active').forEach(d => {
      d.classList.remove('paused');
      // Force the animation to restart from current position
      const inner = d.querySelector('.dot-progress');
      if (inner) {
        const currentWidth = inner.getBoundingClientRect().width;
        const totalWidth = d.getBoundingClientRect().width;
        const progress = currentWidth / totalWidth;
        const remaining = (1 - progress) * 5; // 5s autoplay, remaining seconds
        inner.style.animation = 'none';
        void inner.offsetWidth;
        inner.style.animation = `dotFill ${remaining}s linear forwards`;
      }
    });
  });
  // Touch swipe support
  let touchStartX = 0, touchStartY = 0, isTouching = false;
  carousel.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    isTouching = true;
    stopHeroInterval();
  }, { passive: true });
  carousel.addEventListener('touchmove', (e) => {
    if (!isTouching) return;
    const dx = e.touches[0].clientX - touchStartX;
    const dy = e.touches[0].clientY - touchStartY;
    if (Math.abs(dx) > Math.abs(dy) * 1.5 && Math.abs(dx) > 30) {
      isTouching = false;
      if (dx < 0) heroNext(); else heroPrev();
    }
  }, { passive: true });
  carousel.addEventListener('touchend', () => {
    isTouching = false;
    startHeroInterval();
  }, { passive: true });
  // Keyboard support
  document.addEventListener('keydown', heroKeyHandler);
}

// Remove keyboard handler when leaving home
function stopHeroKeyboard() {
  document.removeEventListener('keydown', heroKeyHandler);
}

function heroKeyHandler(e) {
  if (State.currentPage !== 'home') return;
  // Only if carousel is in viewport
  const carousel = document.getElementById('hero-carousel');
  if (!carousel) return;
  const rect = carousel.getBoundingClientRect();
  const inView = rect.top < window.innerHeight && rect.bottom > 0;
  if (!inView) return;
  if (e.key === 'ArrowLeft') heroPrev();
  if (e.key === 'ArrowRight') heroNext();
}

// ===========================================
// Category / Listing page
// ===========================================
function renderCategory() {
  const cat = State.currentCategory || 'all';
  let products = PRODUCTS.slice();
  let title = 'All Products';
  let heroImg = 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=1200&q=80';
  let heroSub = 'Explore our complete collection';

  if (cat === 'new') {
    products = NEW_IN_STORE.map(id => getProduct(id)).filter(Boolean);
    title = 'New in store';
    heroImg = 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80';
    heroSub = 'The latest arrivals, handpicked for you';
  } else if (cat === 'trending') {
    products = TOP_PICKS.map(id => getProduct(id)).filter(Boolean);
    title = 'Trending now';
    heroImg = 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=1200&q=80';
    heroSub = 'What everyone is loving right now';
  } else if (cat === 'deals') {
    products = PRODUCTS.filter(p => p.price / p.originalPrice < 0.7);
    title = 'Today\'s deals';
    heroImg = 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&q=80';
    heroSub = 'Massive savings, limited time';
  } else if (CATEGORIES.find(c => c.id === cat)) {
    products = PRODUCTS.filter(p => p.category === cat);
    title = CATEGORIES.find(c => c.id === cat).name;
    heroSub = `Shop the best of ${title.toLowerCase()}`;
  } else {
    // search
    const q = (cat || '').toLowerCase();
    if (q === 'all' || !q) {
      products = PRODUCTS.slice();
      title = 'All Products';
      heroSub = `Browse our complete collection`;
    } else {
      products = PRODUCTS.filter(p => p.title.toLowerCase().includes(q) || p.keywords.some(k => k.includes(q)));
      title = `Results for "${cat}"`;
      heroSub = `${products.length} items found`;
    }
  }

  return `
    <section class="cat-hero">
      <div class="cat-hero-content">
        <h1>${escape(title)}</h1>
        <p>${escape(heroSub)}</p>
      </div>
      <img src="${heroImg}" alt="">
    </section>

    <div class="container">
      <div class="breadcrumb">
        <a onclick="navigate('home')">Home</a>
        <span class="sep">›</span>
        <span>${escape(title)}</span>
      </div>
      <div class="listing-layout">
        <aside class="filters">
          <div class="filter-group">
            <div class="filter-title">Keywords</div>
            <div class="chips">
              ${['Spring','Smart','Modern'].map(k => `<span class="chip">${k} ${ICONS.x}</span>`).join('')}
            </div>
          </div>
          <div class="filter-group">
            <div class="filter-title">Deals & Discounts</div>
            <a class="filter-link muted">All Discounts</a>
            <a class="filter-link muted">Today's Deals</a>
          </div>
          <div class="filter-group">
            <div class="filter-title">Category</div>
            <a class="filter-link ${cat==='all'?'active':''}" onclick="navigate('category','all')">All</a>
            ${CATEGORIES.map(c => `<a class="filter-link ${cat===c.id?'active':''}" onclick="navigate('category','${c.id}')">${c.name}</a>`).join('')}
          </div>
          <div class="filter-group">
            <label class="checkbox-row"><input type="checkbox"> Free shipping</label>
            <label class="checkbox-row"><input type="checkbox"> On sale</label>
            <label class="checkbox-row"><input type="checkbox"> In stock</label>
          </div>
          <div class="filter-group">
            <div class="filter-title">Price</div>
            <input type="range" min="0" max="100" value="50">
            <div class="range-row"><span>$0</span><span>$100+</span></div>
          </div>
          <div class="filter-group">
            <div class="filter-title">Customer Reviews</div>
            <a class="filter-link muted">★★★★★ & up</a>
            <a class="filter-link muted">★★★★ & up</a>
            <a class="filter-link muted">★★★ & up</a>
          </div>
        </aside>

        <div class="listing-main">
          <div class="cat-section-head reveal">
            <div class="cat-section-titles">
              <span class="cat-section-eyebrow">${products.length} products available</span>
              <h2 class="cat-section-title">${escape(title)}</h2>
            </div>
            <div class="sort-tabs">
              <button class="sort-tab active">${ICONS.check} New</button>
              <button class="sort-tab" onclick="sortProducts('asc', this)">Price ↑</button>
              <button class="sort-tab" onclick="sortProducts('desc', this)">Price ↓</button>
              <button class="sort-tab" onclick="sortProducts('rating', this)">Rating</button>
            </div>
          </div>
          <div class="cat-section">
            <div class="product-grid stagger" id="prod-grid">
              ${products.map(productCard).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>
    ${renderFooter()}
  `;
}

function sortProducts(mode, btn) {
  document.querySelectorAll('.sort-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const grid = document.getElementById('prod-grid');
  let items = Array.from(grid.children);
  items.sort((a, b) => {
    const pa = getProduct(a.querySelector('.pc-action').onclick.toString().match(/'(.+)'/)?.[1]);
    const pb = getProduct(b.querySelector('.pc-action').onclick.toString().match(/'(.+)'/)?.[1]);
    if (!pa || !pb) return 0;
    if (mode === 'asc') return pa.price - pb.price;
    if (mode === 'desc') return pb.price - pa.price;
    if (mode === 'rating') return pb.rating - pa.rating;
    return 0;
  });
  items.forEach(it => grid.appendChild(it));
}

// ===========================================
// Product Detail
// ===========================================
function renderProduct() {
  const p = getProduct(State.currentProductId);
  if (!p) return '<div class="container section"><h2>Product not found</h2></div>';
  const productReviews = REVIEWS.filter(r => r.productId === p.id);
  const isWished = State.wishlist.includes(p.id);
  const savings = p.originalPrice - p.price;
  const inCart = State.cart.find(i => i.id === p.id);

  return `
    <div class="container">
      <div class="breadcrumb">
        <a onclick="navigate('home')">Home</a>
        <span class="sep">›</span>
        <a onclick="navigate('category','new')">New in store</a>
        <span class="sep">›</span>
        <a onclick="navigate('category', p.category)">${CATEGORIES.find(c=>c.id===p.category)?.name || 'Category'}</a>
        <span class="sep">›</span>
        <span>${escape(p.title.split(' ').slice(0,5).join(' '))}...</span>
      </div>

      <div class="pdp-layout">
        <div class="gallery reveal-left">
          <div class="gallery-main">
            <img id="main-img" src="${p.images[0]}" alt="${escape(p.title)}">
            <button class="gallery-wish ${isWished?'active':''}" onclick="toggleWish('${p.id}', this)">
              ${isWished ? ICONS.heartFilled : ICONS.heart}
            </button>
            <button class="gallery-share">${ICONS.share}</button>
          </div>
          <div class="gallery-thumbs">
            ${p.images.map((img, i) => `
              <div class="thumb ${i===0?'active':''}" onclick="selectThumb('${img}', this)">
                <img src="${img}" alt="thumb ${i+1}">
              </div>
            `).join('')}
          </div>
        </div>

        <div class="pdp-info reveal-right">
          <h1>${escape(p.title)}</h1>
          <div class="pdp-rating">
            <span style="font-size:14px; font-weight:600;">${p.rating}</span>
            <span class="stars">${stars(p.rating)}</span>
            <span>${p.reviewCount.toLocaleString()} ratings</span>
            <span style="color:var(--color-border);">|</span>
            <span>${p.sold.toLocaleString()}+ sold</span>
          </div>

          <div class="pdp-price">${money(p.price)}</div>
          <div style="color:var(--color-text-muted); font-size:14px; margin-bottom:var(--space-4);">
            <span style="text-decoration:line-through;">${money(p.originalPrice)}</span>
            <span style="color:var(--color-success); margin-left:8px; font-weight:600;">Save ${money(savings)}</span>
          </div>

          <div class="pdp-perks">
            <div class="perk">
              <span class="perk-icon">${ICONS.truck}</span>
              <div>
                <strong>Free shipping on all orders</strong>
                <small>Delivery: ${p.delivery || 'Mar 1-14'} · Get a ₦1,600 credit for late delivery</small>
              </div>
            </div>
            <div class="perk">
              <span class="perk-icon">${ICONS.refresh}</span>
              <div>
                <strong>30-Day Returns · Price adjustment</strong>
                <small>Every payment you make on TheShop.com is secured with strict SSL encryption and PCI DSS data protection protocols</small>
              </div>
            </div>
            <div class="perk">
              <span class="perk-icon">${ICONS.lock}</span>
              <div>
                <strong>Shopping security</strong>
                <small>Safe Payment Options · Secure logistics · Secure privacy · Purchase protection</small>
              </div>
            </div>
          </div>

          ${Object.entries(p.options || {}).map(([optName, optValues]) => `
            <div class="option-group">
              <div class="option-label">${optName}</div>
              <div class="option-pills">
                ${optValues.map((v, i) => `<button class="option-pill ${i===0?'active':''}" onclick="selectOption(this, '${p.id}')">${v}</button>`).join('')}
              </div>
            </div>
          `).join('')}

          <div class="pdp-cta">
            <button class="btn btn-primary btn-lg" onclick="addToCart('${p.id}')">${inCart ? 'Add another' : 'Add to Cart'}</button>
            <button class="btn btn-primary btn-lg" style="background:#0a3d44;" onclick="buyNow('${p.id}')">Buy Now</button>
          </div>

          <div class="pdp-meta-card">
            <dl>
              ${Object.entries(p.specs).slice(0, 6).map(([k, v]) => `
                <div class="meta-row">
                  <dt>${k}</dt>
                  <dd>${escape(v)}</dd>
                </div>
              `).join('')}
            </dl>
          </div>
        </div>
      </div>

      <section class="reviews-section">
        <div class="reviews-head reveal">
          <h2 style="font-size:28px;">Customer reviews</h2>
          <button class="btn btn-primary">Write a review</button>
        </div>
        <div class="rating-summary reveal">
          <div class="big-rating">${p.rating}</div>
          <div>
            <div class="stars" style="font-size:20px;">${stars(p.rating)}</div>
            <div style="font-size:13px; color:var(--color-text-muted); margin-top:4px;">${p.reviewCount.toLocaleString()} ratings</div>
          </div>
          <div class="rating-bars" style="margin-left:auto;">
            ${[5,4,3,2,1].map(s => {
              const pct = s === 5 ? 70 : s === 4 ? 18 : s === 3 ? 7 : s === 2 ? 3 : 2;
              return `<div class="rating-bar">
                <span>${s} star</span>
                <div class="bar"><div style="width:${pct}%"></div></div>
                <span>${pct}%</span>
              </div>`;
            }).join('')}
          </div>
        </div>

        <div style="margin-top:var(--space-7);">
          ${productReviews.length > 0 ? productReviews.map(r => `
            <div class="review-card">
              <div class="review-head">
                <div class="review-avatar">${r.author.charAt(0)}</div>
                <div>
                  <div class="review-author">${r.author}${r.verified ? ' <span style="color:var(--color-accent); font-size:11px;">✓ Verified Purchase</span>' : ''}</div>
                  <div class="review-date">${r.date}</div>
                </div>
                <div class="stars" style="margin-left:auto;">${stars(r.rating)}</div>
              </div>
              <div class="review-title">${r.title}</div>
              <div class="review-text">${r.text}</div>
              <div class="review-helpful">
                <button style="border:1px solid var(--color-border); padding:4px 10px; border-radius:6px;">👍 Helpful (${r.helpful})</button>
                <button style="border:1px solid var(--color-border); padding:4px 10px; border-radius:6px;">Report</button>
              </div>
            </div>
          `).join('') : `<div class="review-card" style="text-align:center; color:var(--color-text-muted);">No reviews yet. Be the first!</div>`}
        </div>
      </section>

      <section class="cat-section reveal">
        <div class="cat-section-head">
          <div class="cat-section-titles">
            <span class="cat-section-eyebrow">You may also like</span>
            <h2 class="cat-section-title">Top picks for you</h2>
          </div>
          <a class="cat-section-link" onclick="navigate('category','all')">
            View all <span>${ICONS.chevronDown}</span>
          </a>
        </div>
        <div class="product-grid stagger">
          ${TOP_PICKS.slice(0, 5).map(id => productCard(getProduct(id))).join('')}
        </div>
      </section>
    </div>
    ${renderFooter()}
  `;
}

function selectThumb(img, el) {
  document.getElementById('main-img').src = img;
  document.querySelectorAll('.gallery-thumbs .thumb').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
}
function selectOption(el) {
  const group = el.parentElement;
  group.querySelectorAll('.option-pill').forEach(p => p.classList.remove('active'));
  el.classList.add('active');
}
function buyNow(id) {
  if (!State.cart.find(i => i.id === id)) {
    addToCart(id);
  }
  setTimeout(() => navigate('checkout', '1'), 200);
}

// ===========================================
// Cart page
// ===========================================
function renderCart() {
  if (State.cart.length === 0) {
    return `
      <div class="container">
        <div class="cart-items">
          <h1 class="cart-h1">Shopping Cart</h1>
          <div class="cart-empty">
            <h2>Your Cart is empty</h2>
            <p>Looks like you haven't added anything yet</p>
            <a class="cta" onclick="navigate('category','deals')">Shop today's deals</a>
            <svg class="illus" width="280" height="280" viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color:#0f1a1f;">
              <!-- Person -->
              <circle cx="120" cy="50" r="14" fill="currentColor"/>
              <path d="M100 75 Q100 65 120 65 Q140 65 140 80 L140 130 L130 130 L130 175 L110 175 L110 130 L100 130 Z" fill="currentColor"/>
              <!-- Arms reaching out -->
              <path d="M100 90 L70 85" stroke-width="3"/>
              <path d="M140 90 L170 80" stroke-width="3"/>
              <!-- Empty cart -->
              <path d="M30 100 L55 100 L70 165 L150 165 L165 110 L65 110" stroke-width="3"/>
              <circle cx="80" cy="185" r="7" fill="currentColor"/>
              <circle cx="140" cy="185" r="7" fill="currentColor"/>
              <!-- Shrug effect lines -->
              <path d="M55 75 L45 65" stroke-width="1.5" stroke-dasharray="3 2"/>
              <path d="M180 70 L195 60" stroke-width="1.5" stroke-dasharray="3 2"/>
            </svg>
          </div>
        </div>
      </div>
      ${renderTopPicks()}
      ${renderFooter()}
    `;
  }
  const total = getCartTotal();
  const discount = getDiscount();
  const shipping = 0;
  const final = total - discount + shipping;
  return `
    <div class="container">
      <div class="cart-layout">
        <div class="cart-items">
          <h1 class="cart-h1">Shopping Cart</h1>
          ${State.cart.map(item => {
            const p = getProduct(item.id);
            if (!p) return '';
            return `
              <div class="cart-row" data-pid="${p.id}">
                <div class="cart-img" onclick="navigate('product','${p.id}')" style="cursor:pointer;">
                  <img src="${p.images[0]}" alt="${escape(p.title)}">
                </div>
                <div class="cart-info">
                  <div>
                    <div class="cart-title" onclick="navigate('product','${p.id}')" style="cursor:pointer;">${escape(p.title)}</div>
                    <div class="cart-seller">Seller: ${escape(p.seller)}</div>
                    <div class="cart-price">${money(p.price)}</div>
                    <div class="cart-stock">✓ In Stock</div>
                  </div>
                  <div class="cart-actions">
                    <button onclick="removeFromCart('${p.id}')">Delete</button>
                    <span>|</span>
                    <button>Save for later</button>
                    <span>|</span>
                    <button>Share</button>
                    <div class="cart-qty" style="margin-left:auto;">
                      <button class="qty-btn" onclick="updateCartQty('${p.id}', -1)">${ICONS.minus}</button>
                      <input class="qty-input" value="${item.qty}" readonly>
                      <button class="qty-btn add" onclick="updateCartQty('${p.id}', 1)">${ICONS.plus}</button>
                    </div>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
          <div class="cart-subtotal">
            Subtotal(${State.cart.length} items):
            <span style="color:var(--color-text); font-weight:700;">${money(total - discount)}</span>
          </div>
        </div>

        <aside class="cart-summary summary-sticky">
          <div class="summary-title">Order summary</div>
          <div class="summary-row"><span>Item total(${State.cart.length} items):</span><span>${money(total)}</span></div>
          <div class="summary-row"><span>Shipping fee</span><span>${money(shipping)}</span></div>
          ${discount > 0 ? `<div class="summary-row discount"><span>Item discount:</span><span>−${money(discount)}</span></div>` : ''}
          <div class="summary-promo">
            <input type="text" placeholder="Promo code" value="${State.promoApplied ? 'WELCOME50' : ''}">
            <button class="${State.promoApplied ? 'applied' : ''}" onclick="applyPromo()">${State.promoApplied ? 'Remove' : 'Apply'}</button>
          </div>
          <div class="summary-row total"><span>Total:</span><span>${money(final)}</span></div>
          <button class="btn btn-primary btn-block btn-lg" style="margin-top:var(--space-3);" onclick="navigate('checkout','1')">Continue</button>
          <div class="trust">
            <div class="trust-title">You're protected on Theshop.com</div>
            <div class="trust-row">${ICONS.shield}<span>Secure payment</span></div>
            <div class="trust-row">${ICONS.refresh}<span>Refund and returns</span></div>
            <div class="trust-row">${ICONS.box}<span>Fulfillment by Theshop.com Logistics</span></div>
          </div>
        </aside>
      </div>
    </div>
    ${renderTopPicks()}
    ${renderFooter()}
  `;
}

function renderTopPicks() {
  return `
    <div class="container">
      <section class="cat-section reveal">
        <div class="cat-section-head">
          <div class="cat-section-titles">
            <span class="cat-section-eyebrow">You may also like</span>
            <h2 class="cat-section-title">Top picks for you</h2>
          </div>
          <a class="cat-section-link" onclick="navigate('category','all')">
            View all <span>${ICONS.chevronDown}</span>
          </a>
        </div>
        <div class="product-grid stagger">
          ${TOP_PICKS.slice(0, 5).map(id => productCard(getProduct(id))).join('')}
        </div>
      </section>
    </div>
  `;
}

// ===========================================
// Checkout flow
// ===========================================
function renderCheckout() {
  if (State.cart.length === 0) {
    return `<div class="container section"><h2>Your cart is empty</h2><a class="btn btn-primary" onclick="navigate('home')">Continue shopping</a></div>`;
  }
  const total = getCartTotal();
  const discount = getDiscount();
  const final = total - discount;
  const step = State.checkoutStep;

  return `
    <div class="checkout-bg">
      <div class="container">
        <div class="steps">
          <div class="step ${step===1?'active':''} ${step>1?'done':''}"><div class="num">1</div><span>Address</span></div>
          <div class="bar"></div>
          <div class="step ${step===2?'active':''} ${step>2?'done':''}"><div class="num">2</div><span>Shipping & Payment</span></div>
          <div class="bar"></div>
          <div class="step ${step===3?'active':''}"><div class="num">3</div><span>Review</span></div>
        </div>

        <div class="checkout-layout">
          <div class="checkout-card fade-in">
            ${step === 1 ? renderCheckoutStep1() : step === 2 ? renderCheckoutStep2() : renderCheckoutStep3()}
          </div>
          <aside class="cart-summary summary-sticky">
            <div class="summary-title">Order summary</div>
            <div class="summary-row"><span>Item total(${State.cart.length} items):</span><span>${money(total)}</span></div>
            <div class="summary-row"><span>Shipping fee</span><span>$free</span></div>
            ${discount > 0 ? `<div class="summary-row discount"><span>Item discount:</span><span>−${money(discount)}</span></div>` : ''}
            <div class="summary-row total"><span>Total:</span><span>${money(final)}</span></div>
            <div class="trust">
              <div class="trust-title">You're protected on Theshop.com</div>
              <div class="trust-row">${ICONS.shield}<span>Secure payment</span></div>
              <div class="trust-row">${ICONS.refresh}<span>Refund and returns</span></div>
              <div class="trust-row">${ICONS.box}<span>Fulfillment by Theshop.com Logistics</span></div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  `;
}

function renderCheckoutStep1() {
  const d = State.checkoutData;
  return `
    <h1 class="checkout-h">Checkout <a class="back-link" onclick="navigate('cart')">Back to shopping</a></h1>
    <div class="checkout-section">
      <div class="cs-head">
        <div class="cs-title">Continue as guest</div>
        <a class="cs-edit" onclick="navigate('signin')">Sign in instead</a>
      </div>
    </div>

    <div class="checkout-section">
      <div class="cs-title" style="margin-bottom:var(--space-4);">Where's this order going?</div>
      <div class="floating-field">
        <select class="field" id="addr-country" onchange="collectAddress()">
          <option value=""></option>
          <option ${d.address.country==='United States'?'selected':''}>United States</option>
          <option>United Kingdom</option>
          <option>Canada</option>
          <option>Nigeria</option>
          <option>Australia</option>
        </select>
        <label class="float-label">Country or region</label>
      </div>
      <div class="field-row" style="gap:var(--space-3);">
        <div class="floating-field"><input class="field" id="addr-fn" placeholder=" " value="${d.address.firstName||''}" oninput="collectAddress()"><label class="float-label">First name</label></div>
        <div class="floating-field"><input class="field" id="addr-ln" placeholder=" " value="${d.address.lastName||''}" oninput="collectAddress()"><label class="float-label">Last name</label></div>
      </div>
      <div class="field-row" style="gap:var(--space-3);">
        <div class="floating-field"><input class="field" id="addr-addr" placeholder=" " value="${d.address.address||''}" oninput="collectAddress()"><label class="float-label">Address</label></div>
        <div class="floating-field"><input class="field" id="addr-apt" placeholder=" " value="${d.address.apt||''}" oninput="collectAddress()"><label class="float-label">Apt/Floor/Suite</label></div>
      </div>
      <div class="field-row three" style="gap:var(--space-3);">
        <div class="floating-field"><input class="field" id="addr-city" placeholder=" " value="${d.address.city||''}" oninput="collectAddress()"><label class="float-label">City</label></div>
        <div class="floating-field"><input class="field" id="addr-state" placeholder=" " value="${d.address.state||''}" oninput="collectAddress()"><label class="float-label">State</label></div>
        <div class="floating-field"><input class="field" id="addr-zip" placeholder=" " value="${d.address.zip||''}" oninput="collectAddress()"><label class="float-label">Zip code</label></div>
      </div>
      <div class="floating-field" style="margin-bottom:var(--space-3);">
        <input class="field" id="addr-phone" placeholder=" " value="${d.address.phone||''}" oninput="collectAddress()">
        <label class="float-label">Phone</label>
      </div>
      <button class="btn btn-primary btn-block btn-lg" style="margin-top:var(--space-3);" onclick="nextStep()">Continue</button>
      <label class="checkbox-line"><input type="checkbox"> Make this my default address</label>
    </div>

    <div class="checkout-section">
      <div class="cs-head">
        <div class="cs-title">Delivery</div>
      </div>
      <label class="delivery-option">
        <input type="radio" name="ship" value="standard" ${d.shipping==='standard'?'checked':''} onchange="State.checkoutData.shipping='standard'; renderCurrent();">
        Standard (7-10 business days)
        <span class="badge-free">Free</span>
      </label>
    </div>
  `;
}

function renderCheckoutStep2() {
  const d = State.checkoutData;
  return `
    <h1 class="checkout-h">Checkout <a class="back-link" onclick="navigate('cart')">Back to shopping</a></h1>

    <div class="checkout-section">
      <div class="cs-head">
        <div class="cs-title">Shipping</div>
        <a class="cs-edit" onclick="State.checkoutStep=1; renderCurrent();">Edit</a>
      </div>
      <div style="font-size:14px; line-height:1.6;">
        <div style="font-weight:600;">${d.address.firstName || 'Sonia'} ${d.address.lastName || 'Mark'}</div>
        <div>${d.address.address || '1247 Maple Street'}</div>
        ${d.address.apt ? `<div>${d.address.apt}</div>` : ''}
        <div>${d.address.city || 'Springfield'}, ${d.address.state || 'IL'} ${d.address.zip || '62704'}</div>
        <div>${d.address.country || 'United States'}</div>
        <div style="margin-top:4px;">Phone Number: ${d.address.phone || '(555) 123-45671247'}</div>
      </div>
    </div>

    <div class="checkout-section">
      <div class="cs-head">
        <div class="cs-title">Delivery</div>
        <a class="cs-edit" onclick="State.checkoutStep=1; renderCurrent();">Edit</a>
      </div>
      <div style="font-size:14px;">Standard - free</div>
      <div style="font-size:13px; color:var(--color-text-muted);">${d.address.address || '1247 Maple Street'}, ${d.address.city || 'Springfield'}</div>
    </div>

    <div class="checkout-section">
      <div class="cs-title" style="margin-bottom:var(--space-3);">What's your payment information?</div>
      <div class="cs-sub">Enter your card information</div>
      <div class="cs-sub" style="margin-bottom:var(--space-3);">All transactions are secure and encrypted</div>
      <div style="position:relative; display:flex; align-items:center; gap:var(--space-2); padding:14px 16px; border:1px solid var(--color-border); border-radius:var(--r-md); margin-bottom:var(--space-3);">
        <span style="background:#1a3d80; color:white; padding:2px 8px; border-radius:4px; font-size:11px; font-weight:700;">VISA</span>
        <input style="border:none; outline:none; flex:1; font-size:15px;" placeholder="1234 1234 1234 1234" id="card-num" oninput="collectPayment()" maxlength="19">
        <span style="font-size:11px; color:var(--color-text-muted);">EXP</span>
        <input style="border:none; outline:none; width:50px; font-size:15px;" placeholder="MM/YY" id="card-exp" oninput="collectPayment()">
        <span style="font-size:11px; color:var(--color-text-muted);">CSV</span>
        <input style="border:none; outline:none; width:50px; font-size:15px;" placeholder="123" id="card-csv" oninput="collectPayment()">
        <span style="font-size:11px; color:var(--color-text-muted);">ZIP</span>
        <input style="border:none; outline:none; width:60px; font-size:15px;" placeholder="00000" id="card-zip" oninput="collectPayment()">
      </div>
      <a class="cs-edit" style="display:inline-block; margin-bottom:var(--space-4);">Delete</a>

      <button class="btn btn-primary btn-block btn-lg" onclick="nextStep()">Continue</button>

      <div style="margin-top:var(--space-4); display:flex; flex-direction:column; gap:var(--space-2); font-size:14px;">
        <label class="checkbox-line" style="margin:0;"><input type="checkbox"> Pay on delivery?</label>
        <label class="checkbox-line" style="margin:0;"><input type="checkbox"> Cash?</label>
      </div>
      <div style="margin-top:var(--space-4);">
        <label class="checkbox-line" style="margin:0;"><input type="checkbox"> Receive email updates and special promo offers?</label>
      </div>
    </div>
  `;
}

function renderCheckoutStep3() {
  const d = State.checkoutData;
  return `
    <h1 class="checkout-h">Checkout <a class="back-link" onclick="navigate('cart')">Back to shopping</a></h1>
    <div class="checkout-section">
      <div class="cs-head">
        <div class="cs-title">Shipping</div>
        <a class="cs-edit" onclick="State.checkoutStep=1; renderCurrent();">Edit</a>
      </div>
      <div style="font-size:14px; line-height:1.6;">
        <div style="font-weight:600;">${d.address.firstName || 'Sonia'} ${d.address.lastName || 'Mark'}</div>
        <div>${d.address.address || '1247 Maple Street'}</div>
        ${d.address.apt ? `<div>${d.address.apt}</div>` : ''}
        <div>${d.address.city || 'Springfield'}, ${d.address.state || 'IL'} ${d.address.zip || '62704'}</div>
        <div>${d.address.country || 'United States'}</div>
      </div>
    </div>
    <div class="checkout-section">
      <div class="cs-head">
        <div class="cs-title">Delivery</div>
        <a class="cs-edit" onclick="State.checkoutStep=1; renderCurrent();">Edit</a>
      </div>
      <div style="font-size:14px;">Standard - free</div>
    </div>
    <div class="checkout-section">
      <div class="cs-head">
        <div class="cs-title">Payment</div>
        <a class="cs-edit" onclick="State.checkoutStep=2; renderCurrent();">Edit</a>
      </div>
      <div style="font-size:14px;">Visa, ending in ${(d.payment.cardNum || '4030 2100 5030 2020').replace(/\s/g,'').slice(-4)}</div>
    </div>
    <div style="color:var(--color-link); font-weight:600; font-size:14px; margin-top:var(--space-3);">Everything looking good?</div>
    <button class="btn btn-primary btn-block btn-lg" style="margin-top:var(--space-4);" onclick="finishOrder()">Continue</button>
  `;
}

function collectAddress() {
  State.checkoutData.address = {
    country: document.getElementById('addr-country')?.value || '',
    firstName: document.getElementById('addr-fn')?.value || '',
    lastName: document.getElementById('addr-ln')?.value || '',
    address: document.getElementById('addr-addr')?.value || '',
    apt: document.getElementById('addr-apt')?.value || '',
    city: document.getElementById('addr-city')?.value || '',
    state: document.getElementById('addr-state')?.value || '',
    zip: document.getElementById('addr-zip')?.value || '',
    phone: document.getElementById('addr-phone')?.value || '',
  };
}
function collectPayment() {
  State.checkoutData.payment = {
    cardNum: document.getElementById('card-num')?.value || '',
    exp: document.getElementById('card-exp')?.value || '',
    csv: document.getElementById('card-csv')?.value || '',
    zip: document.getElementById('card-zip')?.value || '',
  };
}

function nextStep() {
  if (State.checkoutStep === 1) collectAddress();
  if (State.checkoutStep === 2) collectPayment();
  if (State.checkoutStep < 4) {
    State.checkoutStep++;
    renderCurrent();
  }
}

function finishOrder() {
  // Show OTP screen
  State.checkoutStep = 4;
  renderOtp();
}

function renderOtp() {
  const total = getCartTotal() - getDiscount();
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="checkout-bg">
      <div class="container">
        <div class="checkout-layout">
          <div class="checkout-card otp-card fade-in">
            <h2 class="otp-title">OTP</h2>
            <p class="otp-text">Please enter the 6 digits code we sent to your number to complete your purchase!</p>
            <div class="otp-inputs">
              ${[1,2,3,4,5,6].map(i => `<input class="otp-in" maxlength="1" oninput="otpNext(this, ${i})" onkeydown="if(event.key==='Backspace' && !this.value && this.previousElementSibling) this.previousElementSibling.focus();" id="otp-${i}">`).join('')}
            </div>
            <button class="btn btn-primary btn-block btn-lg" onclick="verifyOtp()">Pay</button>
          </div>
          <aside class="cart-summary summary-sticky">
            <div class="summary-title">Order summary</div>
            <div class="summary-row"><span>Item total(${State.cart.length} items):</span><span>${money(getCartTotal())}</span></div>
            <div class="summary-row"><span>Shipping fee</span><span>$free</span></div>
            ${getDiscount() > 0 ? `<div class="summary-row discount"><span>Item discount:</span><span>−${money(getDiscount())}</span></div>` : ''}
            <div class="summary-row total"><span>Total:</span><span>${money(total)}</span></div>
            <div class="trust">
              <div class="trust-title">You're protected on Theshop.com</div>
              <div class="trust-row">${ICONS.shield}<span>Secure payment</span></div>
              <div class="trust-row">${ICONS.refresh}<span>Refund and returns</span></div>
              <div class="trust-row">${ICONS.box}<span>Fulfillment by Theshop.com Logistics</span></div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  `;
  setTimeout(() => {
    const f = document.getElementById('otp-1');
    if (f) f.focus();
  }, 100);
}

function otpNext(el, i) {
  if (el.value && i < 6) {
    document.getElementById('otp-' + (i+1)).focus();
  }
  if (el.value) el.classList.add('filled');
}

function verifyOtp() {
  // For demo, any 6 digits works. Pre-fill with 6730**.
  const code = [1,2,3,4,5,6].map(i => document.getElementById('otp-'+i)?.value).join('');
  if (code.length < 4) {
    showToast('Please enter the code');
    return;
  }
  // Success
  State.cart = [];
  saveState();
  renderHeader();
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="container section" style="text-align:center; padding-top:80px; padding-bottom:80px;">
      <div style="width:80px; height:80px; background:var(--color-success); border-radius:50%; display:flex; align-items:center; justify-content:center; color:white; margin:0 auto var(--space-5);">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
      </div>
      <h1 style="font-size:36px; margin-bottom:var(--space-3);">Order placed!</h1>
      <p style="font-size:16px; color:var(--color-text-muted); max-width:500px; margin:0 auto var(--space-6);">Thank you for your purchase. We've sent a confirmation to your email. Your order will arrive in 7-10 business days.</p>
      <div style="display:flex; gap:var(--space-3); justify-content:center;">
        <a class="btn btn-primary" onclick="navigate('account')">View orders</a>
        <a class="btn btn-ghost" onclick="navigate('home')" style="border-color:var(--color-primary);">Continue shopping</a>
      </div>
    </div>
    ${renderFooter()}
  `;
}

// ===========================================
// Sign in
// ===========================================
function renderSignIn() {
  return `
    <div class="modal-page-wrap" style="background:url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80') center/cover no-repeat; min-height:100vh; display:flex; align-items:center; justify-content:center; padding:var(--space-5);">
      <div style="position:absolute; inset:0; background:rgba(255,255,255,.55); backdrop-filter:blur(6px);"></div>
      <div class="modal modal-on-bg" style="position:relative; z-index:1; background:rgba(255,255,255,.92);">
        <button class="modal-close" onclick="navigate('home')">${ICONS.x}</button>
        <h2>Sign in</h2>
        <div class="field-row">
          <label style="font-size:13px; font-weight:500;">Email or phone number</label>
          <input class="field" value="Sonia.d@gmail.com">
        </div>
        <button class="btn btn-primary btn-block" onclick="doSignin()">Sign in</button>
        <button class="btn btn-block" style="margin-top:var(--space-3); background:white; border:1.5px solid var(--color-primary);" onclick="navigate('register')">Create an account</button>
        <div class="modal-divider">Or</div>
        <div class="social-row">
          <button class="social-btn">${ICONS.google} Continue with Google</button>
          <button class="social-btn">${ICONS.facebook} Continue with Facebook</button>
        </div>
        <p class="terms">By continuing, you agree to TheShop's <a>Conditions of use</a> and <a>Privacy Notice</a>.</p>
      </div>
    </div>
  `;
}

function renderRegister() {
  return `
    <div class="modal-page-wrap" style="background:url('https://images.unsplash.com/photo-1495856458515-0637185db551?w=1920&q=80') center/cover no-repeat; min-height:100vh; display:flex; align-items:center; justify-content:center; padding:var(--space-5);">
      <div style="position:absolute; inset:0; background:rgba(0,0,0,.45); backdrop-filter:blur(6px);"></div>
      <div class="modal" style="position:relative; z-index:1; background:white;">
        <button class="modal-close" onclick="navigate('home')">${ICONS.x}</button>
        <h2>Register</h2>
        <div class="field-row"><label style="font-size:13px; font-weight:500;">Your name</label><input class="field" placeholder="Name"></div>
        <div class="field-row"><label style="font-size:13px; font-weight:500;">Mobile number or email</label><input class="field" placeholder="Mobile number or email"></div>
        <div class="field-row"><label style="font-size:13px; font-weight:500;">Password</label><input class="field" type="password" placeholder="Password"></div>
        <div class="field-row"><label style="font-size:13px; font-weight:500;">Re-enter password</label><input class="field" type="password" placeholder="Password"></div>
        <button class="btn btn-primary btn-block" onclick="doRegister()">Register</button>
        <p class="terms">By creating an account, you agree to TheShop's <a>Conditions of use</a> and <a>Privacy Notice</a>.</p>
        <div style="text-align:center; margin-top:var(--space-5); padding-top:var(--space-4); border-top:1px solid var(--color-border-light); font-size:13px;">
          Already have an account? <a style="color:var(--color-link); text-decoration:underline; cursor:pointer;" onclick="navigate('signin')">Sign in</a>
        </div>
      </div>
    </div>
  `;
}

function doSignin() {
  State.user = { name: 'Sonia' };
  saveState();
  renderHeader();
  showToast('Welcome back, Sonia!');
  navigate('home');
}
function doRegister() {
  State.user = { name: 'Friend' };
  saveState();
  renderHeader();
  showToast('Account created!');
  navigate('home');
}

// ===========================================
// Account
// ===========================================
function renderAccount() {
  if (!State.user) {
    navigate('signin');
    return '';
  }
  return `
    <div class="container">
      <div class="breadcrumb">
        <a onclick="navigate('home')">Home</a>
        <span class="sep">›</span>
        <span style="font-weight:600; color:var(--color-text);">Account</span>
      </div>
      <div class="account-layout">
        <aside class="account-nav">
          <a class="account-nav-item active">Your Orders</a>
          <a class="account-nav-item">Shipping</a>
          <a class="account-nav-item">Addresses</a>
          <a class="account-nav-item">Payments & Credits</a>
          <a class="account-nav-item">Archived orders</a>
          <a class="account-nav-item">Login & security</a>
          <a class="account-nav-item">Returns</a>
          <a class="account-nav-item">Reviews</a>
          <a class="account-nav-item">Help</a>
          <a class="account-nav-item" onclick="State.user=null; saveState(); renderHeader(); navigate('home');">Logout</a>
        </aside>
        <div class="account-content">
          <h2 style="font-size:32px; color:#0f1a1f;">No orders yet</h2>
          <p style="color:#3a4347; margin-top:8px;">Looks like you haven't placed any order yet!</p>
          <button class="btn btn-primary" style="margin-top:var(--space-5);" onclick="navigate('home')">Back to shop</button>
        </div>
      </div>
    </div>
    ${renderFooter()}
  `;
}

// ===========================================
// Footer
// ===========================================
function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-col">
            <div class="brand" style="margin-bottom:var(--space-3);">THESHOP<span class="dot">.</span>com</div>
            <p>Your one-stop shop for everything you need. From electronics to fashion, home essentials to beauty products — all delivered to your door.</p>
          </div>
          <div class="footer-col">
            <h4>Shop</h4>
            <a>New arrivals</a>
            <a>Trending</a>
            <a>Today's deals</a>
            <a>Refurbished</a>
            <a>Gift cards</a>
          </div>
          <div class="footer-col">
            <h4>Support</h4>
            <a>Help center</a>
            <a>Contact us</a>
            <a>Shipping</a>
            <a>Returns</a>
            <a>Order tracking</a>
          </div>
          <div class="footer-col">
            <h4>Company</h4>
            <a>About us</a>
            <a>Careers</a>
            <a>Press</a>
            <a>Sustainability</a>
            <a>Affiliates</a>
          </div>
          <div class="footer-col">
            <h4>Legal</h4>
            <a>Terms of service</a>
            <a>Privacy policy</a>
            <a>Cookie policy</a>
            <a>Accessibility</a>
          </div>
        </div>
        <div class="footer-bot">
          <div>© 2026 TheShop.com. All rights reserved.</div>
          <div>🌍 Nigeria · English-USD</div>
        </div>
      </div>
    </footer>
  `;
}

// ===========================================
// Toasts
// ===========================================
function showToast(msg) {
  let host = document.querySelector('.toast-host');
  if (!host) {
    host = document.createElement('div');
    host.className = 'toast-host';
    document.body.appendChild(host);
  }
  const t = document.createElement('div');
  t.className = 'toast';
  t.innerHTML = `${ICONS.check} ${escape(msg)}`;
  host.appendChild(t);
  setTimeout(() => {
    t.style.opacity = '0';
    t.style.transform = 'translateY(20px)';
    t.style.transition = 'all .3s';
    setTimeout(() => t.remove(), 300);
  }, 2400);
}

// ===========================================
// Init
// ===========================================
function bootApp() {
  try {
    renderHeader();
    renderCurrent();
    if (typeof setupMotion === 'function') setupMotion();
  } catch (e) {
    console.error('Boot error:', e);
    const app = document.getElementById('app');
    if (app) {
      app.innerHTML = `
        <div style="padding:40px; text-align:center; font-family:system-ui;">
          <h1>Something went wrong</h1>
          <p>${e.message}</p>
          <p style="color:#666;">Try reloading the page or check the console.</p>
        </div>`;
    }
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootApp);
} else {
  bootApp();
}

// Re-render header on resize for responsiveness
window.addEventListener('resize', () => {
  // optional
});
