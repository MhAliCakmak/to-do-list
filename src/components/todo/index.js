import {useState,useEffect} from "react";
import Form from "./form";
import List from "./list";
export default function Todo() {
  
  const storage = JSON.parse(localStorage.getItem("ToDoS")) 
  const [todos, setTodos] = useState(storage);
  const [hide, setHide] = useState("All");
  localStorage.setItem("ToDoS", JSON.stringify(todos))
  useEffect(() => {
    console.log(todos)
  }, [todos]);
  return (
    <div>
      <h2>Todo</h2>
      <Form todos={todos} addTodo={setTodos} />
      <List todos={todos} />
    </div>
  );
}
