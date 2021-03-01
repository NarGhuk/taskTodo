import { combineReducers } from "redux";
import todoList from  './todosList';
import deleteTodo from  './removeReducer';
import editTodo from  './edit';

export default combineReducers({
    todoList,
    deleteTodo,
    editTodo
});
