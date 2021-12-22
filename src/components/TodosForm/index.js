import { useState } from 'react';
import './TodoForm.css'

const TodosForm = ({
    onSave,
    onOpenModal,
    addTodos
} ) => {
    const [newTodo, setTodo] = useState('');
    const onCancel = () => {
        onOpenModal(false);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        const todos = addTodos({
            text: newTodo
        });
        onSave(todos);
        onOpenModal(false);
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