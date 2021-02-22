import React, {useState, useEffect, useRef} from "react";

function App() {
    const [value, setValue] = useState('initial');
    const renderCount = useRef(1);
    const inputRef = useRef(null);

    useEffect(() => {
        renderCount.current++;
        console.log(inputRef.current.value)
    })

    const focus = () => inputRef.current.focus();

    return (
        <div>
            <h1>Количество рендеров: {renderCount.current}</h1>
            <input ref={inputRef} type="text" onChange={e => setValue(e.target.value)} value={value} />
            <button className="btn btn-success" onClick={focus}>Фокус</button>
        </div>
    );
}

export default App;
