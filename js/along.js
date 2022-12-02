const refs = {
  snekers: document.querySelector('.snekers'),
};
// const url = 'https://62b034b1b0a980a2ef4d39ed.mockapi.io/item';

// function fetchSnekers(url) {
//   fetch(url)
//     .then((res) => res.json())
//     .catch((err) => err.message);
// }
const data = fetch('https://62b034b1b0a980a2ef4d39ed.mockapi.io/item')
  .then((res) => res.json())
  .then((res) => {
    const snekersObj = res.reduce(
      (acc, post) =>
        acc +
        `<li><h2 class="snekersTittle">${post.title}</h2>
        <img src=${post.imageUrl} alt="snekers" />
        <div/>`,
      ''
    );

    refs.snekers.insertAdjacentHTML('beforeend', snekersObj);
  })
  .catch((err) => err.message);
