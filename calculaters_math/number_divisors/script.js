const num = document.querySelector('#num');
const ans = document.querySelector('#ans');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
  if (!parseInt(num.value)) {
    alert('Введите, пожалуйста, число!');
  } else {
    let arr = [];
    for (let i = 1; i <= num.value; i++) {
      if (num.value % i == 0) {
        arr.push(i);
        ans.value = arr;
      }
    }
  }
});
