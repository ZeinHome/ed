const refs = {
  snekers: document.querySelector('.snekers'),
};

const data = fetch('https://62b034b1b0a980a2ef4d39ed.mockapi.io/item')
  .then((res) => res.json())
  .then((res) => {
    const snekersObj = res.reduce((acc, post) => {
      return (
        acc +
        `<li><h2 class="snekersTittle">${post.title}</h2>
        <img src=${post.imageUrl} alt="snekers" />
        <div/>`
      );
    }, '');

    refs.snekers.insertAdjacentHTML('beforeend', snekersObj);
  })
  .catch((err) => err.message);
