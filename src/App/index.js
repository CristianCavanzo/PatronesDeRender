// import './App.css';
import React from 'react';
import { useTodos } from './useTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../modal';
import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';
import { TodoForm } from '../TodoForm';
import { EmptyTodos } from '../todoStates/EmptyTodos';
import { TodosError } from '../todoStates/TodosError';
import { TodosLoading } from '../todoStates/TodosLoading';

function App() {
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        addTodo,
    } = useTodos();
    return (
        <React.Fragment>
            <TodoCounter
                totalTodos={totalTodos}
                completedTodos={completedTodos}
            />
            <TodoSearch
                setSearchValue={setSearchValue}
                searchValue={searchValue}
            />

            <TodoList>
                {loading && <TodosLoading />}
                {error && <TodosError />}
                {!loading && totalTodos === 0 && <EmptyTodos />}
                {searchedTodos.map((todo) => (
                    <TodoItem
                        title={todo.text}
                        key={`${todo.text}_${todo.id}`}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

            {openModal && (
                <Modal>
                    <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
                </Modal>
            )}

            <CreateTodoButton
                setOpenModal={setOpenModal}
                openModal={openModal}
            />
        </React.Fragment>
    );
}

export default App;
