export default function initImagNav() {
  const images = document.querySelectorAll('.imgWrapper');
  images.forEach(wrapper => {
    const buttonWrapper = document.createElement('div');
    buttonWrapper.classList.add('buttonWrapper');

    for (let i = 0; i < images.length; i++) {
      const imageNavBtn = document.createElement('button');
      imageNavBtn.textContent = 'O';
      buttonWrapper.appendChild(imageNavBtn);
    }

    wrapper.appendChild(buttonWrapper);
  });
}
