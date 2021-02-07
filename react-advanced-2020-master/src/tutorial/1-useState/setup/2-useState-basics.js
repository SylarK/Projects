import React, { useState } from 'react'
// useState -> Function
// use
// Must use a default value
// component name must be uppercase
// must be in the function/component body
// cannot call conditionally

const UseStateBasics = () => {
  // console.log(useState('Hello World'))
  // const value = useState(1)[0];
  // const handler = useState(1)[1];

  const [text, setText] = useState('random title')

  const handleClick = () => {
    if (text === 'random title') {
      setText('Hello World !')
    } else {
      setText('random title')
    }
  }

  return (
    <>
      <h1>{text}</h1>
      <button className='btn' onClick={handleClick}>
        Change Title
      </button>
    </>
  )
}

export default UseStateBasics
