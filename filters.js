const filters = document.querySelector('.project-filters');
const cards = [...document.querySelectorAll('.project')];
const count = document.querySelector('.count');

filters.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-filter]');
  if (!button || !filters.contains(button)) return;

  const category = button.dataset.filter;
  for (const option of filters.querySelectorAll('button')) {
    option.setAttribute('aria-pressed', String(option === button));
  }
  for (const card of cards) {
    card.hidden = category !== 'all' && !card.dataset.category.split(' ').includes(category);
  }
  count.textContent = `${cards.filter((card) => !card.hidden).length} PROJE`;
});
filters.hidden = false;
