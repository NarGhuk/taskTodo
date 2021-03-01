import React from 'react';
import Header from './components/header';
import FilterPanel from './components/filter-panel';
import TodoList from './components/todo-list';
import AddTodo from './components/addTodo';
import {AppProvider} from './context';


function App() {

    return (
        <div className="container">
            <Header/>
            <AddTodo/>
            <AppProvider>
                <FilterPanel/>
                <TodoList/>
            </AppProvider>
        </div>
    )
}

export default App;
