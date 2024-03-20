
import { Provider } from 'react-redux'
import './App.css'
import Addtodo from './components/Addtodo'
import Todo from './components/Todo'
import store_todo from './store'


function App() {

  return (
    <>
      <Provider store={store_todo}>
        <Addtodo />
        <Todo />
      </Provider>

    </>
  )
}

export default App
