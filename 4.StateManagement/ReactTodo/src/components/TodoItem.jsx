import { useState } from "react";

const TodoItem = ({ todo, handleStatus }) => {
  const [show, setShow] = useState(true);
  return (
    <div>
      {show? (
          <div className="input">
            <input
             type="checkbox"
             onClick={() => {
               handleStatus(todo.id);
               setShow(!show);
             }}
            />
            <div>{todo.title}</div>
            <button 
              onClick={() => setShow(false)}
            >X</button>
          </div>
        ): null}
    </div>
  );
};

const Completed = ({ todo, handleStatus }) => {
  const [show, setShow] = useState(true);
  return (
    <div>
      { todo.status && show? (
          <div className="input">
            <p id="green">✔ </p>
            <p id="strike">{todo.title}</p>
            <button
              onClick={() => setShow(false) }
            >X</button>
          </div>
        ): null}
    </div>
  );
};

export { TodoItem, Completed };


// {/* <p>
//   {todo.title} - {todo.status? <span className="green">⬤</span>: <span className="red">⬤</span>}
//   <button onClick={() => handleStatus(todo.id)}>Toggle</button>
//   <button>X</button>
// </p> */}