import { useState } from 'react';

function useRandomColor() {
    const [color, setColor] = useState('#000000');

    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let randomColor = "#";
        for (let i = 0; i < 6; i++) {
            randomColor += letters[Math.floor(Math.random() * 16)];
        }
        return randomColor;
    }

    const changeColor = () => {
        setColor(getRandomColor());
    }

    return [color, changeColor];
}

export default useRandomColor