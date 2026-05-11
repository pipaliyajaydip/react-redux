import './App.css'
import AddTodo from './components/addTodo'
import DisplayTodos from './components/displayTodos'
import DebounceExample from './Debounce/Debounce'

function App() {

  return (
    <>
      <h1>React-Redux</h1>
      <AddTodo />
      <DisplayTodos />
      <DebounceExample />
    </>
  )
}

export default App
