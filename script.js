 document.addEventListener('DOMContentLoaded', () => {
    // Restore saved theme or default to light-theme
    const savedTheme = localStorage.getItem('theme') || 'light-theme';
    
    // Remove any existing theme classes, then apply saved theme
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(savedTheme);

    // Handle theme toggle
    const toggleButton = document.getElementById('theme-toggle');
    if (toggleButton) {
      toggleButton.addEventListener('click', () => {
        const isLight = document.body.classList.contains('light-theme');
        document.body.classList.remove('light-theme', 'dark-theme');
        const newTheme = isLight ? 'dark-theme' : 'light-theme';
        document.body.classList.add(newTheme);
        localStorage.setItem('theme', newTheme);
      });
    }
  });

// Highlight current nav link
const navLinks = document.querySelectorAll('nav a');
const path = window.location.pathname.split('/').pop();
navLinks.forEach(link => {
  if (link.getAttribute('href') === path) {
    link.classList.add('active-link');
  }
});

// Form validation
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', function (e) {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    if (!name.value || !email.value.includes('@') || message.value.length < 10) {
      alert('Please fill the form correctly.');
      e.preventDefault();
    }
  });
}

// Scroll-to-top button
const scrollBtn = document.createElement('button');
scrollBtn.innerText = '↑';
scrollBtn.id = 'scrollToTop';
document.body.appendChild(scrollBtn);

window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Hamburger Toggle Menu
document.addEventListener("DOMContentLoaded", function () {
  const menuToggleBtn = document.getElementById('menu-toggle');
  const menuNav = document.getElementById('nav-menu');
  const menuLinks = menuNav?.querySelectorAll('a') || [];

  if (menuToggleBtn && menuNav) {
    // Toggle menu
    menuToggleBtn.addEventListener('click', () => {
      menuNav.classList.toggle('show');
    });

    // Close menu on link click
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          menuNav.classList.remove('show');
        }
      });
    });
  }
});
