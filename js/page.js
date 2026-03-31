window.addEventListener('load', () => {
  const buttons = document.querySelectorAll('.reveal-btn');

  if (!buttons.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    const visibleEntries = entries
      .filter(entry => entry.isIntersecting)
      .sort((a, b) => a.target.getBoundingClientRect().top - b.target.getBoundingClientRect().top);

    visibleEntries.forEach((entry, i) => {
      const btn = entry.target;
      const wrapper = btn.closest('.link-wrapper');

      setTimeout(() => {
        btn.classList.add('is-visible');

        setTimeout(() => {
          if (wrapper) wrapper.classList.add('is-hover-ready');
        }, 1000);
      }, i * 200);

      obs.unobserve(btn);
    });
  }, {
    threshold: 0,
  });

  buttons.forEach((btn) => observer.observe(btn));
});
