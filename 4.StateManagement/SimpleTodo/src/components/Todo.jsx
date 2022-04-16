import { useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItem";

function Todo() {
  const [todosList, setTodosList] = useState([]);

  const getData = (text) => {
    const playload = {
      title: text,
      status: false,
      id: Math.ceil(Math.random()*10000)
    };
    setTodosList([...todosList, playload]);
  };

  const handleStatus = (id) => {
    // console.log("id:", id);
    setTodosList([...todosList.map(e => e.id == id? {...e, status: !e.status}: e)]);
  }

  return ( 
    <div>
     {
       todosList.map(e => (
        <div className="item">
          <TodoItem todo={e} handleStatus={handleStatus} />
        </div>
       ))
     }
     <TodoInput getData={getData} />
    </div>
  );
}

export {Todo};