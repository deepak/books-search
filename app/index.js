import 'whatwg-fetch';

function fetchBooks(titleName) {
  const endpointURL = `https://www.googleapis.com/books/v1/volumes?q=intitle:${encodeURI(titleName)}`
  console.log(`endpointURL: ${endpointURL}`);

  fetch(endpointURL).then((data) => console.log(data));
};

//fetchBooks("ruby performance");
window.fetchBooks = fetchBooks;

// check if HMR is enabled
if(module.hot) {
  // accept itself
  module.hot.accept();
}
