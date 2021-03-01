import React, {useEffect} from 'react';
import TodoListItem from './todo-list-item';
import {allTodoListSelector} from '../../state-menagment/selectors/todos'
import {apiActions} from '../../state-menagment/actions';
import {useDispatch, useSelector} from 'react-redux';
import {useContextData} from '../../context';



const TodoList = () => {
    const dispatch = useDispatch();
    const {data: todos, isLoading} = useSelector((state) => allTodoListSelector(state));
    const {searchName} = useContextData();

    const filterBySearchName = (searchName, list)=> {
        return searchName ? list.filter(item => item.title.toLowerCase().indexOf(searchName.toLowerCase()) !== -1) : list
    };
    useEffect(() => {
        dispatch(apiActions.getAllTodo)
    }, [dispatch]);

    return !isLoading &&  (
        <ul>
            {
                todos.length && filterBySearchName(searchName, todos).map(item=>(
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
