import React from 'react'
import ReactDom from 'react-dom'

function Greeting() {
  return (
    <>
      <h3>Hello World!</h3>
      <p>
        <a href='#'> My first component</a>
      </p>
    </>
  )
}

// const Greeting = () => {
//   return React.createElement('div', {}, React.createElement('h1', {}, 'Hello World!'));
// }

ReactDom.render(<Greeting />, document.getElementById('root'))
