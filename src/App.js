import {useSelector, useDispatch} from "react-redux";
import './App.css';
import {actions} from "./store";

function App() {
    const counter = useSelector((state => state.counter));
    const dispatch = useDispatch();

    const increment = () => {
        dispatch(actions.increment());
    }

    const decrement = () => {
        dispatch(actions.decrement());
    }

    const add = () => {
        dispatch(actions.add(10));
    }

    return (
        <div>
            <h1>Counter App</h1>
            <h2>{counter}</h2>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={add}>add 10</button>
        </div>
    );
}

export default App;
