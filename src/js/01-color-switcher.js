import Notiflix from 'notiflix';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let timerId = null;

const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');

buttonStart.addEventListener('click', () => {
  buttonStart.setAttribute('disabled', '');
  Notiflix.Notify.success('Починаємо кольорову какафонію!');
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});
buttonStop.addEventListener('click', () => {
  Notiflix.Notify.warning('Зупиняємо цей кошмар!');
  buttonStart.removeAttribute('disabled', '');

  clearInterval(timerId);
});
