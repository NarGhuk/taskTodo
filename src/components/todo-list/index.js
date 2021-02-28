import React, {useEffect} from 'react';
import TodoListItem from './todo-list-item';
import {allTodoListSelector} from '../../state-menagment/selectors/todos'
import {apiActions} from '../../state-menagment/actions';
import {useDispatch, useSelector} from 'react-redux';

const TodoList = () => {
    const dispatch = useDispatch();
    const {data: todos, isLoading} = useSelector((state) => allTodoListSelector(state));
    useEffect(() => {
        dispatch(apiActions.getAllTodo)
    }, [dispatch]);

    return !isLoading &&  (
        <ul>
            {
                todos.map((item) => (
                    <TodoListItem
                        key={item['_id']}
                        title={item['title']}
                        description={item['description']}
                        color = {item['color']}
                        id={item['_id']}
                    />
                ))
            }
        </ul>
    )
};
export default TodoList
