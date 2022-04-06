const side = document.querySelector('#side');
const area = document.querySelector('#area');
const len = document.querySelector('#len');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
  if (!parseInt(side.value) || +side.value <= 0) {
    alert('Введите, пожалуйста, число больше нуля!');
  } else {
    let value = +side.value;
    const P = 3.14;
    area.value = (P * value ** 2).toFixed(2);
    len.value = (2 * P * value).toFixed(2);
  }
});
