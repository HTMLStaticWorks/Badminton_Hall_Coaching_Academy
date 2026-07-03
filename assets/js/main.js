/* ==========================================================================
   RALLYX - Core JavaScript
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initThemeAndDirection();
  initNavbarScroll();
  initScrollReveal();
  initBackToTop();
  initContactForm();
  initBookingSystem();
  initSkeletonLoaders();
  initNewsletterForm();
});

/* ==========================================================================
   Theme (Dark/Light) & Text Direction (LTR/RTL) Initializer
   ========================================================================== */
function initThemeAndDirection() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const rtlToggleBtn = document.getElementById('rtl-toggle');
  const isHome2 = document.body.classList.contains('home-2-page');

  // Load saved choices or default to light/ltr
  const savedTheme = localStorage.getItem('rallyx-theme') || 'light';
  const savedDir = localStorage.getItem('rallyx-dir') || 'ltr';

  const applyTheme = (theme) => {
    const isDark = theme === 'dark';
    document.body.classList.toggle('dark-mode', isDark);
    if (isHome2) {
      document.body.classList.toggle('theme-luxury-dark', isDark);
    }
    document.documentElement.setAttribute('data-bs-theme', isDark ? 'dark' : 'light');
    if (themeToggleBtn) {
      themeToggleBtn.innerHTML = isDark
        ? '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-sun-fill" viewBox="0 0 16 16"><path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/></svg>'
        : '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-moon-stars-fill" viewBox="0 0 16 16"><path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.277 7.277a7.21 7.21 0 0 0 3.46-.878.767.767 0 0 1 .858.08.77.767 0 0 1 .08.858 7.211 7.211 0 0 1-7.602 4.168 7.272 7.272 0 0 1-5.677-5.677 7.27 7.27 0 0 1 4.169-7.601z"/><path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.099z"/></svg>';
    }
  };

  applyTheme(savedTheme);

  // Apply saved direction
  document.documentElement.setAttribute('dir', savedDir);
  if (rtlToggleBtn) {
    rtlToggleBtn.textContent = savedDir === 'rtl' ? 'LTR' : 'RTL';
  }

  // Theme Toggle Button click handler
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const nextTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
      applyTheme(nextTheme);
      localStorage.setItem('rallyx-theme', nextTheme);
    });
  }

  // RTL Toggle Button click handler
  if (rtlToggleBtn) {
    rtlToggleBtn.addEventListener('click', () => {
      const currentDir = document.documentElement.getAttribute('dir');
      const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
      document.documentElement.setAttribute('dir', newDir);
      localStorage.setItem('rallyx-dir', newDir);
      rtlToggleBtn.textContent = newDir === 'rtl' ? 'LTR' : 'RTL';
    });
  }
}

/* ==========================================================================
   Navbar Sticky Logic
   ========================================================================== */
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar-rallyx');
  if (!navbar) return;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

/* ==========================================================================
   Scroll Reveal Animation
   ========================================================================== */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if (reveals.length === 0) return;
  
  const observerOptions = {
    root: null,
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // Reveal only once
      }
    });
  }, observerOptions);
  
  reveals.forEach(el => revealObserver.observe(el));
}

/* ==========================================================================
   Back To Top Button
   ========================================================================== */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  });
  
  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ==========================================================================
   Contact Form Validation & Feedback
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simple verification
    let isValid = true;
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    
    inputs.forEach(input => {
      if (!input.value.trim()) {
        input.classList.add('is-invalid');
        isValid = false;
      } else {
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
      }
    });
    
    if (isValid) {
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...';
      
      // Simulate submission timeout
      setTimeout(() => {
        // Show success alert
        const alertHtml = `
          <div class="alert alert-success alert-dismissible fade show border-0 rounded-4 glass-card p-4 mt-4" role="alert" style="background: rgba(20, 150, 80, 0.15); border-left: 4px solid #149650 !important;">
            <h5 class="alert-heading text-success mb-1">Message Sent Successfully!</h5>
            <p class="mb-0 text-success" style="font-size: 0.95rem;">Thank you for contacting RALLYX. Our academy representatives will contact you shortly.</p>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        `;
        
        form.insertAdjacentHTML('afterend', alertHtml);
        form.reset();
        
        // Remove classes
        inputs.forEach(input => {
          input.classList.remove('is-valid');
        });
        
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }, 1500);
    }
  });
}

/* ==========================================================================
   Court Booking Selection Logic
   ========================================================================== */
function initBookingSystem() {
  const slotsContainer = document.getElementById('bookingSlotsContainer');
  if (!slotsContainer) return;
  
  const slotCards = slotsContainer.querySelectorAll('.slot-card.available');
  const selectedSlotsBadge = document.getElementById('selectedSlotsCount');
  const selectedDetailsText = document.getElementById('selectedDetailsText');
  const totalAmountSpan = document.getElementById('totalAmount');
  const confirmBookingBtn = document.getElementById('confirmBookingBtn');
  
  let selectedSlots = [];
  const ratePerSlot = 35; // $35 per slot
  
  slotCards.forEach(card => {
    card.addEventListener('click', () => {
      const court = card.getAttribute('data-court');
      const time = card.getAttribute('data-time');
      const slotId = `${court}-${time}`;
      
      if (card.classList.contains('selected')) {
        card.classList.remove('selected');
        selectedSlots = selectedSlots.filter(slot => slot.id !== slotId);
      } else {
        card.classList.add('selected');
        selectedSlots.push({ id: slotId, court, time });
      }
      
      updateBookingSummary();
    });
  });
  
  function updateBookingSummary() {
    const count = selectedSlots.length;
    
    if (selectedSlotsBadge) selectedSlotsBadge.textContent = count;
    
    if (count === 0) {
      if (selectedDetailsText) selectedDetailsText.innerHTML = '<span class="text-muted">No slots selected yet. Pick slots from the grid.</span>';
      if (totalAmountSpan) totalAmountSpan.textContent = '0';
      if (confirmBookingBtn) confirmBookingBtn.disabled = true;
    } else {
      let detailsHtml = '<ul class="list-unstyled mb-0">';
      selectedSlots.forEach(slot => {
        detailsHtml += `<li class="d-flex justify-content-between align-items-center mb-2" style="font-size: 0.95rem;">
          <span><strong>${slot.court}</strong> - ${slot.time}</span>
          <span class="badge" style="background: rgba(204,255,0,0.15); color: var(--accent); font-weight: 500; border: 1px solid rgba(204,255,0,0.3)">$${ratePerSlot}</span>
        </li>`;
      });
      detailsHtml += '</ul>';
      
      if (selectedDetailsText) selectedDetailsText.innerHTML = detailsHtml;
      if (totalAmountSpan) totalAmountSpan.textContent = count * ratePerSlot;
      if (confirmBookingBtn) confirmBookingBtn.disabled = false;
    }
  }
}

/* ==========================================================================
   Remove Skeleton Screens (Simulate Loading Completed)
   ========================================================================== */
function initSkeletonLoaders() {
  const skeletons = document.querySelectorAll('.skeleton-wrapper');
  if (skeletons.length === 0) return;
  
  // Wait 1.2s to simulate asset loading, then swap skeleton layouts for full elements
  setTimeout(() => {
    skeletons.forEach(el => {
      const skeleton = el.querySelector('.skeleton-loader');
      const content = el.querySelector('.skeleton-content');
      if (skeleton) skeleton.classList.add('d-none');
      if (content) content.classList.remove('d-none');
    });
  }, 1200);
}

/* ==========================================================================
   Newsletter Submission Handler
   ========================================================================== */
function initNewsletterForm() {
  const form = document.getElementById('newsletterForm');
  if (!form) return;
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = e.target.querySelector('input');
    const btn = e.target.querySelector('button');
    
    btn.disabled = true;
    btn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" style="width:12px; height:12px;"></span>';
    
    setTimeout(() => {
      input.value = '';
      input.placeholder = 'Subscribed successfully!';
      btn.innerHTML = '✓';
      btn.style.backgroundColor = '#149650';
      btn.style.color = '#FFFFFF';
    }, 1000);
  });
}
