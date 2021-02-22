import React, {useState} from "react";

function App() {
    const [number, setNumber] = useState(42);

    return (
        <>
            <h1>Вычисляемое свойство: {number}</h1>
            <button className="btn btn-success" onClick={() => setNumber(prev => prev + 1)}>Добавить</button>
            <button className="btn btn-danger" onClick={() => setNumber(prev => prev + 1)}>Убрать</button>
        </>
    );
}

export default App;
