import { useReducer } from "react"
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";

const initialState = [{
    id: new Date().getTime(),
    description: 'recolectar la piedra del alma',
    done: false,
},{
    id: new Date().getTime() * 3,
    description: 'recolectar la piedra del poder',
    done: false,
}
]


export const TodoApp = () => {

    const [ todos, dispatchTodo ] = useReducer( todoReducer, initialState );

    const onNewTodo = (value) => {
        console.log( 'handleNewTodo', value)
    }




    return (
        <>
            <h1>TodoApp: 10, <small>pendientes: 2</small></h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    {
                        todos.map((todo) => (
                            <TodoList {...todo} key={todo.id}/>
                        ))
                    }
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo ={ (value) => onNewTodo(value)}/>
                </div>
            </div>

        </>
    )
}
