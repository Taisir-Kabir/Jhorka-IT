import { useEffect } from 'react';

const REVEAL_SELECTOR = '.section h2,.section .lead,.grid>*,.two>*,.acc-item,.steps li,.cta .container>*,.toolbar,.map';

function PageEffects() {
  useEffect(() => {
    const header = document.querySelector('.site-header');
    const progress = document.createElement('div');
    progress.id = 'progress';
    document.body.append(progress);

    function onScroll() {
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = `${documentHeight > 0 ? (window.scrollY / documentHeight) * 100 : 0}%`;
      header?.classList.toggle('scrolled', window.scrollY > 20);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timers = new Set();
    const frames = new Set();
    const revealObserver = !reducedMotion && 'IntersectionObserver' in window
      ? new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('in');
          const timer = window.setTimeout(() => entry.target.classList.add('done'), 1300);
          timers.add(timer);
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.12 })
      : null;
    const countObserver = !reducedMotion && 'IntersectionObserver' in window
      ? new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);
          const element = entry.target;
          const value = Number(element.dataset.count);
          const start = performance.now();
          const animate = (now) => {
            const progressValue = Math.min((now - start) / 1400, 1);
            element.textContent = String(Math.round(value * (1 - (1 - progressValue) ** 3)));
            if (progressValue < 1) frames.add(window.requestAnimationFrame(animate));
          };
          frames.add(window.requestAnimationFrame(animate));
        });
      })
      : null;
    function applyEffects() {
      document.querySelectorAll(REVEAL_SELECTOR).forEach((element) => {
        if (element.dataset.rv) return;
        element.dataset.rv = '1';
        const index = [...element.parentElement.children].indexOf(element);
        element.style.setProperty('--d', `${Math.min(index, 6) * 0.08}s`);
        if (reducedMotion || !revealObserver) return;
        element.classList.add('reveal');
        revealObserver.observe(element);
      });

      document.querySelectorAll('[data-count]').forEach((element) => {
        if (element.dataset.counted) return;
        element.dataset.counted = '1';
        if (reducedMotion || !countObserver) {
          element.textContent = element.dataset.count;
          return;
        }
        element.textContent = '0';
        countObserver.observe(element);
      });
    }

    let updateFrame = 0;
    const mutationObserver = new MutationObserver(() => {
      window.cancelAnimationFrame(updateFrame);
      updateFrame = window.requestAnimationFrame(applyEffects);
    });
    mutationObserver.observe(document.querySelector('main') || document.body, { childList: true, subtree: true });
    applyEffects();

    return () => {
      window.removeEventListener('scroll', onScroll);
      mutationObserver.disconnect();
      revealObserver?.disconnect();
      countObserver?.disconnect();
      window.cancelAnimationFrame(updateFrame);
      timers.forEach(window.clearTimeout);
      frames.forEach(window.cancelAnimationFrame);
      progress.remove();
      header?.classList.remove('scrolled');
    };
  }, []);

  return null;
}

export default PageEffects;
