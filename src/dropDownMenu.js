export default function dropMenu(parentElement, dropDown) {
  let timer;
  dropDown.classList.add('invisible');
  parentElement.addEventListener('mouseover', () => {
    clearTimeout(timer);
    dropDown.classList.remove('invisible');
    dropDown.classList.add('visible');
  });
  parentElement.addEventListener('mouseleave', () => {
    timer = setTimeout(() => {
      dropDown.classList.remove('visible');
      dropDown.classList.add('invisible');
    }, 200);
  });
  dropDown.addEventListener('mouseenter', () => {
    clearTimeout(timer);
  });
  dropDown.addEventListener('mouseleave', () => {
    timer = setTimeout(() => {
      dropDown.classList.remove('visible');
      dropDown.classList.add('invisible');
    }, 200);
  });
}
