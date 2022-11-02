import {useState,useEffect} from "react";
import Form from "./form";
import List from "./list";
import Footer from "./footer";
import "../../App.css";
export default function Todo() {
  
 
  const [todos, setTodos] = useState([]);
  const [hide, setHide] = useState("All");

  useEffect(() => {
    console.log(todos)
  }, [todos]);

  return (
    <section>
     
      <Form todos={todos} addTodo={setTodos} />
      <List todos={todos} setTodos={setTodos}/>
      <Footer todos={todos} setTodos={setTodos}/>
    </section>
  );
}
