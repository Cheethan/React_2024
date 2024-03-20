import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialstate = {

    todos:[
        {
            id: 1,
            content: "Initial todo's text"
        }
    ]
}

export const todoslice = createSlice({
    name: 'todo_slice',
    initialState: initialstate,
    reducers: {

        addtodo: (state, action) => {
            const x = {
                id: nanoid(),
                content: action.payload
            }
            state.todos.push(x)
        },

        removetodo: (state, action) => {
            console.log(state.todos);
            state.todos = state.todos.filter((x) => (x.id !== action.payload))
            console.log(state.todos);
        }
    }
})

export const {addtodo,removetodo} = todoslice.actions

export default todoslice.reducer