document.querySelectorAll('.char-icons img').forEach(icon => {
  icon.addEventListener('click', () => {
    const targetId = icon.getAttribute('data-target');
    document.querySelectorAll('.char-detail').forEach(detail => {
      detail.classList.add('hidden');
    });
    document.getElementById(targetId).classList.remove('hidden');
  });
});
