document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  highlightActiveNav();
  initCategoryFilters();
  initSearchFilters();
  initLightbox();
  init3DTilt();
  initMouseEffects();
  initForms();
});

function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
    });
  }
}

function highlightActiveNav() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

function initCategoryFilters() {
  const filterButtons = document.querySelectorAll('[data-filter-btn]');
  const filterItems = document.querySelectorAll('[data-category]');

  if (filterButtons.length === 0 || filterItems.length === 0) return;

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetCategory = btn.getAttribute('data-filter-btn');

      filterButtons.forEach(b => {
        b.classList.remove('bg-[#6d28d9]', 'text-white', 'shadow-md', 'scale-105');
        b.classList.add('bg-[#fcfbff]', 'text-[#23124f]', 'border', 'border-[#d4c8ff]', 'hover:bg-[#ede8ff]');
      });
      btn.classList.add('bg-[#6d28d9]', 'text-white', 'shadow-md', 'scale-105');
      btn.classList.remove('bg-[#fcfbff]', 'text-[#23124f]', 'border', 'border-[#d4c8ff]', 'hover:bg-[#ede8ff]');

      filterItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (targetCategory === 'all' || itemCategory.includes(targetCategory)) {
          item.classList.remove('hidden');
          item.style.animation = 'float 0.4s ease forwards';
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });
}

function initSearchFilters() {
  const searchInput = document.getElementById('filter-search');
  if (!searchInput) return;

  const searchableItems = document.querySelectorAll('[data-searchable]');

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();

    searchableItems.forEach(item => {
      const text = item.getAttribute('data-searchable').toLowerCase() + ' ' + item.textContent.toLowerCase();
      if (text.includes(query)) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });
  });
}

function init3DTilt() {
  const tiltCards = document.querySelectorAll('.tilt-element');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  });
}

function initMouseEffects() {
  const themeColors = ['#6d28d9', '#00cfff', '#ff4fcf', '#4CAF50', '#8b5cf6', '#d4c8ff'];
  let lastSpawn = 0;

  window.addEventListener('mousemove', (e) => {
    const now = Date.now();
    if (now - lastSpawn < 30) return;
    lastSpawn = now;

    const isStar = Math.random() > 0.55;
    const randomColor = themeColors[Math.floor(Math.random() * themeColors.length)];
    const randomSize = Math.floor(Math.random() * 8) + 6;
    const offsetX = (Math.random() - 0.5) * 16;
    const offsetY = (Math.random() - 0.5) * 16;

    if (isStar) {
      const star = document.createElement('div');
      star.className = 'mouse-star';
      star.style.left = `${e.clientX + offsetX}px`;
      star.style.top = `${e.clientY + offsetY}px`;
      star.style.color = randomColor;
      star.innerHTML = `
        <svg width="${randomSize + 4}" height="${randomSize + 4}" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L14.4 8.6L21 9.2L16 13.8L17.5 20.4L12 17L6.5 20.4L8 13.8L3 9.2L9.6 8.6L12 2Z"/>
        </svg>
      `;
      document.body.appendChild(star);
      setTimeout(() => star.remove(), 900);
    } else {
      const bubble = document.createElement('div');
      bubble.className = 'mouse-particle';
      bubble.style.left = `${e.clientX + offsetX}px`;
      bubble.style.top = `${e.clientY + offsetY}px`;
      bubble.style.width = `${randomSize}px`;
      bubble.style.height = `${randomSize}px`;
      bubble.style.backgroundColor = randomColor;
      bubble.style.boxShadow = `0 0 10px ${randomColor}`;
      document.body.appendChild(bubble);
      setTimeout(() => bubble.remove(), 1000);
    }
  });
}

function initLightbox() {
  const galleryItems = document.querySelectorAll('.gallery-thumb');
  const lightbox = document.getElementById('gallery-lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const closeBtn = document.getElementById('lightbox-close');

  if (!lightbox || galleryItems.length === 0) return;

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const src = item.getAttribute('data-full-img') || item.getAttribute('src');
      const caption = item.getAttribute('data-caption') || item.getAttribute('alt') || 'Campus View';
      
      if (lightboxImg) lightboxImg.src = src;
      if (lightboxCaption) lightboxCaption.textContent = caption;
      lightbox.classList.add('active');
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => lightbox.classList.remove('active'));
  }

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove('active');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      lightbox.classList.remove('active');
    }
  });
}

function initForms() {
  const forms = document.querySelectorAll('form[data-ajax-submit]');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : 'Submit';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i> Submitting...';
      }

      setTimeout(() => {
        showToast('Application sent successfully! Our admissions officer will contact you within 24 hours.');
        form.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }
      }, 700);
    });
  });
}

function showToast(message) {
  const existing = document.getElementById('app-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'app-toast';
  toast.className = 'fixed bottom-6 right-6 bg-[#fcfbff] text-[#23124f] px-5 py-4 rounded-2xl shadow-2xl z-50 flex items-center gap-3 border-2 border-[#6d28d9] animate-float';
  toast.innerHTML = `
    <div class="w-8 h-8 rounded-full bg-[#e8f5e9] text-[#4CAF50] flex items-center justify-center shrink-0">
      <i class="fa-solid fa-circle-check text-lg"></i>
    </div>
    <span class="text-sm font-bold">${message}</span>
  `;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 4500);
}
