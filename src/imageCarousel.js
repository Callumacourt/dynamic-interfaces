export default function initCarousel() {
  const nextButton = document.querySelector('.nextBtn');
  const prevButton = document.querySelector('.prevBtn');
  const imageContainer = document.querySelector('.imageContainer');
  const imageWrappers = document.querySelectorAll('.imgWrapper');
  let currentSlide = 0;
  let timeoutID;

  function updateSlide() {
    const slideWidth = imageWrappers[currentSlide].offsetWidth;
    imageContainer.style.transform = `translateX(-${
      slideWidth * currentSlide
    }px)`;
  }

  function updateNavButtons() {
    const allNavButtons = document.querySelectorAll('.imageNavBtn');
    allNavButtons.forEach(navButton => navButton.classList.remove('active'));

    const activeNavButton = imageWrappers[currentSlide].querySelector(
      `.navImg${currentSlide + 1}`
    );
    if (activeNavButton) {
      activeNavButton.classList.add('active');
    }
  }

  function automaticSlideSwitch() {
    nextButton.click();
  }

  function resetTimeout() {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(automaticSlideSwitch, 3200);
  }

  function handleNavButtonClick(index) {
    currentSlide = index;
    updateSlide();
    updateNavButtons();
    resetTimeout();
  }

  function initImageNav() {
    imageWrappers.forEach(imageWrapper => {
      const buttonWrapper = document.createElement('div');
      buttonWrapper.classList.add('buttonWrapper');

      for (let i = 0; i < imageWrappers.length; i += 1) {
        const navButton = document.createElement('button');
        navButton.classList.add(`navImg${i + 1}`);
        navButton.classList.add('imageNavBtn');
        if (i === 0) {
          navButton.classList.add('active');
        }

        navButton.addEventListener('click', () => {
          handleNavButtonClick(i);
        });

        buttonWrapper.appendChild(navButton);
      }

      imageWrapper.appendChild(buttonWrapper);
    });
  }

  nextButton.addEventListener('click', () => {
    currentSlide += 1;
    if (currentSlide >= imageWrappers.length) {
      currentSlide = 0;
    }
    updateSlide();
    updateNavButtons();
    resetTimeout();
  });

  prevButton.addEventListener('click', () => {
    currentSlide -= 1;
    if (currentSlide < 0) {
      currentSlide = imageWrappers.length - 1;
    }
    updateSlide();
    updateNavButtons();
    resetTimeout();
  });

  initImageNav();
  automaticSlideSwitch();
}
