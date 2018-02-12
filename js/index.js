const searchLink = document.querySelector('.js-search-link');

searchLink.addEventListener('click', function(e) {
  const searchInput = document.querySelector('.js-search-input');

  e.target.closest('.js-site-header').classList.toggle('is-searching');
  searchInput.focus();
}, false);
