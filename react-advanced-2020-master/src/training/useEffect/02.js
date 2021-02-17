import React, { useState, useEffect } from 'react';

const UseEffectTraining = () => {
  const [value, setValue] = useState(0);
  const [text, setText] = useState('SimpleCount');

  useEffect(() => {
    document.title = `New messages | ${value}`;
    if (value >= 10) {
      setText('UseEffect working well');
    }
  }, [value]);

  return (
    <>
      <h2>{text}</h2>
      <h1>{value}</h1>
      <button
        className="btn"
        onClick={() => {
          setValue((prevValue) => prevValue + 1);
        }}
      >
        {' '}
        +{' '}
      </button>
    </>
  );
};

export default UseEffectTraining;
