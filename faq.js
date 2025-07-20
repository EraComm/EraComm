document.querySelectorAll(Contact).forEach(item => {
    item.addEventListener('click', () => {
      const answer = item.nextElementSibling;
      if (answer.style.display === 'block') {
        answer.style.display = 'none';
      } else {
        answer.style.display = 'block';
      }
    });
  });
  