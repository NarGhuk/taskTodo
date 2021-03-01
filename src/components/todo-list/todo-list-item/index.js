import React, {useState,memo} from 'react';
import {useDispatch} from 'react-redux';
import {apiActions} from '../../../state-menagment/actions';

const TodoListItem = ({
                          description,
                          color,
                          title,
                          id
                      }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [descState, setDescState] = useState(description);
    const [titleState, setTitleState] = useState(title);
    const [completed, setCompleted] = useState(false);
    const [important, setImportant] = useState(false);
    const dispatch = useDispatch();
    const cls = ['todo', 'list-group-item'];
    if (completed) {
        cls.push('completed')
    }

    const handleUpdate = (id) => (e) => {
        e.preventDefault();
        dispatch(apiActions.updateTodo(id, {title: titleState, description: descState, color}));
        setIsEditing(!isEditing);
    };

    const removeTodo = (id) => (e) => {
        e.preventDefault();
        if (!important && !isEditing) {
            dispatch(apiActions.removeTodo(id))
        }

    };

    const todoField = (
        <div className={'input-field'}>
            <input
                type="checkbox"
                checked={completed}
                onChange={() => {
                    setCompleted(prevState => !prevState)
                }}
            />
            <span className={important ? 'important' :''}>{description}</span>
        </div>
    );
    const updateTodoField = (
        <div className="input-field ">
            <span> Title</span>
            <input onChange={(e) => setTitleState(e.target.value)} value={titleState} type="text"/>
            <span>description </span>
            <input onChange={(e) => setDescState(e.target.value)} value={descState} type="text"/>
            <button disabled={false} className={' btn-small'} onClick={handleUpdate(id)}>Save</button>
        </div>
    );
    return (
        <li className={cls.join(' ')}>
            <h5 style={{color: color}}>{title}</h5>
            <label style={{border: `solid 2px ${color}`}}>
                {!isEditing ? todoField : updateTodoField}
                <div>
                    <i className={`material-icons  ${isEditing ? 'green-text' : 'grey-text'}`}
                       onClick={(e) => {
                           e.preventDefault();
                           setIsEditing(prevState => !prevState)
                       }}
                    >edit</i>

                    <i className={`material-icons ${important ? 'important' : ' grey-tex'}`}
                       onClick={(e) => {
                           e.preventDefault();
                           setImportant(prevState => !prevState)
                       }}>
                        notification_important
                    </i>
                    <i className={`material-icons  ${(important || isEditing) ? 'grey-tex' : 'red-text'}`}
                       onClick={removeTodo(id)}>
                        delete
                    </i>
                </div>
            </label>
        </li>
    )
};

export default memo(TodoListItem);
