// HAMBURGER MENU TOGGLE
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', (e) => {
  e.stopPropagation(); // Prevent immediate closing
  if (menu.style.display === 'flex') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'flex';
  }
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !menu.contains(e.target)) {
    menu.style.display = 'none';
  }
});

// Ensure menu covers full screen when opened
function setupMenuFullscreen() {
  menu.style.position = 'fixed';
  menu.style.top = '0';
  menu.style.left = '0';
  menu.style.width = '100vw';
  menu.style.height = '100vh';
  menu.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'; // Semi-transparent
  menu.style.backdropFilter = 'blur(5px)'; // Optional: nice blur effect
  menu.style.flexDirection = 'column';
  menu.style.justifyContent = 'center';
  menu.style.alignItems = 'center';
  menu.style.zIndex = '1001';
  menu.style.transition = 'opacity 0.3s ease';
}
setupMenuFullscreen();

// CAROUSEL LOGIC
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextBtn = document.querySelector('.carousel-btn.next');
const prevBtn = document.querySelector('.carousel-btn.prev'); // optional
const dots = document.querySelectorAll('.dots');

let currentIndex = 0;

function updateCarousel() {
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;

  dots.forEach(dot => dot.classList.remove('active'));
  if (dots[currentIndex]) {
    dots[currentIndex].classList.add('active');
  }
}

// Next button click
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
});

// Prev button click (optional)
if (prevBtn) {
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
  });
}

// Dots click
dots.forEach(dot => {
  dot.addEventListener('click', () => {
    currentIndex = parseInt(dot.getAttribute('data-index'));
    updateCarousel();
  });
});

// Update carousel on load and resize
window.addEventListener('resize', updateCarousel);
window.addEventListener('load', updateCarousel);

// NAVBAR LOGO RESIZE ON SCROLL
window.addEventListener('scroll', () => {
  const logoImgs = document.querySelectorAll('.navbar img, .logo img, nav img');

  if (window.scrollY === 0) {
    logoImgs.forEach(img => {
      img.style.width = '250px';
      img.style.height = '60px';
    });
  } else {
    logoImgs.forEach(img => {
      img.style.width = '230px';
      img.style.height = '55px';
    });
  }
});
// Close button inside the menu
const closeMenu = document.getElementById('closeMenu');

closeMenu.addEventListener('click', () => {
  menu.style.display = 'none';
  document.body.style.overflow = '';
});
