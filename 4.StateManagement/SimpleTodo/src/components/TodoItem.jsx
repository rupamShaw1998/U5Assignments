export const TodoItem = ({ todo, handleStatus }) => {
  return (
    <p>
      {todo.title} - {todo.status? <span className="green">⬤</span>: <span className="red">⬤</span>}
      <button onClick={() => handleStatus(todo.id)}>Toggle</button>
    </p>
  );
};