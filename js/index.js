function userName(name) {
  console.log(this);
  return name;
}

const obj = {
  name: 'Last',
  lastName: 'Yest',
  qwe: {
    name: 'qwe',
    where: this,
  },
  myCat() {
    console.log(this.name);
  },
};
const array = [1, 2, 3, 4, 5];
const arrayNumber = [15, 1, 60, 2, 77, 3, 44, 4, 5, 12.5];

const bigNumber = 10n;

function NumberSort(arr) {
  const sortArr = arr.sort((a, b) => b - a);
  let maxNumber = arr[0];

  for (const number of arr) {
    if (maxNumber < number) {
      maxNumber = number;
    }
  }
  return maxNumber;
}

// console.log(NumberSort(arrayNumber));
// const text = array.map((n) => n * 5);
// const text = array.some((n) => n === 5);
// const text1 = array.every((n) => n !== 15);

// console.log(text);
// console.log(text1);
// console.log(obj);
// console.log(userName('aoaoaoaoa'));

/* data types
1 String
2 Number
3 Boolean
4-5 Undefined / Null
6 Bigint
7 Symbol
8 Object
*/

const ref = {
  boxSize: document.querySelector('.boxSize'),
  sizeBtnSort: document.querySelector('.sizeBtnSort'),
  sizeBtnBig: document.querySelector('.sizeBtnBig'),
  form: document.querySelector('.forma'),
};

// ref.sizeBtnSort.addEventListener('click', changeSize(16));
// ref.sizeBtnBig.addEventListener('click', changeSize(32));

// function changeSize(size) {
//   return function () {
//     document.body.style.fontSize = `${size}px`;
//   };
// }

ref.boxSize.addEventListener('click', changeSize);

function changeSize(e) {
  return (document.body.style.fontSize = `${e.target.value}px`);
}
ref.form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = e.currentTarget.elements.name.value;
  const number = e.currentTarget.elements.number.value;

  if (name && number) {
    const formDate = {
      name,
      number,
    };
    console.log(formDate);
    return;
  }

  alert('Довбоеб?');
});

document.addEventListener('keydown', keyboard);

function keyboard(event) {
  console.log('key: ', event.key);
  console.log('code: ', event.code);
}

document.removeEventListener('keydown', keyboard);

const car = ['BMW', 'Lexus', 'Tesla', 'Skoda'];

function destructuring(arr) {
  return arr;
}

// console.log(destructuring(car));

// obj.myCat();
