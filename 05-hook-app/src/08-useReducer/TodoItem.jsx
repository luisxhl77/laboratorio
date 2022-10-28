import  PropTypes  from "prop-types"

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className={`align-self-center ${ (todo.done) ? 'text-decoration-line-through' : '' }`} 
                onClick={() => onToggleTodo(todo.id)}
                aria-label="span"
            >
                { todo.description } 
            </span>
           <button 
                className="btn btn-primary" 
                onClick={() => onDeleteTodo(todo.id)}
                aria-label= "delete"
            > 
                Borrar 
            </button>
        </li>
    )
}

TodoItem.prototype = {
    todo: PropTypes.string.isRequired,
}