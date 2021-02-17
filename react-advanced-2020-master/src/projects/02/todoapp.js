import React, { useState } from 'react';
import './todoapp.css';

const TodoApp = () => {
  const [data, setData] = useState([
    { text: 'This is a sampe todo', isDone: false },
  ]);

  //add
  const addTodo = (text) => {
    const newTodos = [...data, { text }];
    setData(newTodos);
  };

  //mark
  const markTodo = (index) => {
    const newTodos = [...data];
    newTodos[index].isDone = true;
    setData(newTodos);
  };

  //remove
  const removeTodo = (index) => {
    const newTodos = [...data];
    newTodos.splice(index, 1);
    setData(newTodos);
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo List</h1>
        <FormTodo addTodo={addTodo} />
        <div>
          {data.map((todo, index) => (
            <Card>
              <Card.Body></Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
