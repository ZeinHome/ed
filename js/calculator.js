const refs = {
  display: document.querySelector('#display'),
  button: document.querySelectorAll('button'),
  themeToggleBtn: document.querySelector('.theme-toggler'),
  calculator: document.querySelector('.calculator'),
  toggleIcon: document.querySelector('.toggler-icon'),
};

refs.button.forEach((item) => {
  item.onclick = () => {
    if (item.id == 'clear') {
      refs.display.innerText = '';
      return;
    }
    if (item.id == 'backspace') {
      let string = refs.display.innerText;
      refs.display.innerText = string.substr(0, string.length - 1);
      return;
    }

    if (refs.display.innerText != '' && item.id == 'equal') {
      refs.display.innerText = eval(refs.display.innerText);
      return;
    }

    if (refs.display.innerText == '' && item.id == 'equal') {
      refs.display.innerText = 'Empty!';
      setTimeout(() => (refs.display.innerText = ''), 2000);
    } else {
      refs.display.innerText += item.id;
    }
  };
});

let dark = true;

refs.themeToggleBtn.onclick = () => {
  refs.calculator.classList.toggle('dark');
  refs.themeToggleBtn.classList.toggle('active');
  dark = !dark;
};
