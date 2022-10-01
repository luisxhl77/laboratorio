//estado inicial
const initialState = [{
    id: 1,
    todo: 'recolectar la piedra del alma',
    done: false,
}];

//reducer
const todoReducer = ( state = initialState, action = {} ) => {
    
    if ( action.type === '[TODO] add todo' ) {
        return [ ...state, action.payload ];
    }

    return state;
}

//se ejecuta el reducer en una variable
let todos = todoReducer();
console.log({state: todos});

//se crean los datos que se incorporaran al estado
const newTodo = {
    id: 2,
    todo: 'recolectar la piedra del poder',
    done: false,
}

// se crea una accion para agregar los nuevos estados
const addTodoAction = {
    type: '[TODO] add todo',  // -> la accion
    payload : newTodo,   // -> lo que carga la accion
}

//se mandan como parametros el estado inicial y el nuevo estado
todos = todoReducer( todos, addTodoAction );
console.log({state: todos});