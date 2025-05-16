
document.querySelectorAll('.faqUpper').forEach((header) => {
  header.addEventListener('click', () => {
      const card = header.parentElement;
      const icon = header.querySelector('.toggleIcon');
      
      // Close all other cards first
      document.querySelectorAll('.faqCard').forEach(c => {
          if (c !== card) {
              c.classList.remove('active');
              c.querySelector('.toggleIcon').textContent = '+';
          }
      });

      // Toggle current card
      const isOpen = card.classList.contains('active');
      if (isOpen) {
          card.classList.remove('active');
          icon.textContent = '+';
      } else {
          card.classList.add('active');
          icon.textContent = '×';
      }
  });
});