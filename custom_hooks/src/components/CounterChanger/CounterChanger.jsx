import React from 'react';
import useCounter from '../../hooks/Counter'; // Asegúrate de importar el hook correctamente

function CounterChanger() {
    const [count, increment, decrement] = useCounter({ valorInicial: 15 });

    return (
        <div>
            <h1>Contador: {count}</h1>
            <button onClick={increment}>Incrementar</button>
            <button onClick={decrement}>Decrementar</button>
        </div>
    );
}

export default CounterChanger;
