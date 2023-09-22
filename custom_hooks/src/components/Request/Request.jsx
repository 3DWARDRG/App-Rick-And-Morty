import React, { useEffect } from 'react';
import useFetch from '../../hooks/UseFetch'; // Suponiendo que el hook se encuentra en un archivo separado

function Request() {
    const url = 'https://pokeapi.co/api/v2/pokemon/ditto'; // Reemplaza esto con la URL de tu API

    const [data, isLoading, error] = useFetch(url);

    useEffect(() => {
        // Aquí puedes realizar acciones adicionales basadas en el estado del hook
        if (error) {
            console.error('Error:', error);
        }

        if (!isLoading && data) {
            console.log('Data fetched successfully:', data);
        }
    }, [data, isLoading, error]);

    console.log(data);
    console.log(isLoading);
    console.log(error);

    return (
        <>
            {isLoading ? (
                <p>Cargando...</p>
            ) : error ? (
                <p>Ocurrió un error al cargar los datos.</p>
            ) : (
                <div>
                    {/* Renderiza los datos aquí */}
                    <p>Datos:</p>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
            )}
        </>
    );
}

export default Request;
