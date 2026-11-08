const images = document.querySelectorAll('.portfolio-img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document .getElementById('nextBtn');

let currentIndex = 0;

function showImage(index) {
  images.forEach(img => img.classList.add('hide'));
  images[index].classList.remove('hide');
}
nextBtn.addEventListener('click',() => {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  showImage(currentIndex);
});

prevBtn.addEventListener('click',() => {
  currentIndex--;
  if (currentIndex < 0){
    currentIndex = images.length - 1;
  }
  showImage(currentIndex);
});

const images2 = document.querySelectorAll('.portfolio-img2');
const prevBtn2 = document.getElementById('prevBtn2');
const nextBtn2 = document.getElementById('nextBtn2');

let currentIndex2 = 0;

function showImage2(index) {
  images2.forEach(img => img.classList.add('hide'));
  images2[index].classList.remove('hide');
}

nextBtn2.addEventListener('click', () => {
  currentIndex2++;
  if (currentIndex2 >= images2.length) {
    currentIndex2 = 0;
  }
  showImage2(currentIndex2);
});

prevBtn2.addEventListener('click', () => {
  currentIndex2--;
  if (currentIndex2 < 0) {
    currentIndex2 = images2.length - 1;
  }
  showImage2(currentIndex2);
});
