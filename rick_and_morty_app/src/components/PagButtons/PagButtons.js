import React from 'react';

const PagButtons = ({ prev, next, handlePrevious, handleNext }) => {
    return (
        <>
            <ul className='d-flex justify-content-center'>
                <li className=''>
                    <button onClick={handlePrevious}>previous</button>
                </li>
                <li className=''>
                    <button onClick={handleNext}>next</button>
                </li>
            </ul>
        </>
    )
}

export default PagButtons