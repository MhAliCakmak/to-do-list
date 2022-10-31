import { useState, useEffect } from "react";


export default function Form({ addTodo, todos }) {
  const [form, setForm] = useState("");

  const onChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  // for forms we need to use onSubmit
  const onSubmitForm = (e) => {
    e.preventDefault();
    if (form.title) {
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
  useEffect(() => {
    setForm();
  }, [todos]);

  return (
    <div>
      <h1>Form</h1>

      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          onChange={onChangeForm}
          name="title"
          value={form.title}
          placeholder="What needs to be done?"
        />
      </form>
    </div>
  );
}
