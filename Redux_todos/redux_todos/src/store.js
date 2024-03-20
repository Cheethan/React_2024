import {configureStore} from '@reduxjs/toolkit'
import todo_reducer from "./features/todoSlice"

const store = configureStore({
    reducer: todo_reducer
})

export default store