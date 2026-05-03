/* ═══════════════════════════════════════════════════
   Golden River — Store (Cart + Wishlist State)
   ═══════════════════════════════════════════════════ */

const GRStore = {
  // ── Wishlist ──
  getWishlist() {
    try { return JSON.parse(localStorage.getItem('gr_wishlist')) || []; }
    catch { return []; }
  },

  addToWishlist(product) {
    const list = this.getWishlist();
    if (!list.find(p => p.id === product.id)) {
      list.push(product);
      localStorage.setItem('gr_wishlist', JSON.stringify(list));
      this._dispatch('wishlist-updated');
      GRToast.show(`${product.name} added to wishlist`);
    }
  },

  removeFromWishlist(productId) {
    let list = this.getWishlist();
    const item = list.find(p => p.id === productId);
    list = list.filter(p => p.id !== productId);
    localStorage.setItem('gr_wishlist', JSON.stringify(list));
    this._dispatch('wishlist-updated');
    if (item) GRToast.show(`${item.name} removed from wishlist`);
  },

  isInWishlist(productId) {
    return this.getWishlist().some(p => p.id === productId);
  },

  toggleWishlist(product) {
    if (this.isInWishlist(product.id)) {
      this.removeFromWishlist(product.id);
    } else {
      this.addToWishlist(product);
    }
  },

  // ── Cart ──
  getCart() {
    try { return JSON.parse(localStorage.getItem('gr_cart')) || []; }
    catch { return []; }
  },

  addToCart(product, qty = 1) {
    const cart = this.getCart();
    const existing = cart.find(p => p.id === product.id && p.size === product.size);
    if (existing) {
      existing.qty += qty;
    } else {
      cart.push({ ...product, qty });
    }
    localStorage.setItem('gr_cart', JSON.stringify(cart));
    this._dispatch('cart-updated');
    GRToast.show(`${product.name} added to cart`);
  },

  removeFromCart(productId, size) {
    let cart = this.getCart();
    cart = cart.filter(p => !(p.id === productId && p.size === size));
    localStorage.setItem('gr_cart', JSON.stringify(cart));
    this._dispatch('cart-updated');
  },

  updateCartQty(productId, size, qty) {
    const cart = this.getCart();
    const item = cart.find(p => p.id === productId && p.size === size);
    if (item) {
      item.qty = Math.max(1, qty);
      localStorage.setItem('gr_cart', JSON.stringify(cart));
      this._dispatch('cart-updated');
    }
  },

  getCartTotal() {
    return this.getCart().reduce((sum, item) => sum + (item.price * item.qty), 0);
  },

  getCartCount() {
    return this.getCart().reduce((sum, item) => sum + item.qty, 0);
  },

  clearCart() {
    localStorage.setItem('gr_cart', JSON.stringify([]));
    this._dispatch('cart-updated');
  },

  // ── Internal ──
  _dispatch(eventName) {
    window.dispatchEvent(new CustomEvent(eventName));
  }
};
