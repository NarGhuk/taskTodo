import React from 'react';
import './todo-list-item.css';

const TodoListItem = ({label = false, deleteItem, id, toggleImportant, toggleDone, done, important}) => {

    return (
        <span className={`todo-list-item ${done ? 'done' : ''} ${important ? 'important' : ''}`}>
            <span
                className={'todo-list-item-label '}
                onClick={toggleDone}
            >
                {label}
            </span>
            <button type="button"
                    className="btn btn-outline-success btn-sm float-right"
                    onClick={toggleImportant}
            >
                    <i className="fa fa-exclamation"/>
             </button>

            <button type="button"
                    className="btn btn-outline-danger btn-sm float-right"
                    onClick={() => deleteItem(id)}

            >
                <i className="fa fa-trash-o"/>
            </button>
        </span>
    )
};

export default TodoListItem;