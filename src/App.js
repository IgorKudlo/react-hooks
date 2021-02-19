import React, {useState} from "react";

function computeInitCounter() {
    console.log('Some calculation ...');
    return Math.trunc(Math.random() * 20);
}

function App() {
    //const [counter, setCounter] = useState(0);
    const [counter, setCounter] = useState(() => {
        return computeInitCounter();
    })

    function increment() {
        setCounter((prevCounter) => {
            return prevCounter + 1;
        });
    }

    function decrement() {
        setCounter(counter - 1);
    }

    return (
        <div>
            <h1>Счетчик: {counter}</h1>
            <button onClick={increment} className="btn btn-success">Добавить</button>
            <button onClick={decrement} className="btn btn-danger">Убрать</button>
        </div>
    );
}

export default App;
