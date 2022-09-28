import { useState } from 'react';
import PropTypes from 'prop-types';


export const CounterApp = ({value}) => {
    //const [counter, setCounter] = useState(10);
    const [counter, setCounter] = useState(value);
    const contador =() => {
        setCounter( counter +1);
    }
    const restador = () => {
        setCounter( counter -1);
    }
    const reset = () => {
        setCounter(value);
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
        
            {/*<button onClick={contador}> +1 </button>*/}
            <button onClick={contador}> +1 </button>
            <button onClick={restador}> -1 </button>
            <button onClick={reset}> reset </button>
        </>
    );
}

// definicion del contenido de las propiedades
CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
}

// estados por default de las propiedades
CounterApp.defaultProps ={
    value: 123,
    name: 'luis',
}
