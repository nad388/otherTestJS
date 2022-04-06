const side1 = document.querySelector('#side1');
const side2 = document.querySelector('#side2');
const area = document.querySelector('#area');
const per = document.querySelector('#per');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
  if (
    !parseInt(side1.value) ||
    !parseInt(side2.value) ||
    +side1.value <= 0 ||
    +side2.value <= 0
  ) {
    alert('Введите, пожалуйста, число больше нуля!');
  } else {
    let value1 = +side1.value;
    let value2 = +side2.value;
    area.value = value1 * value2;
    per.value = 2 * (value1 + value2);
  }
});
