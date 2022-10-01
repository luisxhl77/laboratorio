import { useState } from "react";

export const TodoAdd = (onNewTodo) => {
    
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        //trim() -> elimina espacios en blanco
        //length identifica cuanto strings tiene la variable
        if ( inputValue.trim().length > 0) {
            onNewTodo( inputValue );
            setInputValue('');
        }else{
            alert('ingrese algo')
        }
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text" 
                name="" 
                id="" 
                value={inputValue}
                onChange={onInputChange}
                placeholder="que hay que hacer?"
                className="form-control"
            />
            <button 
                type="submit"
                className="btn btn-outline-primary mt-2"
                > 
                agregar 
            </button>
        </form>
    )
}
