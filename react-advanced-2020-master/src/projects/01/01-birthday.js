import React, { useState } from 'react';
import { dataStorage } from './data';
import './01-birthday.css';

const useStateBirthday = () => {
  const [data, setData] = useState(dataStorage);

  function handleClick() {
    setData((prevData) => []);
  }

  return (
    <>
      <div className="card">
        {data.map((item) => {
          return (
            <>
              <section>
                <div className="info">
                  <h4 className="name-birthday">{item.name}</h4>
                  <h4 className="age-birhday">{item.age}</h4>
                  <h4 className="data-birthday">{item.birthday}</h4>
                </div>
                <img src={`${item.img}`} alt="img" className="img-birthday" />
              </section>
            </>
          );
        })}
      </div>
      <button className="btn" onClick={handleClick}>
        Clear All
      </button>
    </>
  );
};

export default useStateBirthday;
