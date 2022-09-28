import { useState } from "react";

export const useForm = (initialForm = {}) => {
    const [formState, setFormState] =  useState(initialForm);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const onResetForm = () => {
        setFormState(initialForm);
    }

    return {
        ...formState, // <---- se desestructura desde aqui para no tener que hacerlo en el formulario
        formState,
        onInputChange,
        onResetForm,
    }
}

/*

*/