document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section');
  let currentSection = 0;

  function showSection(index) {
    sections.forEach((section, i) => {
      section.classList.toggle('visible', i === index);
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

  showSection(currentSection);
});
