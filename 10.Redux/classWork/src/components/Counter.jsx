import { useDispatch, useSelector } from "react-redux";
import { addCount } from "../Redux/action";
import { store } from "../Redux/store";

export const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector(store => store.counter);

    return (
        <div>
            <h3>Counter: {count}</h3>
            <button
                onClick={() => dispatch(addCount(1))}
            >
                Add 1
            </button>
        </div>
    );
};