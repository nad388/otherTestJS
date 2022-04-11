let txt = document.querySelector('textarea');
let desc = document.querySelector('#desc');
let res = document.querySelector('#res');
let sym = document.querySelector('#sym');
let nspaces = document.querySelector('#nspaces');
let percent = document.querySelector('#percent');
let chbox = document.querySelectorAll('input');
let qua = document.querySelectorAll('.qua');
let wordsArr;

// Сколько слов в textarea

let howManyWords = () => {
  if (chbox[0].checked) {
    wordsArr = txt.value.split(' ');
    res.innerHTML = wordsArr.length;
  }
  if (chbox[1].checked) {
    countChar();
  }
  if (chbox[2].checked) {
    countCharWithoutSpaces();
  }
  if (chbox[3].checked) {
    getPercent();
  }
  desc.innerHTML = txt.value;
};

// Сколько символов в textarea
let countChar = () => {
  let textLength = txt.value.length;
  sym.innerHTML = textLength;
};

// Сколько символов без пробелов в textarea
let countCharWithoutSpaces = () => {
  let spaces = txt.value.match(/[^\s]/g).length;
  nspaces.innerHTML = spaces;
};

// Процент введенных в тексте символов
let getPercent = () => {
  let res = '';
  let sums = {};
  let textSym = txt.value.split('').length;
  let arrSym = txt.value.split(' ').join('').split('');
  arrSym.map((e) => {
    e = e.toLowerCase();
    sums[e] = !sums[e] ? 1 : sums[e] + 1;
  });
  for (let key in sums) {
    let perc = ((100 * sums[key]) / textSym).toFixed(2);
    res +=
      `Символ "${key}" содержится в ${perc}% введеного текста. ` + '<br><br>';
  }
  percent.innerHTML = res;
};

// let clearTextArea = () => {
//   txt.value = '';
// };

txt.addEventListener('blur', howManyWords);
