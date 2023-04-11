export default function initCarousel() {
  const nextButton = document.querySelector('.nextBtn');
  const prevButton = document.querySelector('.previous');
  const imageContainer = document.querySelector('.imageContainer');
  const slides = document.querySelectorAll('.imgWrapper');
  let currentSlide = 0;

  nextButton.addEventListener('click', () => {
    const slideWidth = slides[currentSlide].offsetWidth;
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    imageContainer.style.transform = `translateX(-${
      slideWidth * currentSlide
    }px)`;
  });

  prevButton.addEventListener('click', () => {
    const slideWidth = slides[currentSlide].offsetWidth;
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }
    imageContainer.style.transform = `translateX(-${
      slideWidth * currentSlide
    }px)`;
  });
}
