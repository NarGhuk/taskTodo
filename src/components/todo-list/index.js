import React from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({todoData,deleteItem,toggleImportant,toggleDone}) => {
    const Elements = todoData.map((item) => {
    const {id, ...itemProps} = item;
        return (
            <li key={id} className={'list-group-item'}>
                <TodoListItem {...itemProps}
                              toggleImportant={()=>toggleImportant(id)}
                              toggleDone={()=>toggleDone(id)}
                              deleteItem={deleteItem}
                              id={id}
                />
            </li>
        )
    });

    return (
        <ul className="list-group todo-list">
            {Elements}
        </ul>
    )
};
export default TodoList
{/*<TodoListItem label={item.label} important={item.important}/>
{/* {...item } nshanakuma itemic  vercra  hat hat elementner@  yev  poxancicomponenti  propsin */}