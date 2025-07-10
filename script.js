document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section');
  let currentSection = 0;

  function showSection(index) {
    sections.forEach((section, i) => {
      if (i === index) {
        section.classList.add('visible');
      } else {
        section.classList.remove('visible');
      }
    });
  }

  document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentSection < sections.length - 1) {
      currentSection++;
      showSection(currentSection);
    }
  });

  document.getElementById('backBtn').addEventListener('click', () => {
    if (currentSection > 0) {
      currentSection--;
      showSection(currentSection);
    }
  });

  // Inicializuj na prvú sekciu
  showSection(currentSection);
});
