import React, {useState} from "react";

function App() {
    const [colored, setColored] = useState(false);
    const [count, setCount] = useState(1);

    const styles = {
        color: colored ? 'darkred' : 'black'
    }

    return (
        <>
            <h1 style={styles} >Количество элеиентов: </h1>
            <button className="btn btn-success" onClick={() => setPrev(prev => prev + 1)}>Добавить</button>
            <button className="btn btn-warning" onClick={() => setColored(prev => !prev)}>Изменить</button>
        </>
    );
}

export default App;
