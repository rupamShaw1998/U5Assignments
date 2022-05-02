import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Redux/action";

export const Todo = () => {
    const [text, setText] = useState("");
    const todos = useSelector(store => store.todos);
    const dispatch = useDispatch();
    // console.log(todos);

    const handleChange = (e) => {
        setText(e.target.value);
    };
    const handleAdd = () => {
        dispatch(addTodo({
            title: text,
            status: false
        }))
    }

    return (
        <div>
            <input
                type="text" 
                placeholder="Add a todo"
                onChange={handleChange}
            />
            <button onClick={handleAdd}>+</button>
            {todos.map(ele => (
                <div key={ele.title}>{ele.title}</div>
            ))}
        </div>
    );
};