// ===========================================
// TheShop - Motion (Framer-Motion inspired)
// Lightweight vanilla JS animation utilities
// ===========================================

const Motion = {
  // Intersection-based reveal: animates an element when it enters viewport
  reveal(selector, options = {}) {
    const els = document.querySelectorAll(selector);
    if (!els.length) return;
    const config = {
      threshold: 0.05,
      rootMargin: '0px 0px -10px 0px',
      once: true,
      ...options
    };
    // First: immediately reveal any element already in the viewport
    const reveal = (el) => el.classList.add('visible');
    const isInView = (el) => {
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    };
    // Schedule a slight delay so layout finishes
    requestAnimationFrame(() => {
      els.forEach(el => {
        if (isInView(el)) {
          reveal(el);
        }
      });
    });
    // Then observe the rest for scroll-in
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          if (config.once) obs.unobserve(entry.target);
        } else if (!config.once) {
          entry.target.classList.remove('visible');
        }
      });
    }, config);
    els.forEach(el => {
      if (!el.classList.contains('visible')) obs.observe(el);
    });
    return obs;
  },

  // Animate a number from one value to another
  countTo(el, target, duration = 800) {
    const start = parseFloat(el.textContent) || 0;
    const startTime = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      const val = start + (target - start) * eased;
      el.textContent = Math.round(val).toLocaleString();
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  },

  // Smooth scroll to element
  scrollTo(target, offset = 0) {
    const el = typeof target === 'string' ? document.querySelector(target) : target;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  },

  // Scroll progress bar
  initScrollProgress() {
    let bar = document.querySelector('.scroll-progress');
    if (!bar) {
      bar = document.createElement('div');
      bar.className = 'scroll-progress';
      document.body.appendChild(bar);
    }
    const update = () => {
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      bar.style.width = Math.min(100, Math.max(0, pct)) + '%';
    };
    window.addEventListener('scroll', update, { passive: true });
    update();
  },

  // Bump a quantity input value briefly
  bumpElement(el) {
    el.classList.add('bump');
    setTimeout(() => el.classList.remove('bump'), 300);
  },

  // Smooth-filterable list: fade out, swap, fade in
  swapList(container, newHTML, duration = 250) {
    container.style.transition = `opacity ${duration}ms ease`;
    container.style.opacity = '0';
    setTimeout(() => {
      container.innerHTML = newHTML;
      container.style.opacity = '1';
      // Re-run reveal observer
      Motion.reveal('.reveal, .stagger');
    }, duration);
  },

  // Shake an element
  shake(el) {
    el.classList.add('shake');
    setTimeout(() => el.classList.remove('shake'), 400);
  },

  // Lightweight spring-like transform animation
  spring(el, fromProps, toProps, options = {}) {
    const config = {
      stiffness: 200,
      damping: 20,
      duration: 500,
      ...options
    };
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / config.duration);
      // Damped spring approximation
      const eased = 1 - Math.pow(1 - t, 3);
      for (const key in toProps) {
        const fromVal = fromProps[key] || 0;
        const toVal = toProps[key];
        el.style[key] = (fromVal + (toVal - fromVal) * eased) + 'px';
      }
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
};

// Hook into page navigation
function setupMotion() {
  // Initial reveals
  Motion.reveal('.reveal, .stagger');
  // Scroll progress
  Motion.initScrollProgress();
  // Smooth scroll for any in-page anchor
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const href = a.getAttribute('href');
    if (href.length > 2) {
      // It's an in-page link, not a route
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        Motion.scrollTo(target, 100);
      }
    }
  });
}
