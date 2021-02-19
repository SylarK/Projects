import React from 'react';

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="todolist">
            <h1>Todos</h1>
            <ul className="list-unstyled">
              <li className="ui-state-default">
                <div className="checkbox">
                  <label>
                    <input type="checkbox" value="" />
                    Take out the trash
                  </label>
                </div>
              </li>
              <li className="ui-state-default">
                <div className="checkbox">
                  <label>
                    <input type="checkbox" value="" />
                    Buy the last film of Avengers
                  </label>
                </div>
              </li>
              <li className="ui-state-default">
                <div className="checkbox">
                  <label>
                    <input type="checkbox" value="" />
                    Teach my dragon
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;