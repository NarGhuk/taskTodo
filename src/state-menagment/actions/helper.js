export const updateState = (todoList, response, getState) => {
    const {data: prevState} = todoList(getState());
    return prevState.map(item => {
        if (item._id === response._id) {
            return response;
        }
        return item;
    });
};

export const removeStateItem = (todoList, id, getState) => {
    const {data: prevState} = todoList(getState());
    return prevState.filter(item => item._id !== id);
};

export const pushNewTodo = (todoList, getState, newTodo) => {
    const {data: prevState} = todoList(getState());
    prevState.push(newTodo);
    return prevState;
};
