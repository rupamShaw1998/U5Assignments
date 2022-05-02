import { legacy_createStore as createStore } from "redux";
import { counterReducer } from "./Reducer";

export const store = createStore(counterReducer, { counter: 0, todos: [] });

store.subscribe(() => {
    console.log("subs", store.getState());
})