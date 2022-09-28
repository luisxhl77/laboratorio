import { useEffect } from "react"
import { useForm } from "../hooks/useForm";
import { Message } from "./Message";

export const FormWithCustmHook = () => {
    const {formState, onResetForm, onInputChange, username, email, password, telefono} = useForm({
        username: '',
        email: '',
        password: '',
        telefono: ''
    });



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
            <h1>Formulario con customhooks Simple</h1>
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
                ( email === 'luis@example.com') && <Message text='correo ya existe'/>
            }
            <input 
                type="password"   
                className="form-control mt-2"
                placeholder="ingrese contraseña"
                name="password"
                value={password}
                onChange={onInputChange}
            />
            <input 
                type="number"   
                className="form-control mt-2"
                placeholder="ingrese telefono"
                name="telefono"
                value={telefono}
                onChange={onInputChange}
            />
            <button  onClick={ onResetForm } className="btn btn-primary mt-2">reset</button>
        </>
    )
}
