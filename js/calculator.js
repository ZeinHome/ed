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
    }
    if (item.id == 'backspace') {
      let string = refs.display.innerText;

      refs.display.innerText = string.substr(0, string.length - 1);
    }

    if (refs.display.innerText != '' && item.id == 'equal') {
      refs.display.innerText = eval(refs.display.innerText);
    }

    if (refs.display.innerText == '' && item.id == 'equal') {
      refs.display.innerText = 'Empty!';
      setTimeout(() => (refs.display.innerText = ''), 2000);
    } else {
      if (
        item.id != 'equal' &&
        item.id != 'backspace' &&
        item.id != 'clear'
      ) {
        refs.display.innerText += item.id;
      } else {
        return;
      }
    }
  };
});

let dark = true;

refs.themeToggleBtn.onclick = () => {
  refs.calculator.classList.toggle('dark');
  refs.themeToggleBtn.classList.toggle('active');
  dark = !dark;
};
