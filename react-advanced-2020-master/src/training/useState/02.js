import React from 'react';

const StateTraining = () => {
  const [data, setData] = React.useState({
    name: 'Lucas Amado',
    age: 26,
    message: 'Hello world',
  });

  function handleClick() {
    if (data.message === 'Everything is ok?') {
      setData({ ...data, message: 'Hello World' });
    } else {
      setData({ ...data, message: 'Everything is ok?' });
    }
  }

  function eventOver() {
    if (data.age === 26) {
      setData({ ...data, age: 999 });
    }
  }

  function eventLeave() {
    setData({ ...data, age: 26 });
  }

  return (
    <>
      <h2>Info</h2>
      <h4>Name: {data.name}</h4>
      <h4 onMouseOver={eventOver} onMouseLeave={eventLeave}>
        Age: {data.age}
      </h4>
      <h4 onClick={handleClick}>Message: {data.message}</h4>
    </>
  );
};

export default StateTraining;
