import { useEffect, useState } from "react";
import "../../../App.css";
export default function List({ todos, setTodos }) {
  

const allStatus =(e) => {
  setTodos(todos.map((value) => {

      return { ...value, checked: (e.target.checked ? true : false) }
  }));
}

const changeTodo = (e) => {
  const id = e.target.id;
  console.log(id)
  setTodos(todos.map((value) => {
    
    value.id === todo.id ? { ...value, checked: (value.checked ? false : true) }: value
    
      
    
 
  }));
}






  const deleteTodo = (e) => {
    const id = e.target.id;
    setTodos([...todos.filter((todo) => todo.id !== parseInt(id))]);
    
  };

  return (
    <section className="main">
      <input id='toggle-all' className="toggle-all" type="checkbox" onChange={allStatus} />
      <label  htmlFor="toggle-all">Mark all as complete</label>
      <div>
        <ul className="todo-list">
          {todos.map((todo, index) => {
            return (
              <li key={index} className={todo.checked ? "completed" : ""}>
                <div className="view">
                  <input id={index} className="toggle" onChange={changeTodo} defaultChecked={todo.checked} type="checkbox" />
                  <label>{todo.todo}</label>
                  <button className="destroy"></button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
