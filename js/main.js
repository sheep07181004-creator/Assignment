const hamburger = document.querySelector('.hamburger');
const overlay = document.querySelector('.overlay');
const spNavLinks = document.querySelectorAll('.sp-nav a');
const toTop = document.querySelector('.to-top');

if (hamburger) {
  hamburger.addEventListener('click', function () {
    document.body.classList.toggle('menu-open');
  });
}

if (overlay) {
  overlay.addEventListener('click', function () {
    document.body.classList.remove('menu-open');
  });
}

spNavLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    document.body.classList.remove('menu-open');
  });
});

if (toTop) {
  toTop.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

const fadeItems = document.querySelectorAll('.js-fade');

const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-show');
    }
  });
}, {
  threshold: 0.2
});

fadeItems.forEach(function (item) {
  observer.observe(item);
});