const hamburguer = document.getElementById('hamburguer');
const menu = document.getElementById('menu');
const botoes = menu.querySelectorAll('button');
const cards = document.querySelectorAll('.cert-card');

hamburguer.addEventListener('click', () => {
  menu.classList.toggle('ativo');
});

botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    const categoria = botao.dataset.categoria;

    cards.forEach(card => {
      if (categoria === 'todos' || card.dataset.categoria === categoria) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });

    menu.classList.remove('ativo');
  });
});
const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
  });
});
const certImages = document.querySelectorAll('.cert-card img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close-btn');

certImages.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});

