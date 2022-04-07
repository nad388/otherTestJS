const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const ans = document.querySelector('#ans');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
  if (!parseInt(num1.value) || !parseInt(num2.value)) {
    alert('Введите, пожалуйста, число!');
  } else {
    return (ans.value =
      !num1.value || !num2.value
        ? 0
        : Math.abs(
            (num1.value * num2.value) / gcdTwoNumbers(num1.value, num2.value)
          ));
  }
});

function gcdTwoNumbers(x, y) {
  x = Math.abs(x);
  y = Math.abs(y);
  while (y) {
    let z = y;
    y = x % y;
    x = z;
  }
  return x;
}
