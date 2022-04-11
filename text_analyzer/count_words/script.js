let txt = document.querySelector('textarea');
let desc = document.querySelector('#desc');
let res = document.querySelector('#res');

// Сколько слов в textarea

let howManyWords = () => {
  let wordsArr = txt.value.split(' ');
  desc.innerHTML = txt.value;
  res.innerHTML = wordsArr.length;
  clearTextArea();
};

let clearTextArea = () => {
  txt.value = '';
};

txt.addEventListener('blur', howManyWords);
