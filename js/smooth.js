 scrollTo = (element) => {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop
  });
};

document.querySelector('.bio-menu').addEventListener('click', () => {
  scrollTo(document.getElementById("bio"));
});

document.querySelector('.coaching-menu').addEventListener('click', () => {
  scrollTo(document.getElementById("coaching"));
});

document.querySelector('.contact-menu').addEventListener('click', () => {
  scrollTo(document.getElementById("contact"));
});
