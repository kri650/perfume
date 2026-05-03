/* ═══════════════════════════════════════════════════
   Golden River — Global UI (Nav badges, observers)
   ═══════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  updateNavBadges();

  // Listen for store changes
  window.addEventListener('cart-updated', updateNavBadges);
  window.addEventListener('wishlist-updated', updateNavBadges);

  // Intersection observer for fade-in animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        if (e.target.classList.contains('reveal-on-scroll')) {
          e.target.classList.add('is-visible');
        }
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
        e.target.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(
    '.cat-tile, .product-card, .testimonial-card, .feature-panel, .trust-item, .stat-item, .value-card, .store-card, .team-card, .timeline-item, .frag-level'
  ).forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(18px)';
    observer.observe(el);
  });

  // Elements that use class-based scroll reveals (no inline transforms)
  document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));

  // Mobile menu toggle
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  if (mobileBtn) {
    mobileBtn.addEventListener('click', () => {
      mobileBtn.classList.toggle('open');
      const subnav = document.querySelector('.subnav');
      if (subnav) {
        subnav.style.display = subnav.style.display === 'none' ? 'flex' : 'none';
      }
    });
  }
});

function updateNavBadges() {
  // Cart badge
  const cartCount = GRStore.getCartCount();
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = cartCount;
    el.style.display = cartCount > 0 ? 'flex' : 'none';
  });

  // Wishlist badge
  const wishlistCount = GRStore.getWishlist().length;
  document.querySelectorAll('.wishlist-count').forEach(el => {
    el.textContent = wishlistCount;
    el.style.display = wishlistCount > 0 ? 'flex' : 'none';
  });
}
