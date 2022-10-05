import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = []

const init = () => {
    return JSON.parse( localStorage.getItem( 'todos' )) || [];
}

export const useTodo = () => {
    const [ todos, dispatchTodo ] = useReducer( todoReducer, initialState, init);

    // implementacion de localStore
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos) || [] );
    }, [todos])
    
    const handleNewTodo = ( todo ) =>{
        alert(`se agrego ${todo.description}`);
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        dispatchTodo(action)
    }

    const handleDeleteTodo = ( id ) =>{
        alert(`se se elimino el id: ${id}`);
        const action = {
            type: '[TODO] Remove Todo',
            payload: id
        }
        dispatchTodo(action)
    }

    const handleToggleTodo = ( id ) => { 
        console.log(id)
        const action = {
            type: '[TODO] Toggle Todo',
            payload: id
        }
        dispatchTodo(action)
    }

    return {
        todos: todos,
        handleNewTodo: handleNewTodo,
        handleDeleteTodo: handleDeleteTodo,
        handleToggleTodo: handleToggleTodo,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length,
    }
}