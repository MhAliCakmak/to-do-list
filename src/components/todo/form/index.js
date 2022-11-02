import { useState, useEffect } from "react";
import "../../../App.css";

export default function Form({ addTodo, todos }) {
  const [form, setForm] = useState("");

  const onChangeForm = (e) => {
    setForm(e.target.value);
  };
  // for forms we need to use onSubmit
  const onSubmitForm = (e) => {
    e.preventDefault();
    if (form) {
      console.log(form);
      addTodo([
        ...todos,
        {
          id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 0,
          todo: form,
          checked: false,
        },
      ]);
      setForm("");
    }
  };
  // Compare this snippet from src\components\todo\form\index.js:
  useEffect(() =>{
    setForm();
  }, [todos]);

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          onChange={onChangeForm}
          name="form"
          value={form}
          placeholder="What needs to be done?"
          className="new-todo"
          autoFocus
        />
        
      </form>
    </header>
  );
}
