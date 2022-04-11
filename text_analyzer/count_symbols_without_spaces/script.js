let txt = document.querySelector('textarea');
let desc = document.querySelector('#desc');
let res = document.querySelector('#res');
let sym = document.querySelector('#sym');
let nspaces = document.querySelector('#nspaces');

// Сколько слов в textarea

let howManyWords = () => {
  let wordsArr = txt.value.split(' ');
  desc.innerHTML = txt.value;
  res.innerHTML = wordsArr.length;
  countChar();
  countCharWithoutSpaces();
  clearTextArea();
};

let countChar = () => {
  let textLength = txt.value.length;
  sym.innerHTML = textLength;
};

let countCharWithoutSpaces = () => {
  let spaces = txt.value.match(/[^\s]/g).length;
  nspaces.innerHTML = spaces;
};

let clearTextArea = () => {
  txt.value = '';
};

txt.addEventListener('blur', howManyWords);
