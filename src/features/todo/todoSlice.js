import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, task: "complete the homework"}]
}

const addTodoFunc = (state, action) => {
    const todo = {
        id: nanoid(),
        task: action.payload,
    }
    state.todos.push(todo);
} 

const removeTodoFunc = (state, action) => {
    state.todos = state.todos.filter((todo) => {
        console.log("state", state);
        console.log("Actions", action);
        return todo.id !== action.payload;
    });
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: addTodoFunc,
        removeTodo: removeTodoFunc,
    }
});

export const {addTodo, removeTodo} = todoSlice.actions;
export default todoSlice.reducer;
