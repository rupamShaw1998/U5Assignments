import { useEffect, useState } from "react"

export const Todos = () => {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState("");
    // const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    // console.log(todos)

    useEffect(() => {
        getData();

        return function () {
            console.log("Umounted done");
        }
    }, [page]);

    async function getData() {
        try {
            const res = await fetch(`http://localhost:8080/todos?_page=${page}&_limit=3`);
            const data = await res.json();
            // console.log(data);
            setTodos(data);
            setLoading(false);
        }
        catch(err) {
            console.log(err);
        }       
    }

    return (
        <div>
            <div>
                <input 
                    type="text" 
                    placeholder="Enter todo"
                    onChange={(e) => setText(e.target.value)}
                />
                <button
                    onClick={() => {
                        const paylaod = {
                            title: text,
                            status: false
                        };
                        fetch("http://localhost:8080/todos", {
                            method: "POST",
                            headers: {
                                "content-type": "application/json",
                            },
                            body: JSON.stringify(paylaod),
                        }).then(() => {
                            getData();
                        });
                    }}
                >
                    Add todo
                </button>
                <button
                    onClick={() => {
                        setPage(page-1);
                    }}
                >prev</button>
                <button
                    onClick={() => {
                        setPage(page+1);
                    }}
                >next</button>
            </div>
            <div>
                {todos.map((ele) => (
                    <div>{ele.title}</div>
                ))}
            </div>
        </div>
    )
}