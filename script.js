// ── Scroll-reveal for cards ──
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(
  '.work-card, .research-card, .project-card, .achievement-card'
).forEach((el) => observer.observe(el));

// ── Active nav link on scroll ──
const sections = document.querySelectorAll('.section[id]');
const navLinks = document.querySelectorAll('[data-nav]');

function updateActiveNav() {
  const scrollY = window.scrollY + 120;

  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

    if (scrollY >= top && scrollY < top + height) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + id) {
          link.classList.add('active');
        }
      });
    }
  });

  // Remove all active when at top (hero)
  if (window.scrollY < 300) {
    navLinks.forEach((link) => link.classList.remove('active'));
  }
}

window.addEventListener('scroll', updateActiveNav, { passive: true });

// ── Nav shadow on scroll ──
const navbar = document.getElementById('navbar');

function updateNavShadow() {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', updateNavShadow, { passive: true });
