import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {
    const [formState, setFormState] =  useState({
        username: 'luis',
        email: 'luis@example.com'
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        })

    }


    //POR BUENS PRACTICAS SE RECOMIENDA CREAR UN USEEFFECT PARA CADA FUNCION
    useEffect( () =>{
        //console.log('hohohhohohoo')
    },[]); // -> se agrega un array vacido para indicar que solo se ejecutara una vez el useeffect
    
    useEffect( () =>{
        //console.log('cada que se modifique el formState se ejecutara ete useEfect')
    },[formState]); // -> se agrega un array vacido para indicar que solo se ejecutara una vez el useeffect
    
    useEffect( () =>{
        //console.log('se ejecutara solo cuando se modifica el emai')
    },[email]); // -> se agrega un array vacido para indicar que solo se ejecutara una vez el useeffect


    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />
            <input 
                type="text" 
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            {
                (username === 'luis2') && <Message text='usuario ya existe'/>
            }
            <input 
                type="email"  
                className="form-control mt-2"
                placeholder="luixhl7@gmail.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />
            {
                ( email === 'luis@example.com2') && <Message text='correo ya existe'/>
            }
        </>
    )
}
