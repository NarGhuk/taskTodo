import { combineReducers } from "redux";
import todoList from  './todosList';
import deleteTodo from  './delete';
import editTodo from  './edit';

export default combineReducers({
    todoList,
    deleteTodo,
    editTodo
});
