import {useEffect,useState} from 'react'

export default function List({todos}) {
  const [filter, setFilter] = useState("");

  const filteredTodos = todos.filter((todo) => {
    return todo.title.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div>
      <ul>
        {filteredTodos.map((todo,index)=>{
          return <li key={index}>{todo.title}</li>
        }
        )}
      </ul>
    </div>
  )
}
