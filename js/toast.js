/* ═══════════════════════════════════════════════════
   Golden River — Toast Notification System
   ═══════════════════════════════════════════════════ */

const GRToast = {
  container: null,

  init() {
    if (!document.querySelector('.toast-container')) {
      this.container = document.createElement('div');
      this.container.className = 'toast-container';
      document.body.appendChild(this.container);
    } else {
      this.container = document.querySelector('.toast-container');
    }
  },

  show(message, duration = 3000) {
    if (!this.container) this.init();

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="7" stroke="#A8813A" stroke-width="1"/>
        <path d="M5 8l2 2 4-4" stroke="#A8813A" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span>${message}</span>
    `;
    this.container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('out');
      setTimeout(() => toast.remove(), 400);
    }, duration);
  }
};

// Auto-init on DOM ready
document.addEventListener('DOMContentLoaded', () => GRToast.init());
