/* ═══════════════════════════════════════════════════
   Golden River — Shared Product Data
   Products are defined here so all pages share the
   same catalog. Replace images by adding an `image`
   property to each product object.
   ═══════════════════════════════════════════════════ */

const GRProducts = [
  // ── FOR HIM ──
  { id: 'noir-oud', name: 'Noir Oud', category: 'For Him', type: 'Woody · Smoky', price: 4799, originalPrice: 6000, badge: 'Best Seller', size: '50ml', sizes: ['10ml','30ml','50ml','100ml'], image: 'vecteezy_ai-generated-isolated-luxury-scent-bottle-in-png_38595575.png' },
  { id: 'river-mist', name: 'River Mist', category: 'For Him', type: 'Aquatic · Fresh', price: 3999, originalPrice: 5000, badge: 'New', size: '50ml', sizes: ['10ml','30ml','50ml','100ml'], image: 'vecteezy_ai-generated-perfume-elegance-with-no-background-distractions_38595590.png' },
  { id: 'velvet-spice', name: 'Velvet Spice', category: 'For Him', type: 'Spicy · Oriental', price: 4399, originalPrice: 5500, badge: 'Best Seller', size: '50ml', sizes: ['10ml','30ml','50ml','100ml'], image: 'vecteezy_ai-generated-a-black-perfume-bottle-on-a-transparent-background_36526879.png' },
  { id: 'cedar-green', name: 'Cedar Green', category: 'For Him', type: 'Woody · Green', price: 2999, originalPrice: 4500, badge: 'Sale', size: '50ml', sizes: ['10ml','30ml','50ml','100ml'], image: 'vecteezy_ai-generated-perfume-glass-isolated-on-transparent-background_35940259.png' },
  { id: 'amber-king', name: 'Amber King', category: 'For Him', type: 'Amber · Warm', price: 5499, originalPrice: null, badge: '', size: '50ml', sizes: ['30ml','50ml','100ml'] },
  { id: 'royal-leather', name: 'Royal Leather', category: 'For Him', type: 'Leather · Tobacco', price: 5999, originalPrice: 7000, badge: 'Sale', size: '50ml', sizes: ['30ml','50ml','100ml'] },

  // ── FOR HER ──
  { id: 'aurum-rose', name: 'Aurum Rose', category: 'For Her', type: 'Floral · Rose', price: 3999, originalPrice: 5000, badge: 'Best Seller', size: '50ml', sizes: ['10ml','30ml','50ml','100ml'] },
  { id: 'blush-jasmine', name: 'Blush Jasmine', category: 'For Her', type: 'Floral · Fruity', price: 4499, originalPrice: 5500, badge: 'New', size: '50ml', sizes: ['10ml','30ml','50ml','100ml'] },
  { id: 'iris-nuit', name: 'Iris Nuit', category: 'For Her', type: 'Floral · Powdery', price: 4999, originalPrice: null, badge: '', size: '50ml', sizes: ['10ml','30ml','50ml','100ml'] },
  { id: 'white-peony', name: 'White Peony', category: 'For Her', type: 'Fresh · Floral', price: 2799, originalPrice: 4000, badge: 'Sale', size: '50ml', sizes: ['10ml','30ml','50ml','100ml'] },
  { id: 'golden-tuberose', name: 'Golden Tuberose', category: 'For Her', type: 'Floral · Musky', price: 5299, originalPrice: null, badge: 'New', size: '50ml', sizes: ['30ml','50ml','100ml'] },

  // ── UNISEX ──
  { id: 'velvet-saffron', name: 'Velvet Saffron', category: 'Unisex', type: 'Spicy · Warm', price: 5999, originalPrice: 7000, badge: 'Best Seller', size: '50ml', sizes: ['10ml','30ml','50ml','100ml'] },
  { id: 'midnight-amber', name: 'Midnight Amber', category: 'Unisex', type: 'Amber · Woody', price: 4599, originalPrice: null, badge: '', size: '50ml', sizes: ['30ml','50ml','100ml'] },

  // ── ATTAR ──
  { id: 'oudh-mukhallat', name: 'Oudh Mukhallat', category: 'Attar', type: 'Non-Alcoholic · 6ml', price: 1999, originalPrice: 2500, badge: 'Best Seller', size: '6ml', sizes: ['3ml','6ml','12ml'] },
  { id: 'rose-attar', name: 'Rose Attar', category: 'Attar', type: 'Non-Alcoholic · 6ml', price: 1799, originalPrice: null, badge: '', size: '6ml', sizes: ['3ml','6ml','12ml'] },
  { id: 'misk-sapphire', name: 'Misk Sapphire', category: 'Attar', type: 'Non-Alcoholic · 10ml', price: 2499, originalPrice: null, badge: 'New', size: '10ml', sizes: ['3ml','6ml','10ml'] },
  { id: 'amber-wood', name: 'Amber Wood', category: 'Attar', type: 'Non-Alcoholic · 6ml', price: 1699, originalPrice: 2200, badge: '', size: '6ml', sizes: ['3ml','6ml','12ml'] },

  // ── GIFT SETS ──
  { id: 'golden-trio', name: 'Golden Trio', category: 'Gift Sets', type: 'Gift Set · 3x10ml', price: 3499, originalPrice: 4500, badge: 'Popular', size: 'Set', sizes: ['Set'] },
  { id: 'royal-collection', name: 'Royal Collection', category: 'Gift Sets', type: 'Gift Set · Luxury', price: 6999, originalPrice: null, badge: 'New', size: 'Set', sizes: ['Set'] },
  { id: 'his-hers-duo', name: 'His & Hers Duo', category: 'Gift Sets', type: 'Couple Set · 2x50ml', price: 6999, originalPrice: 9000, badge: '', size: 'Set', sizes: ['Set'] },
  { id: 'attar-discovery', name: 'Attar Discovery Set', category: 'Gift Sets', type: 'Attar Gift Pack · 5x5ml', price: 2199, originalPrice: 3500, badge: 'Sale', size: 'Set', sizes: ['Set'] },
];

// Helper: format ₹ currency
function formatPrice(amount) {
  return '₹' + amount.toLocaleString('en-IN');
}

// Helper: get product by ID
function getProductById(id) {
  return GRProducts.find(p => p.id === id);
}

// Helper: render product card HTML
function renderProductCard(product, options = {}) {
  const { showWishlistBtn = true, showRemoveWishlist = false } = options;
  const inWishlist = GRStore.isInWishlist(product.id);
  const discount = product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : 0;
  // Escape name for safe use inside inline event handler strings
  const safeName = product.name.replace(/'/g, "\\'").replace(/&/g, '&amp;');

  let badgeHTML = '';
  if (product.badge === 'Best Seller') badgeHTML = '<span class="product-badge">Best Seller</span>';
  else if (product.badge === 'New') badgeHTML = '<span class="product-badge new">New</span>';
  else if (product.badge === 'Sale') badgeHTML = '<span class="product-badge sale">Sale</span>';
  else if (product.badge === 'Popular') badgeHTML = '<span class="product-badge">Popular</span>';

  let priceHTML = '';
  if (product.originalPrice) {
    priceHTML = `<del>${formatPrice(product.originalPrice)}</del> ${formatPrice(product.price)} <span class="discount">${discount}% Off</span>`;
  } else {
    priceHTML = formatPrice(product.price);
  }

  const removeBtn = showRemoveWishlist ? `
    <button class="remove-wishlist" onclick="event.stopPropagation(); GRStore.removeFromWishlist('${product.id}'); renderWishlistPage();" title="Remove from wishlist">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 1l12 12M13 1L1 13" stroke="#8A7D72" stroke-width="1.2"/></svg>
    </button>
  ` : '';

  const wishlistBtnHTML = showWishlistBtn ? `
    <button class="wishlist-btn ${inWishlist ? 'active' : ''}" onclick="event.stopPropagation(); GRStore.toggleWishlist({id:'${product.id}',name:'${safeName}',category:'${product.category}',type:'${product.type}',price:${product.price},originalPrice:${product.originalPrice},badge:'${product.badge}',size:'${product.size}',sizes:${JSON.stringify(product.sizes)}}); this.classList.toggle('active');">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="${inWishlist ? '#C9A96E' : 'none'}"><path d="M8 14s-5.5-3.5-5.5-7A3.5 3.5 0 0 1 8 4.5 3.5 3.5 0 0 1 13.5 7C13.5 10.5 8 14 8 14z" stroke="${inWishlist ? '#C9A96E' : 'currentColor'}" stroke-width="1"/></svg>
    </button>
  ` : '';

  // Determine correct path prefix based on current page location
  const isInPages = window.location.pathname.includes('/pages/');
  const productPath = isInPages ? `product.html?id=${product.id}` : `pages/product.html?id=${product.id}`;

  return `
    <div class="product-card" onclick="window.location.href='${productPath}'">
      ${removeBtn}
      <div class="product-img-wrap">
        ${badgeHTML}
        <div class="product-img-placeholder">
          ${product.image ? `<img class="product-img" src="${isInPages ? '../' : ''}assets/${encodeURIComponent(product.image)}" alt="${safeName}">` : `
          <svg width="60" height="120" viewBox="0 0 60 120" xmlns="http://www.w3.org/2000/svg">
            <rect x="22" y="4" width="16" height="16" rx="2" fill="#C9A96E"/>
            <rect x="16" y="20" width="28" height="8" rx="1" fill="#A8813A"/>
            <path d="M6 28 Q6 36 2 42 L2 100 Q2 110 30 110 Q58 110 58 100 L58 42 Q54 36 54 28 Z" fill="#A8813A"/>
          </svg>
          <span>Product Image</span>
          `}
        </div>
        <div class="product-actions">
          <button class="add-to-cart" onclick="event.stopPropagation(); GRStore.addToCart({id:'${product.id}',name:'${safeName}',category:'${product.category}',type:'${product.type}',price:${product.price},originalPrice:${product.originalPrice},size:'${product.size}'});">Add to Cart</button>
          ${wishlistBtnHTML}
        </div>
      </div>
      <div class="product-info">
        <div class="product-category">${product.type}</div>
        <div class="product-name">${product.name}</div>
        <div class="product-price">${priceHTML}</div>
      </div>
    </div>
  `;
}
