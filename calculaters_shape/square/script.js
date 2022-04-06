const side = document.querySelector('#side');
const area = document.querySelector('#area');
const per = document.querySelector('#per');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
  if (!parseInt(side.value) || +side.value <= 0) {
    alert('Введите, пожалуйста, число больше нуля!');
  } else {
    let value = +side.value;
    area.value = value ** 2;
    per.value = value * 4;
  }
});
