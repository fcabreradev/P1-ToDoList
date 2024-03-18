import './App.css'
import { TodoList } from './components/TodoList'
import { TodoAdd } from "./components/TodoAdd"
import { useTodo } from "./hooks/useTodo"

function App() {

  const { 
    todos,
    todosCount,
    pendingTodosCount,
    handleCompleteTodo,
    handleDeleteTodo,
    handleNewTodo,
    handleUpdateTodo } = useTodo();

  return (
    <>
    <div className='container'>
      <div className="card-to-do">
        <h1>Lista de Tareas</h1>
        <div className="counter-todos">
          <h3>N° de Tareas: {todosCount}</h3>
          <h3>Pendientes: {pendingTodosCount}</h3>
        </div>
        <div className="add-todo">
          <h3>Agregar Tarea</h3>
          <TodoAdd handleNewTodo={handleNewTodo}/>                
        </div>

        <TodoList 
          todos={todos}
          handleDeleteTodo={handleDeleteTodo}
          handleCompleteTodo={handleCompleteTodo}
          handleUpdateTodo={handleUpdateTodo}
        />   
      </div>
    </div>
    </>
  )
}

export default App
