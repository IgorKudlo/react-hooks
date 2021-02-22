import React, {useState, useEffect, useRef} from "react";

function App() {
    const [value, setValue] = useState('initial');
    const renderCount = useRef(1);

    useEffect(() => {
        renderCount.current++
    })

    return (
        <div>
            <h1>Количество рендеров: {renderCount.current}</h1>
            <input type="text" onChange={e => setValue(e.target.value)} value={value} />
        </div>
    );
}

export default App;
