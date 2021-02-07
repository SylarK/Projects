import React from 'react';
import ReactDom from 'react-dom';

//CSS
import './index.css';

//Setup vars
const books = [
  {
    id: 1,
    img:
      'https://images-na.ssl-images-amazon.com/images/I/81zhvrYl7yL.__BG0,0,0,0_FMpng_AC_UL210_SR210,210_.jpg',
    author: 'J.K Rowling',
    title: 'Harry Potter and Sorceres Stone',
  },
  {
    id: 2,
    img:
      'https://images-na.ssl-images-amazon.com/images/I/91pR9wKJ3zL._AC_UL200_SR200,200_.jpg',
    author: 'James Clear',
    title: 'Atomic Habits',
  },
  {
    id: 3,
    img:
      'https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL._AC_UL200_SR200,200_.jpg',
    author: 'Barack Obama',
    title: 'A Promised Land',
  },
];

/* const names = ['john', 'peter', 'susan'];
const newName = names.map((name) => {
  return <h1>{name}</h1>;
}); */

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        //const { img, title, author } = book;
        //return <Book key={book.id} book={book} />;
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}
const Book = (props) => {
  //const { img, title, author } = props.book;
  const { img, title, author } = props;
  //attribute, eventHandler
  //onClick, onMouseOver
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

// const Greeting = () => {
//   return React.createElement('div', {}, React.createElement('h1', {}, 'Hello World!'));
// }

ReactDom.render(<BookList />, document.getElementById('root'));
