import React, { useState } from 'react';

const useStateTraining = () => {
  const [value, setValue] = useState(0);

  function clickDecrease() {
    setValue((prevCount) => prevCount - 1);
  }
  function clickIncrease() {
    setValue((prevCount) => prevCount + 1);
  }
  function clickReset() {
    setValue(0);
  }

  return (
    <>
      <h2>Regular counter</h2>
      <h1>{value}</h1>
      <button className="btn" onClick={clickDecrease}>
        Decrease
      </button>
      <button className="btn" onClick={clickReset}>
        Reset
      </button>
      <button className="btn" onClick={clickIncrease}>
        Increase
      </button>
    </>
  );
};

export default useStateTraining;
