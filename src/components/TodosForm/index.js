import { useState } from 'react';
import useTodosLocalStorageRepository from '../../hooks/useTodosLocalStorageRepository';
import './TodoForm.css'

const TodosForm = ({
    setTodos,
    setOpenModal,
    addTodos
} ) => {
    const [newTodo, setTodo] = useState('');
    const onCancel = () => {
        setOpenModal(false);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        const todos = addTodos({
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