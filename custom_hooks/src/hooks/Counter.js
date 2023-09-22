import { useState } from 'react'

function Counter({ valorInicial }) {
    const [counter, setCounter] = useState(valorInicial);

    const increment = () => {
        setCounter(counter + 1);
    }

    const decrement = () => {
        setCounter(counter - 1);
    }

    return [counter, increment, decrement];
}

export default Counter;