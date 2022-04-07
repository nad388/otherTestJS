const side_a = document.querySelector('#side_a');
const side_b = document.querySelector('#side_b');
const side_c = document.querySelector('#side_c');
const x1 = document.querySelector('#x1');
const x2 = document.querySelector('#x2');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
  if (
    !parseInt(side_a.value) ||
    !parseInt(side_b.value) ||
    !parseInt(side_c.value)
  ) {
    alert('Введите, пожалуйста, число!');
  } else {
    let D = side_b.value ** 2 - 4 * side_a.value * side_c.value;
    if (D > 0) {
      x1.value = ((-side_b.value + Math.sqrt(D)) / (2 * side_a.value)).toFixed(
        2
      );
      x2.value = ((-side_b.value - Math.sqrt(D)) / (2 * side_a.value)).toFixed(
        2
      );
    } else if (D === 0) {
      x1.value = (-side_b.value / (2 * side_a.value)).toFixed(2);
    } else {
      alert('Уравнение не имеет корней');
    }
  }
});
