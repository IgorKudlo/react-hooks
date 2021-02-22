import React, {useState, useMemo, useEffect} from "react";

function complexComputed(num) {
    console.log('complexComputed')
    let i = 0;
    while (i < 1000000000) i++
    return num * 2;
}

function App() {
    const [number, setNumber] = useState(42);
    const [colored, setColored] = useState(false);

    const styles = useMemo(() => {
        return {
            color: colored ? 'darkred' : 'black'
        }
    }, [colored]);

    const computed = useMemo(() => {
        return complexComputed(number)
    }, [number]);

    useEffect(() => {
        console.log('Styles changed')
    }, [styles]);

    return (
        <>
            <h1 style={styles} >Вычисляемое свойство: {computed}</h1>
            <button className="btn btn-success" onClick={() => setNumber(prev => prev + 1)}>Добавить</button>
            <button className="btn btn-danger" onClick={() => setNumber(prev => prev - 1)}>Убрать</button>
            <button className="btn btn-warning" onClick={() => setColored(prev => !prev)}>Изменить</button>
        </>
    );
}

export default App;
