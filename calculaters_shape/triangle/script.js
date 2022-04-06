const side_a = document.querySelector('#side_a');
const side_b = document.querySelector('#side_b');
const side_c = document.querySelector('#side_c');
const area = document.querySelector('#area');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
  if (
    !parseInt(side_a.value) ||
    !parseInt(side_b.value) ||
    !parseInt(side_c.value) ||
    +side_a.value <= 0 ||
    +side_b.value <= 0 ||
    +side_c.value <= 0
  ) {
    alert('Введите, пожалуйста, число больше нуля!');
  } else {
    let value_a = +side_a.value;
    let value_b = +side_b.value;
    let value_c = +side_c.value;
    let p = ((value_a + value_b + value_c) / 2).toFixed(2);
    let a = p - value_a;
    let b = p - value_b;
    let c = p - value_c;
    area.value = Math.sqrt(p * a * b * c).toFixed(2);
  }
});
