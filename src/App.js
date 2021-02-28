import React from 'react';
import Header from './components/header';
import FilterPanel from './components/filter-panel';
import TodoList from './components/todo-list';
import AddTodo from './components/addTodo';



function App() {

  return (
    <div className="container">
        <Header/>
        <AddTodo/>
        <TodoList/>
    </div>
      )
}
export default App;

//<FilterPanel/>