import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        //trim() -> elimina espacios en blanco
        //length identifica cuanto strings tiene la variable
        if ( inputValue.trim().length > 0) {

            onNewCategory( inputValue );
            setInputValue('');
        
        }
    }

    return (
        <form onSubmit={ onSubmit } aria-label="form">
            <input 
                type="text"
                placeholder="buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}