// Smooth scrolling to sections
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Add more JavaScript functionalities as needed, such as:
// - Form validation
// - Interactive elements
// - Dynamic content loading
