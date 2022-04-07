const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const ans = document.querySelector('#ans');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
  if (!parseInt(num1.value) || !parseInt(num2.value)) {
    alert('Введите, пожалуйста, число!');
  } else {
    let divisorsArr = compareArrs(
      getDivisors(num1.value),
      getDivisors(num2.value)
    );
    ans.value = Math.max.apply(null, divisorsArr);
  }
});

function getDivisors(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (n % 1 == 0) {
      arr.push(i);
    }
  }
  return arr;
}

function compareArrs(arr1, arr2) {
  let res = [];
  for (let el1 of arr1) {
    for (let el2 of arr2) {
      if (el1 === el2) {
        res.push(el1);
      }
    }
  }
  return res;
}
