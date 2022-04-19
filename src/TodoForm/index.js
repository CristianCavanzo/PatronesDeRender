import React from 'react';
import './todoForm.css';

function TodoForm({ addTodo, setOpenModal }) {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const onChange = (e) => {
        setNewTodoValue(e.target.value);
    };
    const onCancel = () => {
        setOpenModal(false);
        setNewTodoValue('');
    };
    const onAdd = (e) => {
        if (newTodoValue.length <= 5) {
            setOpenModal(false);
        } else {
            e.preventDefault();
            addTodo(newTodoValue);
            setOpenModal(false);
        }
    };
    return (
        <form onSubmit={onAdd}>
            <label htmlFor="">Escribe tu nuevo TODO</label>
            <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Cortar la cebolla para el almuerzo "
                value={newTodoValue}
                onChange={onChange}
            ></textarea>
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button-cancel"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    className="TodoForm-button TodoForm-button-add"
                    type="submit"
                >
                    Añadir
                </button>
            </div>
        </form>
    );
}

export { TodoForm };
