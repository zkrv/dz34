import React from 'react';
import Todo from '../../components/Todo';
import style from './todosPage.module.css';

function TodosPage() {
    const todos = ['todo 1', 'todo 2', 'todo 3'];

    return (
        <div>
            <h1 className={style.todosPage}>For Todos</h1>
            {todos.map((todo, index) => (
                <Todo key={index} todo={todo} />
            ))}
        </div>
    );
}

export default TodosPage;