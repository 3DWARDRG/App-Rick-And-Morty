import React, { useState } from 'react';
import './Counter.css';

function Counter(props) {
    const [contador, setCount] = useState(props.initCount);//hook
    //destructuración de objetos/arreglos

    return (
        <div className="counter-main">
            <h5>{contador}</h5>
            <div className="counter-button">
                <button onClick={() => setCount(contador + 1)}>
                    Agregar
                </button>
                <button onClick={() => setCount(contador - 1)}>
                    Disminuir
                </button>
            </div>
        </div>
    );
}

export default Counter;
