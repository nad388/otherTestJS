const side_a = document.querySelector('#side_a');
const side_b = document.querySelector('#side_b');
const side_c = document.querySelector('#side_c');
const ans = document.querySelector('#answer');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
  if (
    !parseInt(side_a.value) ||
    !parseInt(side_b.value) ||
    !parseInt(side_c.value)
  ) {
    alert('Введите, пожалуйста, число!');
  } else {
    side_a.value ** 2 + side_b.value ** 2 === side_c.value ** 2
      ? (ans.textContent = 'Числа являются числами тройки Пифагора')
      : (ans.textContent = 'Числа НЕ являются числами тройки Пифагора');
  }
});
