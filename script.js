(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#main-nav');

  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Ouvrir le menu');
    }));
  }

  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();

  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('is-visible'));
  }

  const form = document.querySelector('#contact-form');
  const feedback = document.querySelector('#form-feedback');
  if (form) {
    form.addEventListener('submit', event => {
      event.preventDefault();
      const data = new FormData(form);
      // Remplacez CONTACT_EMAIL dans index.html par votre adresse professionnelle.
      const email = 'CONTACT_EMAIL';
      if (email === 'CONTACT_EMAIL' || !email.includes('@')) {
        feedback.textContent = 'Le site est prêt. Avant publication, remplacez CONTACT_EMAIL dans index.html et cette adresse dans script.js par votre e-mail professionnel.';
        feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        return;
      }
      const subject = encodeURIComponent(`Demande de contact FindTechConsult — ${data.get('topic')}`);
      const body = encodeURIComponent(
        `Bonjour FindTechConsult,\n\nNom : ${data.get('name')}\nEntreprise : ${data.get('company') || 'Non précisée'}\nE-mail : ${data.get('email')}\nSujet : ${data.get('topic')}\n\nProjet :\n${data.get('message')}\n\nEnvoyé depuis le site FindTechConsult.`
      );
      feedback.textContent = 'Votre application de messagerie va s’ouvrir avec votre message prérempli.';
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    });
  }
})();