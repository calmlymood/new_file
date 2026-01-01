let images = [];
let currentIndex = 0;

const modal = document.getElementById('galleryModal');
const modalImg = document.getElementById('galleryImage');

document.querySelectorAll('.product-thumb').forEach(img => {
  img.addEventListener('click', () => {
    images = JSON.parse(img.dataset.images);
    currentIndex = 0;
    modalImg.src = images[currentIndex];
    modal.style.display = 'flex';
  });
});

document.querySelector('.next').onclick = () => {
  currentIndex = (currentIndex + 1) % images.length;
  modalImg.src = images[currentIndex];
};

document.querySelector('.prev').onclick = () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  modalImg.src = images[currentIndex];
};

document.querySelector('.close').onclick = () => {
  modal.style.display = 'none';
};

modal.onclick = e => {
  if (e.target === modal) modal.style.display = 'none';
};
