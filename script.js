document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section');
  let currentSection = 0;

  function showNextSection() {
    if (currentSection < sections.length) {
      sections[currentSection].classList.add('visible');
      currentSection++;
    }
  }

  // Zobraz prvú sekciu hneď
  showNextSection();

  // Po stlačení ENTER zobraz ďalšiu
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      showNextSection();
    }
  });
});
