import React from 'react'
import style from '../components/todo.module.css'


function Todo({ todo }) {
    return (
        <div>
            <p className={style.todo}>{todo}</p>
        </div>
    );
}

export default Todo;