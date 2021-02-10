import React, { useState, useEffect } from 'react';

const useStateTraining = () => {
  const [value, setValue] = useState('Posts');

  const [size, setSize] = useState(window.innerWidth);

  function checkSize() {
    setSize(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', checkSize);
    return (
      //cleanup
      document.removeEventListener('resize', checkSize)
    );
  }, [value]);

  return (
    <>
      <button
        className="btn"
        onClick={() => {
          setValue('Posts');
        }}
      >
        Posts
      </button>
      <button
        className="btn"
        onClick={() => {
          setValue('Comments');
        }}
      >
        Comments
      </button>
      <button
        className="btn"
        onClick={() => {
          setValue('Profiles');
        }}
      >
        Profiles
      </button>
      <article>
        <h2>{value}</h2>
        <h2>{size}</h2>
      </article>
    </>
  );
};

export default useStateTraining;
