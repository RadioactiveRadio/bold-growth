// Bold Growth - Static Website JavaScript

// ===== Navigation Scroll Effect =====
document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.getElementById('navbar');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
});

// ===== Price Toggle Functionality =====
document.addEventListener('DOMContentLoaded', function() {
  const toggleBtns = document.querySelectorAll('.toggle-btn');
  
  toggleBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const product = this.dataset.product;
      const options = this.dataset.options.split(',').map(Number);
      let selected = parseInt(this.dataset.selected);
      
      // Cycle to next option
      selected = (selected + 1) % options.length;
      this.dataset.selected = selected;
      
      // Update toggle position
      const dot = this.querySelector('.toggle-dot');
      if (selected === 0) {
        dot.style.transform = 'translateX(0)';
      } else if (selected === 1) {
        dot.style.transform = 'translateX(20px)';
      } else {
        dot.style.transform = 'translateX(20px)';
      }
      
      // Update toggle label text
      const toggleLabel = this.parentElement.querySelector('.toggle-price');
      toggleLabel.textContent = options[selected];
      
      // Update product price display
      const priceValue = document.querySelector(`.price-value[data-product="${product}"]`);
      if (priceValue) {
        priceValue.textContent = options[selected];
      }
    });
  });
});

// ===== Contact Form =====
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      
      // Show success message
      submitBtn.innerHTML = '<span>Message sent!</span>';
      submitBtn.style.background = '#2CB86A';
      
      // Reset form
      this.reset();
      
      // Reset button after 3 seconds
      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.style.background = '';
      }, 3000);
    });
  }
});

// ===== Smooth Scroll for Anchor Links =====
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

// ===== Intersection Observer for Fade-in Animations =====
document.addEventListener('DOMContentLoaded', function() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe elements for animation
  document.querySelectorAll('.product-card, .size-card').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });
});

// Add fade-in styles dynamically
const fadeStyles = document.createElement('style');
fadeStyles.textContent = `
  .fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  
  .fade-in-visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(fadeStyles);
