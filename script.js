document.addEventListener('DOMContentLoaded', function(event) {
  const observer = lozad('.lozad', {
    loaded: function(el) {
      el.classList.add('lozad-fully-loaded');
    }
  });
  observer.observe();
});
