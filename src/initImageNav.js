export default function initImagNav() {
  const buttonWrapper = document.createElement('div');
  buttonWrapper.classList.add('buttonWrapper');
  const images = document.querySelectorAll('.imgWrapper');
  for (let i = 0; i < images.length; i++) {
    const imageNavBtn = document.createElement('button');
    imageNavBtn.textContent = 'O';
    buttonWrapper.appendChild(imageNavBtn);
  }
  const imgWrapper = document.querySelector('.imgWrapper');
  imgWrapper.appendChild(buttonWrapper);
}
