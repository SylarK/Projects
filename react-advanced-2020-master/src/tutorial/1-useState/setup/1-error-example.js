import React from 'react'

const ErrorExample = () => {
  const handleClick = () => {
    title = 'hello people'
    console.log(title)
  }

  let title = 'random title'
  return (
    <>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        Change Title
      </button>
    </>
  )
}

export default ErrorExample
