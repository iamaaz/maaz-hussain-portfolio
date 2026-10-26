const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const year = document.querySelector('#year');
const laserHost = document.querySelector('#laser-root');

if (year) year.textContent = new Date().getFullYear();

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
  navLinks?.classList.toggle('is-open', !isOpen);
});

navLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Open menu');
    navLinks?.classList.remove('is-open');
  });
});

async function mountLaserCollection() {
  if (!laserHost) return;
  try {
    const [React, ReactDOM, ThreeUI] = await Promise.all([
      import('https://esm.sh/react@19.2.0?dev'),
      import('https://esm.sh/react-dom@19.2.0/client?external=react'),
      import('https://esm.sh/@designcodeio/threeui@1.2.0?external=react,react-dom'),
    ]);

    const props = {
      variant: 'matrix-field',
      speed: 1.00,
      size: 1.00,
      length: 1.00,
      density: 1.00,
      opacity: 1.00,
      hue: 0,
      saturation: 1.00,
      brightness: 0.40,
    };

    ReactDOM.createRoot(laserHost).render(React.createElement(ThreeUI.LaserCollection, props));
  } catch (error) {
    console.error('Could not load the ThreeUI Matrix Junction effect.', error);

  }
}

mountLaserCollection();


