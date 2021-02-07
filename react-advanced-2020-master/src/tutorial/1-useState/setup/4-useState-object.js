import React, { useState } from 'react'

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    message: 'Hello world',
  })

  const [name, setName] = useState('peter')
  const [age, setAge] = useState(24)
  const [message, setMessage] = useState('hello world')

  console.log(person)

  const changeMessage = () => {
    // setPerson({ ...person, message: 'How are you?' })
    setMessage('how are you?')
  }
  return (
    <React.Fragment>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className='btn' onClick={changeMessage}>
        Change Message
      </button>
    </React.Fragment>
  )
}

export default UseStateObject
