
export const TodoList = ({description}) => {
    return (
        <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between">
                <span className="align-self-center"> { description } </span>
                <button className="btn btn-primary"> Borrar </button>
            </li>
        </ul>
    )
}
