import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Pruebas de <TodoItem/>', () => {

    const todo  = {
        id: 1,
        description: 'piedra del alma',
        done: false
    }
    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn(); 

    beforeEach(() => jest.clearAllMocks() )

    test('debe de mostrar el Todo Pendiente de completar', () => {

        render( <TodoItem todo={todo} onToggleTodo={ onToggleTodoMock } onDeleteTodo={onDeleteTodoMock }/>)

        const liElement = screen.getByRole('listitem');

        expect( liElement.className).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');

        console.log('estp', spanElement);
        expect( spanElement.className ).toBe('align-self-center ')

        screen.debug() 

    })

    test('debe de mostrar el componente completado', () => {

        todo.done = true;

        render( <TodoItem todo={todo} onToggleTodo={ onToggleTodoMock } onDeleteTodo={onDeleteTodoMock }/>)

        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className ).toBe('align-self-center text-decoration-line-through');

    })

    test('span debe de llamar el ToggleTodo cuando se hace click', () => {
        
        render( <TodoItem todo={todo} onToggleTodo={ onToggleTodoMock } onDeleteTodo={onDeleteTodoMock }/>)

        const spanElement = screen.getByLabelText('span');

        fireEvent.click(spanElement); 

        expect( onToggleTodoMock ).toHaveBeenLastCalledWith( todo.id);
    })

    test('span debe de llamar el deleteTodo cuando se hace click', () => {
        
        render( <TodoItem todo={todo} onToggleTodo={ onToggleTodoMock } onDeleteTodo={onDeleteTodoMock }/>)

        const buttonDelete = screen.getByLabelText('delete');

        fireEvent.click(buttonDelete); 

        expect( onDeleteTodoMock ).toHaveBeenLastCalledWith( todo.id );
    })
})