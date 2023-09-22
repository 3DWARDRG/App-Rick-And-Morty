import React from 'react'
import useRandomColor from '../../hooks/RandomColor';

function ColorChanger() {
    const [color, setColor] = useRandomColor()

    const objeto = {
        prop1: "Ejemplo de prop1",
        prop2: "Ejemplo de prop2"
    }

    const arreglo = [5, 2, 9, 12, 45]

    //const propiedad1 = objeto.prop1
    //const propiedad2 = objeto.prop2

    //const { prop1, prop2 } = objeto
    const { prop1, prop2 } = objeto

    console.log(prop1);
    console.log(prop2);

    const [primero, segundo, tercero, cuarto, quinto] = arreglo;

    console.log(tercero);


    return (
        <>
            <div
                style={{
                    backgroundColor: color,
                    width: '200px',
                    height: '200px',
                    margin: '20px auto',
                }}
            >
                {/* Elemento cuyo color se cambiará */}
            </div>
            <button onClick={setColor}>Cambiar Color</button>
            <button onClick={setColor}>Cambiar Color Alternativo</button>
        </>
    );
}

export default ColorChanger;