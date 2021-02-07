import React from 'react'
import ReactDom from 'react-dom'

//CSS
import './index.css'

//Setup vars
import { data } from './books'
import SpecificBook from './Book'

/* const names = ['john', 'peter', 'susan'];
const newName = names.map((name) => {
  return <h1>{name}</h1>;
}); */

function BookList() {
  return (
    <section className='booklist'>
      {data.map((book) => {
        //const { img, title, author } = book;
        //return <Book key={book.id} book={book} />;
        return <SpecificBook key={book.id} {...book} />
      })}
    </section>
  )
}

// const Greeting = () => {
//   return React.createElement('div', {}, React.createElement('h1', {}, 'Hello World!'));
// }

ReactDom.render(<BookList />, document.getElementById('root'))
