export default function initCarousel() {
  const nextButton = document.querySelector('.nextBtn');
  const prevButton = document.querySelector('.previous');
  const imageContainer = document.querySelector('.imageContainer');
  const slides = document.querySelectorAll('.imgWrapper');
  let currentSlide = 0;

  function updateSlide() {
    const slideWidth = slides[currentSlide].offsetWidth;
    imageContainer.style.transform = `translateX(-${
      slideWidth * currentSlide
    }px)`;
  }

  nextButton.addEventListener('click', () => {
    currentSlide += 1;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    updateSlide();
    updateNavButtons();
  });

  prevButton.addEventListener('click', () => {
    currentSlide -= 1;
    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }
    updateSlide();
    updateNavButtons();
  });

  function updateNavButtons() {
    const allNavButtons = document.querySelectorAll('.imageNavBtn');
    allNavButtons.forEach(btn => btn.classList.remove('active'));
    slides.forEach(slide => {
      const activeButton = slide.querySelector(`.navImg${currentSlide + 1}`);
      if (activeButton) {
        activeButton.classList.add('active');
      }
    });
  }

  function initImageNav() {
    slides.forEach(slide => {
      const buttonWrapper = document.createElement('div');
      buttonWrapper.classList.add('buttonWrapper');

      function addListener(imageNavBtn, index) {
        imageNavBtn.addEventListener('click', () => {
          currentSlide = index;
          updateSlide();
          updateNavButtons();
        });
      }

      for (let i = 0; i < slides.length; i += 1) {
        const imageNavBtn = document.createElement('button');
        imageNavBtn.textContent = 'O';
        imageNavBtn.classList.add(`navImg${i + 1}`);
        imageNavBtn.classList.add('imageNavBtn');
        if (i === 0) {
          imageNavBtn.classList.add('active'); // initialise imageNav1 as active
        }
        buttonWrapper.appendChild(imageNavBtn);

        addListener(imageNavBtn, i);
      }

      slide.appendChild(buttonWrapper);
    });
  }
  initImageNav();
}
