import { useContext, useState } from 'react';
import { TodoContext } from '../../TodoContext';
import useTodosLocalStorageRepository from '../../hooks/useTodosLocalStorageRepository';
import './TodoForm.css'

const TodosForm = () => {
    const [newTodo, setTodo] = useState('');
    const { add } = useTodosLocalStorageRepository('TODOS')
    const {
        setTodos,
        setOpenModal,
    } = useContext(TodoContext);
    const onCancel = () => {
        setOpenModal(false);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        const todos = add({
            text: newTodo
        });
        setTodos(todos);
        setOpenModal(false);
    };

    const onChange = (event) => {
        setTodo(event.target.value);
    };
    return (
        <form onSubmit={onSubmit}>
            <label>Write your new TODO ✅</label>
            <textarea
                value={newTodo}
                onChange={onChange}
                placeholder="Add a description of your TODO 📝"
            />
            <div className="todo-form-button-container">
                <button type="submit" className="todo-form-button todo-form-button-add">Save 💾</button>
                <button type="button" className="todo-form-button todo-form-button-cancel" onClick={onCancel}>Cancel</button>
            </div>
        </form>
    );
}

export default TodosForm;